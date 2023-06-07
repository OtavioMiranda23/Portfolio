import React, { HtmlHTMLAttributes, useState } from 'react';
import { Link } from 'react-scroll';

import { Container, MenuBurguer, BarrasMenuHamburguer, NavbarExpandida } from './styles';

interface INavbar {
  bio: React.MutableRefObject<null>,
  habilidades: React.MutableRefObject<null>,
  portfolio: React.MutableRefObject<null>,
}

const Navbar = (Props: INavbar) => {
  const [isNavBarExpandida, setIsNavBarExpandida] = useState<boolean>(false);
  
  const scrollToSection = (elementRef: any) => {
    window.scrollTo({top: elementRef.current.offsetTop, behavior: 'smooth'})
  }

  const navBarAberta = 
    <NavbarExpandida>
      <MenuBurguer>
          <ul>
            <li onClick={()=> scrollToSection(Props.bio)}>BIO</li>
            <li onClick={()=> scrollToSection(Props.habilidades)}>HABILIDADES</li>
            <li onClick={()=> scrollToSection(Props.portfolio)}>PORTFÓLIO</li>
          </ul>
      </MenuBurguer>
    </NavbarExpandida>
  return (
    <>
        { isNavBarExpandida && navBarAberta }
    <Container>
        <div className='menuFull'>
          <ul>
            <li>
              <Link to="/" spy={true} smooth={true} offset={50} duration={500}></Link> </li>
            <li>
            <Link to="habilidades" spy={true} smooth={true} offset={50} duration={500}></Link></li>
            <li onClick={()=> scrollToSection(Props.portfolio)}></li>
          </ul>
        </div>
      {/* <BarrasMenuHamburguer className='menuMobile'>
        <input
        type="checkbox"
        onChange={(event:React.ChangeEvent<HTMLInputElement>)=> setIsNavBarExpandida(event.currentTarget.checked)} />
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </BarrasMenuHamburguer> */}
    </Container>
    </>
    );
}

export default Navbar;