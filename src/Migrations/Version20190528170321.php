<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190528170321 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE media (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, description LONGTEXT DEFAULT NULL, category VARCHAR(50) DEFAULT NULL, poster VARCHAR(255) DEFAULT NULL, backdrop VARCHAR(255) DEFAULT NULL, updated DATETIME DEFAULT NULL, the_movie_db_id INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE item ADD media_id INT DEFAULT NULL, ADD category VARCHAR(50) DEFAULT NULL, CHANGE source_id source_id INT DEFAULT NULL, CHANGE quality quality VARCHAR(50) DEFAULT NULL, CHANGE last_part last_part VARCHAR(50) DEFAULT NULL, CHANGE url url VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE item ADD CONSTRAINT FK_1F1B251EEA9FDD75 FOREIGN KEY (media_id) REFERENCES media (id)');
        $this->addSql('CREATE INDEX IDX_1F1B251EEA9FDD75 ON item (media_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE item DROP FOREIGN KEY FK_1F1B251EEA9FDD75');
        $this->addSql('DROP TABLE media');
        $this->addSql('DROP INDEX IDX_1F1B251EEA9FDD75 ON item');
        $this->addSql('ALTER TABLE item DROP media_id, DROP category, CHANGE source_id source_id INT DEFAULT NULL, CHANGE quality quality VARCHAR(50) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE last_part last_part VARCHAR(50) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE url url VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci');
    }
}
