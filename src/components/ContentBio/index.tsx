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
        <a href="https://www.linkedin.com/in/ot%C3%A1vio-miranda-4a18aa219/" target="_blank">
          <button className="Linkedin">Linkedin</button>
        </a>
   
        <a href="https://github.com/OtavioMiranda23" target="_blank" >
          <button className="CV">Git</button>
        </a>
      </ButtonsBio>
    </Container>
  );
};

export default ContentBio;
