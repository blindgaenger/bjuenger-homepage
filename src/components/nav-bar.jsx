import React from 'react';
import styled from 'styled-components';
import { Link, useRoute } from 'wouter';

const Nav = styled('nav')`
  padding: 1.5rem 0;
  white-space: nowrap;
`;

const NormalLink = styled(Link)`
  padding: 0.25rem 0.5rem;
  color: var(--color-darker);
  text-decoration: none;
  &:hover {
    border-bottom-color: var(--color-dark);
    border-bottom-style: double;
    border-bottom-width: medium 0 0 0;
  }
`;

const ActiveLink = styled(NormalLink)`
  border-bottom-color: var(--color-dark);
  border-bottom-style: double;
  border-bottom-width: medium 0 0 0;
`;

const NavLink = props => {
  const [isActive] = useRoute(props.href);
  return isActive ? <ActiveLink {...props} /> : <NormalLink {...props} />;
};

const Divider = styled('span')`
  padding: 0 1rem;
  color: var(--color-darker);
`;

export default function NavBar(props) {
  return (
    <Nav>
      <NavLink href='/'>Home</NavLink>
      <Divider>|</Divider>
      <NavLink href='/about'>About</NavLink>
      <Divider>|</Divider>
      <NavLink href='/work'>Work</NavLink>
    </Nav>
  )
}