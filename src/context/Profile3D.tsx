import { SiAutodesk } from "react-icons/si";
import IHabilidade from "../types/Habilidade";

const habilidades: IHabilidade[] = [
  {
    nome: "Autodesk Maya",
    nivelProficiencia: 4,
    icon: () => <SiAutodesk />,
  },
];

export default {
  contexto: "3d",
  especialidade: "Artista Generalista 3D",
  descricao: "Artista 3d generalista com foco em Blender 3d.",
  habilidades: habilidades,
  projetos: [],
};
