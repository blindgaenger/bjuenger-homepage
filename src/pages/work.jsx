import React from 'react';
import Separator from '../components/separator';
import VideoPhone from '../components/video-phone';

export default function Work() {
  return (
    <>
      <Separator />

      <section className='section'>
        <h2>Yo Cast</h2>

        <p>
          A company I've founded together with Philipp Glöckler.
          Yo Cast was a mobile first professional podcast recording tool, aiming to make the podcasting process simpler, faster, and cheaper through an AI based post-production process, thereby making professional production available to everyone.
        </p>

        <VideoPhone url='https://youtu.be/WDTb-oAvzSE' />

        <p>
          Under the hood it was a React Native app, with some native extension for the local recording.
          The Backend was hosted on Google Cloud Run services, exposing a GraphQL API and some Firebase functions.
          The audio post-production service in Python.
          Complete infrastructure as code with Terraform.
        </p>
      </section>
    </>
  )
}
