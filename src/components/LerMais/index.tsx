import React, { ReactNode, useState } from 'react';
import { Container } from './styles';

interface ILerMais {
    children: string ;
    limiteCaracteresBio: number
}


function LerMais( Props: ILerMais) {
  const [ lerMaisEstaAtivo, setlerMaisEstaAtivo ] = useState(false);
  const toggleBtn = () => {
    setlerMaisEstaAtivo(prevState => !prevState)
  }


  return (
         
      <Container>
        
        <span>{lerMaisEstaAtivo ? Props.children : Props.children.substr(0,Props.limiteCaracteresBio)}</span>
        <button onClick={toggleBtn}>{ lerMaisEstaAtivo ? "Ler menos..." : "Ler mais..." }</button>
    </Container>
      )
  ;
}

export default LerMais;