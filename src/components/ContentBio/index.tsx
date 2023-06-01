import React, { useState } from "react";
import LerMais from "../LerMais";
import { useMainContext } from "../../context/MainContext.js";
import { Apresentacao, ButtonsBio, Container } from "./styles";


const ContentBio = (props: any) => {
  let limiteCaracteresBio = 70;
  const { especialidade, descricao } = useMainContext();


  return (
    <Container >
      <Apresentacao>
        <h1 className="estatico">Otávio,</h1>
        <span className="digitado">{especialidade}</span>
      </Apresentacao>
      <LerMais limiteCaracteresBio={limiteCaracteresBio}

      >{descricao}</LerMais>
      <ButtonsBio>
        <button className="Linkedin">Linkedin</button>
        <button className="CV">CV</button>
      </ButtonsBio>
    </Container>
  );
};

export default ContentBio;
