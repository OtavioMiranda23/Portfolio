import { createContext, useContext } from "react";
import IGlobais from "../globais";

const descricaoDev = "Atuo com desenvolvimento web, utilizando ReactJs, NodeJs, Java e Python. Possuo experiência com análise de dados, no Arquivo Público de São Paulo, com desenvolvimento de aplicações web e computação gráfica, incluindo animação, ilustração e modelagem 3D. Minha formação inicial, em História, pela Universidade de São Paulo, e a atual, em Ciências da Computação, contribuem para minha autonomia de pesquisa e gosto pelo aprendizado.";
export const MainContext = createContext<IGlobais>({
  contexto: "dev",
  especialidade: "Desenvolvedor Fullstack",
  descricao: descricaoDev,
});

export const useMainContext = () => {
  return useContext(MainContext);
};
