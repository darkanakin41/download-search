<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190605160917 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE media_subscription (id INT AUTO_INCREMENT NOT NULL, media_id INT DEFAULT NULL, user_id INT DEFAULT NULL, created DATETIME NOT NULL, INDEX IDX_CA37CE5FEA9FDD75 (media_id), INDEX IDX_CA37CE5FA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE media_subscription ADD CONSTRAINT FK_CA37CE5FEA9FDD75 FOREIGN KEY (media_id) REFERENCES media (id)');
        $this->addSql('ALTER TABLE media_subscription ADD CONSTRAINT FK_CA37CE5FA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE item CHANGE source_id source_id INT DEFAULT NULL, CHANGE media_id media_id INT DEFAULT NULL, CHANGE quality quality VARCHAR(50) DEFAULT NULL, CHANGE last_part last_part VARCHAR(50) DEFAULT NULL, CHANGE url url VARCHAR(255) DEFAULT NULL, CHANGE category category VARCHAR(50) DEFAULT NULL, CHANGE language language VARCHAR(50) DEFAULT NULL, CHANGE season season INT DEFAULT NULL');
        $this->addSql('ALTER TABLE media CHANGE category category VARCHAR(50) DEFAULT NULL, CHANGE poster poster VARCHAR(255) DEFAULT NULL, CHANGE backdrop backdrop VARCHAR(255) DEFAULT NULL, CHANGE updated updated DATETIME DEFAULT NULL, CHANGE the_movie_db_id the_movie_db_id INT DEFAULT NULL, CHANGE release_date release_date DATE DEFAULT NULL, CHANGE average_note average_note DOUBLE PRECISION DEFAULT NULL, CHANGE status status VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE media_season CHANGE media_id media_id INT DEFAULT NULL, CHANGE number number INT DEFAULT NULL, CHANGE poster poster VARCHAR(255) DEFAULT NULL, CHANGE release_date release_date DATE DEFAULT NULL, CHANGE updated updated DATETIME DEFAULT NULL, CHANGE the_movie_db_id the_movie_db_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE media_season_episode CHANGE season_id season_id INT DEFAULT NULL, CHANGE number number INT DEFAULT NULL, CHANGE poster poster VARCHAR(255) DEFAULT NULL, CHANGE updated updated DATETIME DEFAULT NULL, CHANGE release_date release_date DATE DEFAULT NULL, CHANGE average_note average_note DOUBLE PRECISION DEFAULT NULL, CHANGE the_movie_db_id the_movie_db_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE updated updated DATETIME DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE media_subscription');
        $this->addSql('ALTER TABLE item CHANGE source_id source_id INT DEFAULT NULL, CHANGE media_id media_id INT DEFAULT NULL, CHANGE category category VARCHAR(50) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE quality quality VARCHAR(50) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE language language VARCHAR(50) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE season season INT DEFAULT NULL, CHANGE last_part last_part VARCHAR(50) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE url url VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE media CHANGE category category VARCHAR(50) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE poster poster VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE backdrop backdrop VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE updated updated DATETIME DEFAULT \'NULL\', CHANGE status status VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE release_date release_date DATE DEFAULT \'NULL\', CHANGE average_note average_note DOUBLE PRECISION DEFAULT \'NULL\', CHANGE the_movie_db_id the_movie_db_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE media_season CHANGE media_id media_id INT DEFAULT NULL, CHANGE number number INT DEFAULT NULL, CHANGE poster poster VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE release_date release_date DATE DEFAULT \'NULL\', CHANGE updated updated DATETIME DEFAULT \'NULL\', CHANGE the_movie_db_id the_movie_db_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE media_season_episode CHANGE season_id season_id INT DEFAULT NULL, CHANGE number number INT DEFAULT NULL, CHANGE poster poster VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE updated updated DATETIME DEFAULT \'NULL\', CHANGE release_date release_date DATE DEFAULT \'NULL\', CHANGE average_note average_note DOUBLE PRECISION DEFAULT \'NULL\', CHANGE the_movie_db_id the_movie_db_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE updated updated DATETIME DEFAULT \'NULL\'');
    }
}
