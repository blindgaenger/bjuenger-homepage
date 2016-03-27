dev:
	caddy

build:
	quodlibet build

deploy: build
	git add --all build/
	git commit -m "updated build"
	git push origin master
	git subtree push --prefix=build git@github.com:blindgaenger/bjuenger-homepage.git gh-pages

.PHONY: build deploy