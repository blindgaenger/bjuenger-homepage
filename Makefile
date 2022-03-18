# https://stackoverflow.com/questions/69417788/vite-https-on-localhost
.PHONEY: setup
setup:
	brew install mkcert
	brew install nss
	mkcert -install

.PHONEY: start
start:
	npm run start

.PHONEY: clean
clean:
	rm -rf build/*

.PHONEY: build
build: clean
	npm run build

.PHONEY: preview
preview: build
	npm run serve

.PHONY: deploy
deploy: build
	git push origin master
	git subtree push --prefix=build git@github.com:blindgaenger/bjuenger-homepage.git gh-pages
