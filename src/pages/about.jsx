import React from 'react';
import Separator from '../components/separator';

export default function About() {
  return (
    <>
      <Separator />

      <section className='section'>
        <h2>Development</h2>
        <p>
          I solve problems with software, therefore I develop applications.
          Mobile apps, web apps, backend services, you name it.
          Honestly, coding is boring and I try to automate as much as possible.
        </p>

        <h2>Approach</h2>
        <p>
          Analyzing workflows and designing software products is what I actually like.
          The whiteboard is my best friend.
          And together with open-minded and honest design and product people it is the most fun.
        </p>

        <h2>Experience</h2>
        <p>
          I have led smaller teams, but have supervised too many theses.
          Studied computer science in Karlsruhe, then gained a lot of experience in e-commerce shopping.
          Worked in startups, for agile service providers, and also founded a company myself.
        </p>

        <h2>Tools</h2>
        <p>
          Right now, I mostly use TypeScript along the stack, with all its quirks.
          And more and more often Python as soon as data comes into play.
          Yes, React Native is enough for most mobile apps.
          But I've worked professionally with a wide variety of languages and frameworks.
        </p>

        <h2>Beyond</h2>
        <p>
          Tinker a few things in my spare time, but still like to be offline.
          And I just can't do without music.
        </p>
      </section>
    </>
  );
}
