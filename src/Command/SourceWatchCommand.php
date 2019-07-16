<?php

namespace App\Command;

use App\API\Download\GlobalAPI;
use App\Entity\Item;
use App\Entity\SourceWatch;
use App\Service\SourceWatchService;
use Exception;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Helper\ProgressBar;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

/**
 * @property RegistryInterface  registry
 * @property SourceWatchService sourceWatchService
 */
class SourceWatchCommand extends Command
{
    protected static $defaultName = 'app:source:watch';
    const NEXT_COMMAND = 'app:item:update';

    public function __construct(RegistryInterface $registry, SourceWatchService $sourceWatchService)
    {
        $this->registry = $registry;
        $this->sourceWatchService = $sourceWatchService;
        parent::__construct();
    }

    protected function configure()
    {
        $this->setDescription('Parse websites watched pages and retrieve new items');
    }

    /**
     * Command processus
     *
     * @param InputInterface  $input
     * @param OutputInterface $output
     *
     * @return void
     * @throws Exception
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $io = new SymfonyStyle($input, $output);

        $sourceWatches = $this->registry->getRepository(SourceWatch::class)->findAll();
        if (count($sourceWatches) === 0) {
            $io->success('Process ended without any items to update');
            return;
        }

        $progressBar = new ProgressBar($output, count($sourceWatches));
        $progressBar->start();
        $progressBar->display();

        $count = 0;

        foreach ($sourceWatches as $sourceWatch) {
            $items = $this->sourceWatchService->process($sourceWatch);

            $count += count($items);
            $io->writeln("");
            $io->writeln(sprintf('We retrieved %d items for %s - %s', count($items), $sourceWatch->getSource()->getTitle(), $sourceWatch->getTitle()));

            $progressBar->advance();
        }

        $io->success(sprintf('We retrieved %d items, trigger %s', $count, self::NEXT_COMMAND));

        $command = $this->getApplication()->find(self::NEXT_COMMAND);
        $command->run($input, $output);
        return;
    }
}
