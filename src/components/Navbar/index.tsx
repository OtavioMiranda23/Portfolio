import React from 'react';

import { Container, MenuBurguer, BarrasMenuHamburguer } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <MenuBurguer>
      <ul>
        <li>OTV</li>
        <li>BIO</li>
        <li>HABILIDADES</li>
        <li>PORTFÓLIO</li>
      </ul>
      <BarrasMenuHamburguer>
        <input type="checkbox" name="" />
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </BarrasMenuHamburguer>
      </MenuBurguer>
    </Container>
    );
}

export default Navbar;