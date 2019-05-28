DOCKER_COMPOSE  = docker-compose

EXEC_PHP        = $(DOCKER_COMPOSE) exec -T php /entrypoint
EXEC_JS 		= $(DOCKER_COMPOSE) exec -T node /entrypoint
EXEC_SQL        = $(DOCKER_COMPOSE) exec -T database

SYMFONY         = $(EXEC_PHP) php bin/console
COMPOSER        = $(EXEC_PHP) composer
MYSQL        	= $(EXEC_SQL) mysql
MYSQLDUMP		= $(EXEC_SQL) mysqldump
YARN 			= $(EXEC_JS) yarn


DB_NAME 		= "downloadsearch"
##
## Project
## -------
##

install: ## Install and start the project
install: .env build start assets db-install

reset: ## Stop and start a fresh install of the project
reset: kill install

.PHONY: install reset


##
## Docker Tools
## ------------
##

build:
	$(DOCKER_COMPOSE) pull php node

kill:
	$(DOCKER_COMPOSE) kill
	$(DOCKER_COMPOSE) down --volumes --remove-orphans

start: ## Start the project
	$(DOCKER_COMPOSE) up -d --remove-orphans

stop: ## Stop the project
stop: db-backup
	$(DOCKER_COMPOSE) stop

clean: ## Stop the project and remove generated files
clean: kill
	rm -rf .env vendor node_modules

