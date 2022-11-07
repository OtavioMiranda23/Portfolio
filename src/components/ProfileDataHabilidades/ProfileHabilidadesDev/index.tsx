import React from "react";
import { SiGithub, SiJava, SiMongodb, SiMysql, SiNodedotjs, SiPython, SiReact, SiStyledcomponents, SiTypescript, SiVuedotjs } from "react-icons/si";
import ContentHabilidadesDev, {
  IHabilidade,
} from "../../ContentHabilidades/ContentHabilidadesDev";
// import { Container } from './styles';

const habilidades: IHabilidade[] = [
  {
    nome: "Typescript",
    nivelProficiencia: 3,
    icon: () => <SiTypescript />,
  },
  {
    nome: "ReactJs",
    nivelProficiencia: 3,
    icon: () => <SiReact />
  },
  {
    nome: "Vue",
    nivelProficiencia: 1,
    icon: () => <SiVuedotjs />,
  },
  {
    nome: "Node.js",
    nivelProficiencia: 3,
    icon: () => <SiNodedotjs />,
  },
  {
    nome: "Java",
    nivelProficiencia: 2,
    icon: () => <SiJava />,
  },
  {
    nome: "Python",
    nivelProficiencia: 3,
    icon: () => <SiPython />,
  },
  {
    nome: "Git",
    nivelProficiencia: 3,
    icon: () => <SiGithub />,
  },
  {
    nome: "Styled-Components",
    nivelProficiencia: 3,
    icon: () => <SiStyledcomponents />,
  },
  {
    nome: "mySQL",
    nivelProficiencia: 2,
    icon: () => <SiMysql />,
  },
  {
    nome: "MongoDB",
    nivelProficiencia: 1,
    icon: () => <SiMongodb />,
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
