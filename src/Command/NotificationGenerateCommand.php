<?php

namespace App\Command;

use App\API\Download\GlobalAPI;
use App\Entity\Item;
use App\Entity\MediaSeasonEpisode;
use App\Entity\MediaSubscription;
use App\Entity\Notification;
use App\Entity\NotificationMediaSeasonEpisode;
use App\Factory\NotificationFactory;
use App\Nomenclature\NotificationActionNomenclature;
use App\Service\MediaSeasonEpisodeService;
use Exception;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Helper\ProgressBar;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

/**
 * @property RegistryInterface  registry
 * @property MediaSeasonEpisodeService mediaSeasonEpisodeService
 */
class NotificationGenerateCommand extends Command
{
    protected static $defaultName = 'app:notification:generate';

    public function __construct(RegistryInterface $registry, MediaSeasonEpisodeService $mediaSeasonEpisodeService)
    {
        $this->registry = $registry;
        $this->mediaSeasonEpisodeService = $mediaSeasonEpisodeService;
        parent::__construct();
    }

    protected function configure()
    {
        $this->setDescription('Generate Notification');
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

        $startDay = \DateTime::createFromFormat( "Y-m-d H:i:s", date("Y-m-d 00:00:00"));
        $endDay = $startDay->add(new \DateInterval('P1D'));

        $episodes = $this->mediaSeasonEpisodeService->getBetween($startDay, $endDay);
        if (count($episodes) === 0) {
            $io->success('Process ended without any notification to generate');
            return;
        }

        $notificationCreated = 0;
        foreach ($episodes as $item) {
            $subscriptions = $this->registry->getRepository(MediaSubscription::class)->findBy(['media' => $item->getSeason()->getMedia()]);
            foreach($subscriptions as $subscription){
                $notification = $this->registry->getRepository(NotificationMediaSeasonEpisode::class)->findOneBy([
                    'user' => $subscription->getUser(),
                    'media_season_episode' => $item]);
                if($notification !== null){
                    continue;
                }
                $notification = NotificationFactory::createMediaSeasonEpisodeNotification($item, $subscription->getUser(), NotificationActionNomenclature::NEW_ITEM);
                $this->registry->getManager()->persist($notification);
                $notificationCreated++;
            }
        }
        $this->registry->getManager()->flush();

        $io->success('All items have been processed, we created ' . $notificationCreated);

        return;
    }
}
