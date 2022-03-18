import React from 'react';
import { Helmet } from 'react-helmet-async';
import config from '../config.json';

export default function MetaTags() {
  return (
    <Helmet>
      <title>{config.title}</title>
      <meta name='robots' content='index,follow' />

      <meta name='description' content={config.description} />
      <meta name='keywords' content={config.keywords} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <meta property='og:type' content='profile' />
      <meta property='og:url' content={config.url} />
      <meta property='og:title' content={config.title} />
      <meta property='og:description' content={config.description} />
      <meta property='og:image' content={config.image} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content={config.twitter} />
      <meta name='twitter:title' content={config.title} />
      <meta name='twitter:description' content={config.description} />

      <link rel='canonical' href={config.url} />
      <link rel='icon' type='image/png' href='/favicon.png' sizes='96x96' />
      <link rel='apple-touch-icon' href='/apple-touch-icon.png' sizes='180x180' />
      <link rel='apple-touch-icon-precomposed' href='/apple-touch-icon-precomposed.png' sizes='180x180' />
    </Helmet>
  );
};
