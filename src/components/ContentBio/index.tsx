import React, { useState } from 'react';
import LerMais from '../LerMais';

import { ButtonsBio, Container } from './styles';


interface IContentBio {
  map: any;
  saudacao: string;
  nomeDev: string;
  especialidade: string;
  resumo: string;
  children?: string
}

const ContentBio: React.FC <IContentBio> = (Props) => {
  let limiteCaracteresBio = 110;


  return (

  <Container>
      <h1>{Props.saudacao}! Meu nome é {Props.nomeDev}, sou desenvolvedor {Props.especialidade}</h1>
      <LerMais limiteCaracteresBio={limiteCaracteresBio}>
        {Props.resumo}
      </LerMais >
      <ButtonsBio>
        <button>Linkedin</button>
        <button>CV</button>
      </ButtonsBio>
  </Container>
    );
}

export default ContentBio;