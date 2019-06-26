<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190625164134 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE media ADD source VARCHAR(255) DEFAULT NULL, CHANGE the_movie_db_id source_id INT DEFAULT NULL');
        $this->addSql('UPDATE media SET source = \'themoviedb\'');
        $this->addSql('UPDATE item SET category = NULL, media_id = NULL WHERE category IN (\'animes\', \'tv\')');
        $this->addSql('DELETE FROM media_subscription');
        $this->addSql('DELETE FROM media_season_episode');
        $this->addSql('DELETE FROM media_season');
        $this->addSql('DELETE FROM media WHERE category IN (\'animes\', \'tv\')');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE media CHANGE source_id the_movie_db_id INT DEFAULT NULL, DROP source');
    }
}
