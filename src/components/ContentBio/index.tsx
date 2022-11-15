import React, { useState } from "react";
import LerMais from "../LerMais";
import { useMainContext } from "../../context/MainContext.js";
import { Apresentacao, ButtonsBio, Container } from "./styles";

// export interface IDataBio {
//   resumo: string;
// }

const ContentBio = (props: any) => {
  let limiteCaracteresBio = 110;
  const { especialidade, descricao } = useMainContext();

  return (
    <Container>
      <Apresentacao>
        <span>Sou</span>
        <span>Otávio,</span>
        <span>{especialidade}</span>
      </Apresentacao>
      <LerMais limiteCaracteresBio={limiteCaracteresBio}>{descricao}</LerMais>
      <ButtonsBio>
        <button className="Linkedin">Linkedin</button>
        <button className="CV">CV</button>
      </ButtonsBio>
    </Container>
  );
};

export default ContentBio;
