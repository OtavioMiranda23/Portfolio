import React, { useState } from "react";
import LerMais from "../LerMais";
import { useMainContext } from "../../context/MainContext";
import { ButtonsBio, Container } from "./styles";

// export interface IDataBio {
//   resumo: string;
// }

const ContentBio = (props: any) => {
  let limiteCaracteresBio = 110;
  let resumo =
  "Atuo com desenvolvimento web, utilizando ReactJs, NodeJs, Java e Python. Possuo experiência com análise de dados, no Arquivo Público de São Paulo, com desenvolvimento de aplicações web e computação gráfica, incluindo animação, ilustração e modelagem 3D. Minha formação inicial, em História, pela Universidade de São Paulo, e a atual, em Ciências da Computação, contribuem para minha autonomia de pesquisa e gosto pelo aprendizado.";
  const { especialidade, descricao  } = useMainContext();

  return (
    <Container>
      <h1>
        Olá! Meu nome é Otávio, sou {especialidade}
      </h1>
      <LerMais limiteCaracteresBio={limiteCaracteresBio}>
        {descricao}
      </LerMais>
      <ButtonsBio>
        <button className="Linkedin">Linkedin</button>
        <button className="CV">CV</button>
      </ButtonsBio>
    </Container>
  );
};

export default ContentBio;
