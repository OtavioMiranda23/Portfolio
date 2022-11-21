import React, { HtmlHTMLAttributes, useState } from 'react';

import { Container, MenuBurguer, BarrasMenuHamburguer, NavbarExpandida } from './styles';

const Navbar = () => {
  const [isNavBarExpandida, setIsNavBarExpandida] = useState<boolean>(false);
  
const navBarAberta = 
  <NavbarExpandida>
    <MenuBurguer>
    <ul>
      <li>BIO</li>
      <li>HABILIDADES</li>
      <li>PORTFÓLIO</li>
    </ul>
    </MenuBurguer>
  </NavbarExpandida>
  return (
    <>
        { isNavBarExpandida && navBarAberta }
    <Container>
      <ul>
        <li>Bio</li>
        <li>Habilidade</li>
        <li>Portfólio</li>
      </ul>
      <BarrasMenuHamburguer className='menuMobile'>
        <input
        type="checkbox"
        onChange={(event:React.ChangeEvent<HTMLInputElement>)=> setIsNavBarExpandida(event.currentTarget.checked)} />
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </BarrasMenuHamburguer>
    </Container>
    </>
    );
}

export default Navbar;