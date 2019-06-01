<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190601190041 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE genre (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE media_genre (media_id INT NOT NULL, genre_id INT NOT NULL, INDEX IDX_9C49F749EA9FDD75 (media_id), INDEX IDX_9C49F7494296D31F (genre_id), PRIMARY KEY(media_id, genre_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE media_genre ADD CONSTRAINT FK_9C49F749EA9FDD75 FOREIGN KEY (media_id) REFERENCES media (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE media_genre ADD CONSTRAINT FK_9C49F7494296D31F FOREIGN KEY (genre_id) REFERENCES genre (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE item CHANGE source_id source_id INT DEFAULT NULL, CHANGE media_id media_id INT DEFAULT NULL, CHANGE quality quality VARCHAR(50) DEFAULT NULL, CHANGE last_part last_part VARCHAR(50) DEFAULT NULL, CHANGE url url VARCHAR(255) DEFAULT NULL, CHANGE category category VARCHAR(50) DEFAULT NULL, CHANGE language language VARCHAR(50) DEFAULT NULL, CHANGE season season INT DEFAULT NULL');
        $this->addSql('ALTER TABLE media ADD released TINYINT(1) NOT NULL, ADD release_date DATE DEFAULT NULL, ADD average_note DOUBLE PRECISION DEFAULT NULL, CHANGE category category VARCHAR(50) DEFAULT NULL, CHANGE poster poster VARCHAR(255) DEFAULT NULL, CHANGE backdrop backdrop VARCHAR(255) DEFAULT NULL, CHANGE updated updated DATETIME DEFAULT NULL, CHANGE the_movie_db_id the_movie_db_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE updated updated DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE media ADD status VARCHAR(255) DEFAULT NULL, DROP released, CHANGE category category VARCHAR(50) DEFAULT NULL, CHANGE poster poster VARCHAR(255) DEFAULT NULL, CHANGE backdrop backdrop VARCHAR(255) DEFAULT NULL, CHANGE updated updated DATETIME DEFAULT NULL, CHANGE the_movie_db_id the_movie_db_id INT DEFAULT NULL, CHANGE release_date release_date DATE DEFAULT NULL, CHANGE average_note average_note DOUBLE PRECISION DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE media_genre DROP FOREIGN KEY FK_9C49F7494296D31F');
        $this->addSql('DROP TABLE genre');
        $this->addSql('DROP TABLE media_genre');
        $this->addSql('ALTER TABLE item CHANGE source_id source_id INT DEFAULT NULL, CHANGE media_id media_id INT DEFAULT NULL, CHANGE category category VARCHAR(50) DEFAULT \'\'NULL\'\' COLLATE utf8mb4_unicode_ci, CHANGE quality quality VARCHAR(50) DEFAULT \'\'NULL\'\' COLLATE utf8mb4_unicode_ci, CHANGE language language VARCHAR(50) DEFAULT \'\'NULL\'\' COLLATE utf8mb4_unicode_ci, CHANGE season season INT DEFAULT NULL, CHANGE last_part last_part VARCHAR(50) DEFAULT \'\'NULL\'\' COLLATE utf8mb4_unicode_ci, CHANGE url url VARCHAR(255) DEFAULT \'\'NULL\'\' COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE media DROP released, DROP release_date, DROP average_note, CHANGE category category VARCHAR(50) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE poster poster VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE backdrop backdrop VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE updated updated DATETIME DEFAULT \'NULL\', CHANGE the_movie_db_id the_movie_db_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE updated updated DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE media ADD released TINYINT(1) NOT NULL, DROP status, CHANGE category category VARCHAR(50) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE poster poster VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE backdrop backdrop VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE updated updated DATETIME DEFAULT \'NULL\', CHANGE release_date release_date DATE DEFAULT \'NULL\', CHANGE average_note average_note DOUBLE PRECISION DEFAULT \'NULL\', CHANGE the_movie_db_id the_movie_db_id INT DEFAULT NULL');
    }
}
