# bjuenger-homepage

My [personal homepage](https://bjuenger.de/) hosted on [GitHub pages](https://blindgaenger.github.io/bjuenger-homepage/).

## TODO

license for Roboto font

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

cloudflare minification & caching

    https://scotch.io/tutorials/jekyll-github-pages-and-cloudflare-for-pagespeed-win
    Performance profile: this will change by itself
    Individual performance settings: Aggressive
    Minimum expire TTL: 24 days
    Auto Minify (Web optimization): select all (JS, CSS, HTML)
    Rocket Loader: off

## TBD

Learn with Jason - react-three-fiber
- https://www.youtube.com/watch?v=1rP3nNY2hTo
- https://github.com/drcmda/learnwithjason
