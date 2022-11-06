import React, { useState } from 'react';

import { Container, MenuBurguer, BarrasMenuHamburguer } from './styles';

const Navbar = () => {
  const [navBarExpandida, setNavBarExpandida] = useState<boolean>(false);
  const handleChange = (e: any) => {
    setNavBarExpandida(e.target.checked);
    console.log(navBarExpandida)
    };
  const navBarFechada = 
  <div>
  <MenuBurguer>
  <ul>
    <li>BIO</li>
    <li>HABILIDADES</li>
    <li>PORTFÓLIO</li>
  </ul>
  <BarrasMenuHamburguer>
    <input
    type="checkbox"
    onChange={(e)=> handleChange(e)} />
    <div>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </BarrasMenuHamburguer>
  </MenuBurguer>
  </div>; 
  
  const navBarAberta = 
  <Container>
  <MenuBurguer>
  <ul>
    <li>BIO</li>
    <li>HABILIDADES</li>
    <li>PORTFÓLIO</li>
  </ul>
  <BarrasMenuHamburguer>
    <input
    type="checkbox"
    onChange={(e)=> handleChange(e)} />
    <div>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </BarrasMenuHamburguer>
  </MenuBurguer>
</Container>
  return (
    <Container>
    <MenuBurguer>
    <ul>
      <li>BIO</li>
      <li>HABILIDADES</li>
      <li>PORTFÓLIO</li>
    </ul>
    <BarrasMenuHamburguer>
      <input
      type="checkbox"
      onChange={(e)=> handleChange(e)} />
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