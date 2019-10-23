################################################################################
# Docker-compose vue service commands for dev
################################################################################

dist:
	docker-compose run vue vuepress build
	mv .vuepress/dist/* .
	rm -r .vuepress

bash:
	docker-compose run django bash

up:
	docker-compose up -d

logs:
	docker-compose logs -f

down:
	docker-compose down

build:
	docker-compose build
