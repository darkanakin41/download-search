<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190602105135 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE media_season (id INT AUTO_INCREMENT NOT NULL, media_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, number INT DEFAULT NULL, description LONGTEXT DEFAULT NULL, poster VARCHAR(255) DEFAULT NULL, release_date DATE DEFAULT NULL, updated DATETIME DEFAULT NULL, the_movie_db_id INT DEFAULT NULL, INDEX IDX_4C9DC177EA9FDD75 (media_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE media_season_episode (id INT AUTO_INCREMENT NOT NULL, season_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, number INT DEFAULT NULL, description LONGTEXT DEFAULT NULL, poster VARCHAR(255) DEFAULT NULL, updated DATETIME DEFAULT NULL, release_date DATE DEFAULT NULL, average_note DOUBLE PRECISION DEFAULT NULL, the_movie_db_id INT DEFAULT NULL, INDEX IDX_59E641C44EC001D1 (season_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE media_season ADD CONSTRAINT FK_4C9DC177EA9FDD75 FOREIGN KEY (media_id) REFERENCES media (id)');
        $this->addSql('ALTER TABLE media_season_episode ADD CONSTRAINT FK_59E641C44EC001D1 FOREIGN KEY (season_id) REFERENCES media_season (id)');
        $this->addSql('ALTER TABLE item CHANGE source_id source_id INT DEFAULT NULL, CHANGE media_id media_id INT DEFAULT NULL, CHANGE quality quality VARCHAR(50) DEFAULT NULL, CHANGE last_part last_part VARCHAR(50) DEFAULT NULL, CHANGE url url VARCHAR(255) DEFAULT NULL, CHANGE category category VARCHAR(50) DEFAULT NULL, CHANGE language language VARCHAR(50) DEFAULT NULL, CHANGE season season INT DEFAULT NULL');
        $this->addSql('ALTER TABLE media CHANGE category category VARCHAR(50) DEFAULT NULL, CHANGE poster poster VARCHAR(255) DEFAULT NULL, CHANGE backdrop backdrop VARCHAR(255) DEFAULT NULL, CHANGE updated updated DATETIME DEFAULT NULL, CHANGE the_movie_db_id the_movie_db_id INT DEFAULT NULL, CHANGE release_date release_date DATE DEFAULT NULL, CHANGE average_note average_note DOUBLE PRECISION DEFAULT NULL, CHANGE status status VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE updated updated DATETIME DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE media_season_episode DROP FOREIGN KEY FK_59E641C44EC001D1');
        $this->addSql('DROP TABLE media_season');
        $this->addSql('DROP TABLE media_season_episode');
        $this->addSql('ALTER TABLE item CHANGE source_id source_id INT DEFAULT NULL, CHANGE media_id media_id INT DEFAULT NULL, CHANGE category category VARCHAR(50) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE quality quality VARCHAR(50) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE language language VARCHAR(50) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE season season INT DEFAULT NULL, CHANGE last_part last_part VARCHAR(50) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE url url VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE media CHANGE category category VARCHAR(50) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE poster poster VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE backdrop backdrop VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE updated updated DATETIME DEFAULT \'NULL\', CHANGE status status VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE release_date release_date DATE DEFAULT \'NULL\', CHANGE average_note average_note DOUBLE PRECISION DEFAULT \'NULL\', CHANGE the_movie_db_id the_movie_db_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE updated updated DATETIME DEFAULT \'NULL\'');
    }
}
