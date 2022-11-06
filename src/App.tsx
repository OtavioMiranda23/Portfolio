import { useState } from "react";
import BaseLayout from "./components/BaseLayout/BaseLayout";
import ContentBio from "./components/ContentBio";
import Navbar from "./components/Navbar";
import ProfileDataHabilidadesDev from "./components/ProfileDataHabilidades/ProfileHabilidadesDev";
import ProjetosDev from "./components/Projetos/ProjetosDev";
import { MainContext } from "./context/MainContext";
import IGlobais from "./globais";
import { GlobalStyle } from "./styles/global";


function App() {
  const descricaoDev = "Atuo com desenvolvimento web, utilizando ReactJs, NodeJs, Java e Python. Possuo experiência com análise de dados, no Arquivo Público de São Paulo, com desenvolvimento de aplicações web e computação gráfica, incluindo animação, ilustração e modelagem 3D. Minha formação inicial, em História, pela Universidade de São Paulo, e a atual, em Ciências da Computação, contribuem para minha autonomia de pesquisa e gosto pelo aprendizado."
  const descricao3d = "Artista 3d generalista com foco em Blender 3d.";

  const [global, setGlobal] = useState<IGlobais>({
    contexto: "dev",
    especialidade: "Desenvolvedor Fullstack",
    descricao: descricaoDev
  });

  const set3d = () => {
    setGlobal(
      global.contexto === "dev" ? 
      {contexto: "3d", especialidade: "Artista 3D", descricao: descricao3d }
        :
         { contexto: "dev", especialidade: "Desenvolvedor Fullstack", descricao: descricaoDev}
    );
  };

  return (
    <MainContext.Provider value={global}>
      <Navbar />
      <BaseLayout>
        <p style={{ color: "#fff" }}>{global.contexto}</p>
        <button onClick={set3d}>mudar</button>
        <ContentBio />
        <ProfileDataHabilidadesDev />
        <ProjetosDev />
      </BaseLayout>
      <GlobalStyle />
    </MainContext.Provider>
  );
}

export default App;
