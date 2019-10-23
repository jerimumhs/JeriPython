clean:
	rm -r *.html assets

build:
	vuepress build
	mv .vuepress/dist/* .

build.clean: clean build

run:
	vuepress dev
