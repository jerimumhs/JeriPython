clean:
	rm docs/*

build:
	vuepress build
	# mv .vuepress/dist/* docs

build.clean: clean build

run:
	vuepress dev
