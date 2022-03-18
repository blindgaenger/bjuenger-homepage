import React from "react";
import SocialLinks from '../components/social-links';

export default function Home() {
  return (
    <>
      <SocialLinks />

      <section className="intro" itemProp="description">
        <p className="intro__hamburg">Currently living in Hamburg</p>
        <p className="intro__work">Front &amp; back end for apps</p>
        <p className="intro__happy">Happy to be me!</p>
      </section>
    </>
  )
}
