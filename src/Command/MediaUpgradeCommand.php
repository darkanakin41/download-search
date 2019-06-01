<?php

namespace App\Command;

use App\Entity\Media;
use App\Service\MediaService;
use Exception;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Helper\ProgressBar;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

/**
 * @property RegistryInterface registry
 * @property MediaService      mediaService
 */
class MediaUpgradeCommand extends Command
{
    protected static $defaultName = 'app:media:upgrade';

    public function __construct(RegistryInterface $registry, MediaService $mediaService)
    {
        $this->registry = $registry;
        $this->mediaService = $mediaService;

        parent::__construct();
    }

    protected function configure()
    {
        $this->setDescription('Upgrade media with latest data');
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

        $items = $this->registry->getRepository(Media::class)->findAll();
        if (count($items) === 0) {
            $io->success('Process ended without any medias to upgrade');
            return;
        }

        $progressBar = new ProgressBar($output, count($items));
        $progressBar->start();
        $progressBar->display();

        $medias = $this->registry->getRepository(Media::class)->findAll();

        foreach ($medias as $media) {
            $this->mediaService->update($media);
            $this->registry->getManager()->flush();
            $progressBar->advance();
        }

        $io->success('All items have been processed');

        return;
    }
}
