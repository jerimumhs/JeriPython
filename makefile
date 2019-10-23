clean:
	rm -r docs/*

build: clean
	vuepress build
	mv .vuepress/dist/* docs

run:
	vuepress dev
