import React from "react";

import {
  CardSkills,
  Container,
  GitIcon,
  JavaIcon,
  MongoDbIcon,
  MySqlIcon,
  NodeIcon,
  PythonIcon,
  ReactIcon,
  StyeldComponentsIcon,
  TypescriptIcon,
  VueIcon,
} from "./styles";

interface IContentHabilidadesDev {
  typescript?: string;
  front1: string;
  front2?: string;
  linguagemBackend1: string;
  linguagemBackend2?: string;
  linguagemBackend3?: string;
  servicos: string[];
}

export interface IHabilidade {
  nome: string;
  nivelProficiencia: number;
  icon: () => any;
}

const ContentHabilidadesDev = (props: any) => {
  return (
    <>
      <Container>
        <span>Services</span>
        <h1>Skill-Set</h1>
        <div className="wrapper">
          {props.skills.map((item: IHabilidade) => (
            <CardSkills key={item.nome}>
              <h3>{item.nome}</h3>
              <item.icon />
            </CardSkills>
          ))}
        </div>
      </Container>
    </>
  );
};

export default ContentHabilidadesDev;
