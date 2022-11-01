import { useState } from "react";
import BaseLayout from "./components/BaseLayout/BaseLayout";
import Navbar from "./components/Navbar";
import ProfileDataBio from "./components/ProfileDataBio";
import ProfileDataHabilidadesDev from "./components/ProfileDataHabilidades/ProfileHabilidadesDev";
import ProjetosDev from "./components/Projetos/ProjetosDev";
import { MainContext } from "./context/MainContext";
import IGlobais from "./globais";
import { GlobalStyle } from "./styles/global";


function App() {

  const [global, setGlobal] = useState<IGlobais>({
    lula: "dev",
    especialidade: "Desenvolvedor Fullstack",
  });

  const set3d = () => {
    setGlobal(
      global.lula === "dev"
        ? {
            lula: "3d",
            especialidade: "Artista 3D",
          }
        : { lula: "dev", especialidade: "Desenvolvedor Fullstack" }
    );
  };

  return (
    <MainContext.Provider value={global}>
      <Navbar />
      <BaseLayout>
        <p style={{ color: "#fff" }}>{global.lula}</p>
        <button onClick={set3d}>mudar</button>
        <ProfileDataBio />
        <ProfileDataHabilidadesDev />
        <ProjetosDev />
      </BaseLayout>
      <GlobalStyle />
    </MainContext.Provider>
  );
}

export default App;