no-docker:
	$(eval DOCKER_COMPOSE := \#)
	$(eval EXEC_PHP := )
	$(eval EXEC_JS := )

.PHONY: build kill start stop clean no-docker

##
## Doctrine Utils
## --------------
##

db-install: ## Reset the database and load fixtures
db-install: .env vendor
	@$(EXEC_PHP) php -r 'echo "Wait database...\n"; set_time_limit(15); require __DIR__."/vendor/autoload.php"; (new \Symfony\Component\Dotenv\Dotenv())->load(__DIR__."/.env"); $$u = parse_url(getenv("DATABASE_URL")); for(;;) { if(@fsockopen($$u["host"].":".($$u["port"] ?? 3306))) { break; }}'
	-$(SYMFONY) doctrine:database:drop --if-exists --force
	-$(SYMFONY) doctrine:database:create --if-not-exists
	if [ -f dump/dump.sql ]; then $(MYSQL) -u root $(DB_NAME) < dump/dump.sql; fi
	$(SYMFONY) doctrine:schema:update --force
#	$(SYMFONY) doctrine:migrations:migrate --no-interaction --allow-no-migration
#	$(SYMFONY) doctrine:fixtures:load --no-interaction --purge-with-truncate

db-backup: ## Dump the content of the database
db-backup: 
	@$(EXEC_PHP) php -r 'echo "Wait database...\n"; set_time_limit(15); require __DIR__."/vendor/autoload.php"; (new \Symfony\Component\Dotenv\Dotenv())->load(__DIR__."/.env"); $$u = parse_url(getenv("DATABASE_URL")); for(;;) { if(@fsockopen($$u["host"].":".($$u["port"] ?? 3306))) { break; }}'
	$(MYSQLDUMP) -u root $(DB_NAME) > dump/dump.sql
	mv dump/dump.sql dump/dump-`date +'%Y%m%d_%H%M%S'`.sql

migration: ## Generate a new doctrine migration
migration: vendor
	$(SYMFONY) doctrine:migrations:diff

db-validate-schema: ## Validate the doctrine ORM mapping
db-validate-schema: .env vendor
	$(SYMFONY) doctrine:schema:validate

.PHONY: db migration db-backup

##
## Javascript
## ----------
##
assets-dev: ## Run Webpack Encore to compile assets
assets-dev: node_modules
	$(YARN) run dev

assets-production: ## Run Webpack Encore in watch mode
assets-production: node_modules
	$(YARN) run build
	
watch: ## Run Webpack Encore in watch mode
watch: node_modules
	$(YARN) run watch

.PHONY: assets-dev assets-production watch

##
## Tests
## -----
##

test: ## Run unit and functional tests
test: tu tf

tu: ## Run unit tests
tu: vendor
	$(EXEC_PHP) php bin/phpunit --exclude-group functional

tf: ## Run functional tests
tf: vendor
	$(EXEC_PHP) php bin/phpunit --group functional

.PHONY: tests tu tf

node_modules: yarn.lock
	$(YARN) install --no-optional
	@touch -c node_modules

yarn.lock: package.json
	$(YARN) upgrade

# rules based on files
composer.lock: composer.json
	$(COMPOSER) update --lock --no-scripts --no-interaction

vendor: composer.lock
	$(COMPOSER) install
.env: .env.dist
	@if [ -f .env ]; \
	then\
		echo '\033[1;41m/!\ The .env.dist file has changed. Please check your .env file (this message will not be displayed again).\033[0m';\
		touch .env;\
		exit 1;\
	else\
		echo cp .env.dist .env;\
		cp .env.dist .env;\
	fi

##
## Quality assurance
## -----------------
##

QA        = docker run --rm -v `pwd`:/project mykiwi/phaudit:7.2
ARTEFACTS = var/artefacts

lint: ## Lints twig and yaml files
lint: lt ly

lt: vendor
	$(SYMFONY) lint:twig templates

ly: vendor
	$(SYMFONY) lint:yaml config

security: ## Check security of your dependencies (https://security.sensiolabs.org/)
security: vendor
	$(EXEC_PHP) ./vendor/bin/security-checker security:check

phploc: ## PHPLoc (https://github.com/sebastianbergmann/phploc)
	$(QA) phploc src/

pdepend: ## PHP_Depend (https://pdepend.org)
pdepend: artefacts
	$(QA) pdepend \
		--summary-xml=$(ARTEFACTS)/pdepend_summary.xml \
		--jdepend-chart=$(ARTEFACTS)/pdepend_jdepend.svg \
		--overview-pyramid=$(ARTEFACTS)/pdepend_pyramid.svg \
		src/

phpmd: ## PHP Mess Detector (https://phpmd.org)
	$(QA) phpmd src text .phpmd.xml

php_codesnifer: ## PHP_CodeSnifer (https://github.com/squizlabs/PHP_CodeSniffer)
	$(QA) phpcs -v --standard=.phpcs.xml src

phpcpd: ## PHP Copy/Paste Detector (https://github.com/sebastianbergmann/phpcpd)
	$(QA) phpcpd src

phpdcd: ## PHP Dead Code Detector (https://github.com/sebastianbergmann/phpdcd)
	$(QA) phpdcd src

phpmetrics: ## PhpMetrics (http://www.phpmetrics.org)
phpmetrics: artefacts
	$(QA) phpmetrics --report-html=$(ARTEFACTS)/phpmetrics src

php-cs-fixer: ## php-cs-fixer (http://cs.sensiolabs.org)
	$(QA) php-cs-fixer fix --dry-run --using-cache=no --verbose --diff

apply-php-cs-fixer: ## apply php-cs-fixer fixes
	$(QA) php-cs-fixer fix --using-cache=no --verbose --diff

twigcs: ## twigcs (https://github.com/allocine/twigcs)
	$(QA) twigcs lint templates

eslint: ## eslint (https://eslint.org/)
eslint: node_modules
	$(EXEC_JS) node_modules/.bin/eslint --fix-dry-run assets/js/**

artefacts:
	mkdir -p $(ARTEFACTS)

.PHONY: lint lt ly phploc pdepend phpmd php_codesnifer phpcpd phpdcd phpmetrics php-cs-fixer apply-php-cs-fixer artefacts


##
## Commands shortcut
## -----------------
##

php :
	$(EXEC_PHP) php

.PHONY : php

# Defaults
.DEFAULT_GOAL := help
help:
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'
.PHONY: help
