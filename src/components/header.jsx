import React from 'react';
import SocialLinks from './social-links';
import NavBar from './nav-bar';

export default function Header() {
  return (
    <header className="person">
      <div className="person__image"></div>
      <NavBar />
      <h1 className="person__name" itemProp="name">Bernd Jünger</h1>
    </header>
  )
}
