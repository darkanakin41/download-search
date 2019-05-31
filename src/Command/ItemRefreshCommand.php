<?php

namespace App\Command;

use App\API\Download\GlobalAPI;
use App\Entity\Item;
use Exception;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Helper\ProgressBar;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

/**
 * @property GlobalAPI         $globalAPI
 * @property RegistryInterface registry
 */
class ItemRefreshCommand extends Command
{
    protected static $defaultName = 'app:item:refresh';

    public function __construct(RegistryInterface $registry, GlobalAPI $globalAPI)
    {
        $this->registry = $registry;
        $this->globalAPI = $globalAPI;
        parent::__construct();
    }

    protected function configure()
    {
        $this->setDescription('Refresh items without category in order to retrieve the associated informations');
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

        $items = $this->registry->getRepository(Item::class)->findBy(['category' => null]);
        if (count($items) === 0) {
            $io->success('Process ended without any items to update');
            return;
        }

        $progressBar = new ProgressBar($output, count($items));
        $progressBar->start();
        $progressBar->display();

        foreach ($items as $item) {
            $this->globalAPI->update($item);
            $this->registry->getManager()->persist($item);
            $this->registry->getManager()->flush();
            $progressBar->advance();
        }

        $io->success('All items have been processed');

        return;
    }
}
