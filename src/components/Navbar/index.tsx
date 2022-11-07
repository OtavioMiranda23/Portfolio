import React, { HtmlHTMLAttributes, useState } from 'react';

import { Container, MenuBurguer, BarrasMenuHamburguer } from './styles';

const Navbar = () => {
  const [isNavBarExpandida, setIsNavBarExpandida] = useState<boolean>();
  // const handleChange = (e: any) => {
  //   setIsNavBarExpandida(e.target.checked);
  //   console.log(isNavBarExpandida)
  //   };
  
  
  const navBarAberta = 
  <Container>
  <MenuBurguer>
  <ul>
    <li>BIO</li>
    <li>HABILIDADES</li>
    <li>PORTFÓLIO</li>
  </ul>
  </MenuBurguer>
</Container>
  return (
    <>
    <Container>

      <BarrasMenuHamburguer>
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