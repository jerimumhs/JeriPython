build:
	vuepress build
	cp -r .vuepress/dist/* .

run:
	vuepress dev
