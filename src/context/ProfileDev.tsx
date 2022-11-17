import {
  SiGithub,
  SiJava,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiStyledcomponents,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import Especializacao from "../types/Especializacao";
import IHabilidade from "../types/Habilidade";

const habilidades: IHabilidade[] = [
  {
    nome: "Javascript",
    nivelProficiencia: 3,
    icon: () => <SiJavascript />,
  },
  {
    nome: "Typescript",
    nivelProficiencia: 3,
    icon: () => <SiTypescript />,
  },
  {
    nome: "ReactJs",
    nivelProficiencia: 3,
    icon: () => <SiReact />,
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

const descricaoDev =
  "Atuo com desenvolvimento web, utilizando ReactJs, NodeJs, Java e Python. Possuo experiência com análise de dados, no Arquivo Público de São Paulo, com desenvolvimento de aplicações web e computação gráfica, incluindo animação, ilustração e modelagem 3D. Minha formação inicial, em História, pela Universidade de São Paulo, e a atual, em Ciências da Computação, contribuem para minha autonomia de pesquisa e gosto pelo aprendizado.";

export default {
  contexto: "dev",
  especialidade: "Desenvolvedor Fullstack",
  descricao: descricaoDev,
  habilidades: habilidades,
  projetos: [],
} as Especializacao;
