import React from "react";

import {
  CardSkills,
  Container,} from "./styles";



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
              <span>Proficiencia</span>
              <span>{item.nivelProficiencia}</span>
            </CardSkills>
          ))}
        </div>
      </Container>
    </>
  );
};

export default ContentHabilidadesDev;
