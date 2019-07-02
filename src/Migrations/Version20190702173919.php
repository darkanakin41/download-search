<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190702173919 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE notification (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, action VARCHAR(255) NOT NULL, date DATETIME NOT NULL, `readed` TINYINT(1) NOT NULL, type VARCHAR(255) NOT NULL, INDEX IDX_BF5476CAA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE notification_media (id INT NOT NULL, media_id INT DEFAULT NULL, INDEX IDX_AC9844F5EA9FDD75 (media_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE notification_media_season_episode (id INT NOT NULL, media_season_episode_id INT DEFAULT NULL, INDEX IDX_3471AD4450ECC2FC (media_season_episode_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE notification ADD CONSTRAINT FK_BF5476CAA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE notification_media ADD CONSTRAINT FK_AC9844F5EA9FDD75 FOREIGN KEY (media_id) REFERENCES media (id)');
        $this->addSql('ALTER TABLE notification_media ADD CONSTRAINT FK_AC9844F5BF396750 FOREIGN KEY (id) REFERENCES notification (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE notification_media_season_episode ADD CONSTRAINT FK_3471AD4450ECC2FC FOREIGN KEY (media_season_episode_id) REFERENCES media_season_episode (id)');
        $this->addSql('ALTER TABLE notification_media_season_episode ADD CONSTRAINT FK_3471AD44BF396750 FOREIGN KEY (id) REFERENCES notification (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE notification_media DROP FOREIGN KEY FK_AC9844F5BF396750');
        $this->addSql('ALTER TABLE notification_media_season_episode DROP FOREIGN KEY FK_3471AD44BF396750');
        $this->addSql('DROP TABLE notification');
        $this->addSql('DROP TABLE notification_media');
        $this->addSql('DROP TABLE notification_media_season_episode');
    }
}
