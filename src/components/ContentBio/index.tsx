import React, { useState } from "react";
import LerMais from "../LerMais";
import { useMainContext } from "../../context/MainContext";
import { ButtonsBio, Container } from "./styles";

interface IContentBio {
  map: any;
  saudacao: string;
  nomeDev: string;
  especialidade: string;
  resumo: string;
  children?: string;
}

const ContentBio: React.FC<IContentBio> = (Props) => {
  let limiteCaracteresBio = 110;

  const { especialidade } = useMainContext();

  return (
    <Container>
      <h1>
        {Props.saudacao}! Meu nome é {Props.nomeDev}, sou {especialidade}
      </h1>
      <LerMais limiteCaracteresBio={limiteCaracteresBio}>
        {Props.resumo}
      </LerMais>
      <ButtonsBio>
        <button>Linkedin</button>
        <button>CV</button>
      </ButtonsBio>
    </Container>
  );
};

export default ContentBio;
