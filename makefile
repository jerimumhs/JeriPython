build:
	vuepress build
	cp -r .vuepress/dist/* .
	rm -r .vuepress/dist

run:
	vuepress dev
