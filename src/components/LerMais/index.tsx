import React, { ReactNode, useState } from 'react';
import { Container } from './styles';

interface ILerMais {
    children: string;
    limiteCaracteresBio: number
}


const LerMais: React.FC<ILerMais> = ( {limiteCaracteresBio, children} ) => {
  const [ lerMaisEstaAtivo, setlerMaisEstaAtivo ] = useState(false);
  const toggleBtn = () => {
    setlerMaisEstaAtivo(prevState => !prevState)
  }

  return (
    <Container>
        <span>{lerMaisEstaAtivo ? children : children.substr(0,limiteCaracteresBio)}</span>
        <button onClick={toggleBtn}>{ lerMaisEstaAtivo ? "Ler menos..." : "Ler mais..." }</button>
    </Container>
  );
}

export default LerMais;