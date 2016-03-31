# bjuenger.de

My personal homepage (in German). https://bjuenger.de


## Tools

quodlibet

    go get github.com/blindgaenger/quodlibet

caddy

    brew install caddy

self-signed certificate

    openssl req -new -newkey rsa:2048 -sha256 -days 365 -nodes -x509 -keyout cert.key -out cert.crt


## GitHub Pages

https://pages.github.com/
https://gohugo.io/tutorials/github-pages-blog/#configure-git-workflow

Add Github pages

    git checkout --orphan gh-pages
    git rm -rf .
    echo "YAY" >index.html
    git add .
    git commit -m "initial gh-pages"
    git push origin gh-pages

Check out

    open https://blindgaenger.github.io/bjuenger-homepage/

Remove build dir

    git checkout master
    rm -rf build
    git add .
    git commit -m "removed build dir"
    git push origin master

Add build dir from gh-pages

    git fetch --all
    git subtree add --prefix=build git@github.com:blindgaenger/bjuenger-homepage.git gh-pages
    git subtree pull --prefix=build git@github.com:blindgaenger/bjuenger-homepage.git gh-pages

Build project

    quodlibet build
    git add --all build
    git commit -m "updated build"
    git push origin master
    git subtree push --prefix=build git@github.com:blindgaenger/bjuenger-homepage.git gh-pages


## TODO

hardware acceleration on card

    http://blog.teamtreehouse.com/increase-your-sites-performance-with-hardware-accelerated-css
    // note: the translateZ(0) enables hardware accel
    // without it, there is a weird gap between panels
    transform: translate(-50%, -50%) translateZ(0);

drop-shadow

    box-shadow:
    // 0px 2px 10px  0px rgba(0,0,0,0.15),
    // 0px 2px  5px  0px rgba(0,0,0,0.20),
    2vh 3vh 17vh -4vh rgba(0,0,0,0.40);

align socials

    http://pixelarity.com/highlights

cover image

    #cover {
      width: 100px;
      height: 30%;
      display: block;
      object-fit: cover;
    }

add favicon

remove unused js

remove comments from minified css

cloudflare minification & caching

    https://scotch.io/tutorials/jekyll-github-pages-and-cloudflare-for-pagespeed-win
    Performance profile: this will change by itself
    Individual performance settings: Aggressive
    Minimum expire TTL: 24 days
    Auto Minify (Web optimization): select all (JS, CSS, HTML)
    Rocket Loader: off
