import React from "react";
import { SiJava, SiTypescript, SiVuedotjs } from "react-icons/si";
import ContentHabilidadesDev, {
  IHabilidade,
} from "../../ContentHabilidades/ContentHabilidadesDev";
// import { Container } from './styles';

const habilidades: IHabilidade[] = [
  {
    nome: "Typescript",
    nivelProficiencia: 5,
    icon: () => <SiTypescript />,
  },
  {
    nome: "Java",
    nivelProficiencia: 5,
    icon: () => <SiJava />,
  },
  {
    nome: "Vue",
    nivelProficiencia: 10,
    icon: () => <SiVuedotjs />,
  },
];

const ProfileDataHabilidadesDev = () => {
  return (
    <ContentHabilidadesDev
      skills={habilidades}
      // typescript="Typescript"
      // front1="React Js"
      // front2="Vue"
      // linguagemBackend1="Node.js"
      // linguagemBackend2="Java"
      // linguagemBackend3="Python"
      // servicos={["Git", "Styled-components", "mySQL", "MongoDB" ]}
    />
  );
};

export default ProfileDataHabilidadesDev;
