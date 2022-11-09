import { useState } from "react";
import BaseLayout from "./components/BaseLayout/BaseLayout";
import ContentBio from "./components/ContentBio";
import Navbar from "./components/Navbar";
import ProfileDataHabilidadesDev from "./components/ProfileDataHabilidades/ProfileHabilidadesDev";
import ProjetosDev from "./components/Projetos/ProjetosDev";
import { MainContext } from "./context/MainContext";
import Profile3D from "./context/Profile3D";
import ProfileDev from "./context/ProfileDev";
import { GlobalStyle } from "./styles/global";
import Theme from "./styles/theme";
import Especializacao from "./types/Especializacao";

function App() {
  const [global, setGlobal] = useState<Especializacao>(ProfileDev);
  const set3d = () =>
    setGlobal(global.contexto === "dev" ? Profile3D : ProfileDev);

  return (
    <MainContext.Provider value={global}>
      <Theme>
        <Navbar />
        <BaseLayout>
          <p style={{ color: "#fff" }}>{global.contexto}</p>
          <button onClick={set3d}>mudar</button>
          <ContentBio />
          <ProfileDataHabilidadesDev />
          <ProjetosDev />
        </BaseLayout>
        <GlobalStyle />
      </Theme>
    </MainContext.Provider>
  );
}

export default App;
