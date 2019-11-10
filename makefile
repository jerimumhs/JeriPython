build:
	vuepress build
	cp -r .vuepress/dist/* ./docs/
	rm -r .vuepress/dist

run:
	vuepress dev
