import {
  SiCsharp,
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
    nivelProficiencia: 2,
    icon: () => <SiVuedotjs />,
  },
  {
    nome: "Node.js",
    nivelProficiencia: 3,
    icon: () => <SiNodedotjs />,
  },
  {
    nome: "Java",
    nivelProficiencia: 3,
    icon: () => <SiJava />,
  },
  {
    nome: "C#",
    nivelProficiencia: 3,
    icon: () => <SiCsharp />,
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
 "Desenvolvedor Fullstack com habilidades abrangentes em várias linguagens de programação, incluindo Java, TypeScript, React e Flutter. Tenho experiência sólida em aplicações 3D, com especialização em animação, modelagem e integração utilizando ferramentas como Blender e Maya. Utilizo Python, Three.js e React Three Fiber para desenvolver scripts e aplicações web nesse campo. Além disso, possuo conhecimentos em ilustração, complementando minhas habilidades criativas. Estou constantemente buscando desafios que me permitam expandir meu conhecimento e contribuir para projetos inovadores."
const projetos = [
  {
    url: "https://github.com/OtavioMiranda23/Lista_Tarefas", 
    nome: "Lista de Tarafes Flutter"
 },
 {
  url: "https://github.com/OtavioMiranda23/OndeVaiPassar", 
  nome: "Onde Vai Passar"
},
 {
  url: "https://github.com/OtavioMiranda23/Avaliador-de-Series-Backend", 
  nome: "Avaliador-de-Series-Backend"
},
 {
  url: "https://github.com/OtavioMiranda23/Floor-picker-Three.Js", 
  nome: "Floor Picker"
},
 {
  url: "https://github.com/OtavioMiranda23/BuscaCEP", 
  nome: "Buscador de CEP"
},
]
export default {
  contexto: "dev",
  especialidade: "Desenvolvedor Fullstack",
  descricao: descricaoDev,
  habilidades: habilidades,
  projetos: projetos,
} as Especializacao;
