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

export default {
  contexto: "3d",
  especialidade: "Artista Generalista 3D",
  descricao: "Artista 3d generalista com foco em Blender 3d.",
  habilidades: habilidades,
  projetos: [],
};
