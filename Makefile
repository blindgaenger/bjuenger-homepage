dev:
	caddy

build:
	quodlibet build

deploy:
	git push origin master
	git subtree push --prefix=build git@github.com:blindgaenger/bjuenger-homepage.git gh-pages

.PHONY: build deploy