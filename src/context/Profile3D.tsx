import { SiAdobephotoshop, SiAutodesk, SiBlender } from "react-icons/si";
import { MdOutlineAnimation } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import IHabilidade from "../types/Habilidade";

const habilidades: IHabilidade[] = [
  {
    nome: "Autodesk Maya",
    nivelProficiencia: 3,
    icon: () => <SiAutodesk />,
  },
  {
    nome: "3d Studio Max",
    nivelProficiencia: 2,
    icon: () => <SiAutodesk />,
  },
  {
    nome: "Blender 3d",
    nivelProficiencia: 3,
    icon: () => <SiBlender />,
  },
  {
    nome: "Photoshop",
    nivelProficiencia: 3,
    icon: () => <SiAdobephotoshop />,
  },
  {
    nome: "Animation",
    nivelProficiencia: 3,
    icon: () => <MdOutlineAnimation />,
  },
  {
    nome: "Illustration",
    nivelProficiencia: 3,
    icon: () => <BsPencil />,
  },
];
const descriacao3d = "Sou um especialista em animação 3D com habilidades em programação, buscando oportunidades para aplicar meu conhecimento na criação de animações envolventes e no desenvolvimento de soluções técnicas inovadoras. Com especialização em animação 3D, tenho habilidades avançadas em modelagem, rigging e animação de personagens e objetos, utilizando ferramentas como Blender e Maya. Além disso, minha sólida experiência em programação me permite aprimorar minha prática de animação 3D com soluções personalizadas e avançadas, utilizando linguagens como Python, JavaScript, C++ e C# para desenvolver scripts e ferramentas que otimizam fluxos de trabalho e melhoram a eficiência na produção de animações e renderizações."



const projetos3d = [
  {
    url: "https://www.youtube.com/watch?v=Cd_BFaMBJDk", 
    nome: "Jogador de futebol - Blender"
 },
 {
  url: "https://www.youtube.com/watch?v=k2TLk2B5LhI", 
  nome: "Walk Cycle Esquilo - Blender"
},
 {
  url: "https://www.youtube.com/watch?v=Ctu5AV__ImE", 
  nome: "Lip Sync - Blender"
},
 {
  url: "https://www.youtube.com/watch?v=Lzyz8leZv6c", 
  nome: "Blocking Luta 3 Personagens - Maya"
},
 {
  url: "https://www.youtube.com/watch?v=iqi7V_t3hZU", 
  nome: "Spline Efeito Especial - Maya"
},
 {
  url: "https://www.youtube.com/watch?v=5DJv64_fi2Y", 
  nome: "Animação Facial e corporal - Maya"
},
 {
  url: "https://www.youtube.com/watch?v=xU9fbotSq1k", 
  nome: "Animação tiro - Blender"
},
 {
  url: "https://www.youtube.com/watch?v=9VrmOegmVq4", 
  nome: "Animação 2d"
},
]














export default {
  contexto: "3d",
  especialidade: "Artista Generalista 3D",
  descricao: descriacao3d ,
  habilidades: habilidades,
  projetos: projetos3d
};
