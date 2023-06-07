import { useRef, useState } from "react";
import BaseLayout from "./components/BaseLayout/BaseLayout";
import ContentBio from "./components/ContentBio";
import Navbar from "./components/Navbar";
import ProfileDataHabilidadesDev from "./components/ProfileDataHabilidades/ProfileHabilidadesDev";
import ProjetosDev from "./components/Projetos/ProjetosDev";
import { MainContext } from "./context/MainContext";
import Profile3D from "./context/Profile3D";
import ProfileDev from "./context/ProfileDev";
import { GlobalStyle } from "./styles/global";
import Especializacao from "./types/Especializacao";
import { ThemeContext, ThemeProvider } from "styled-components";
import { ThemeButton } from "./components/Navbar/styles";

import Switch from "react-switch";

import { lighten, padding, shade } from "polished"

import devTheme from "./styles/themes/dev";
import artTheme from "./styles/themes/art";

function App() {
  const [global, setGlobal] = useState<Especializacao>(ProfileDev);
  const [isChecked, setChecked] = useState(false);
  const [theme, setTheme] = useState(devTheme);

  const bio = useRef(null);
  const habilidades = useRef(null);
  const portfolio = useRef(null);
  


  const toggleTheme = () => {
    setTheme(theme.title === 'devTheme' ? artTheme : devTheme);
    setGlobal(global.contexto === "dev" ? Profile3D : ProfileDev);
    setChecked(isChecked ? false : true)
  };


  return (
    <MainContext.Provider value={global}>
      <ThemeProvider theme={theme} >
        <Navbar bio={bio} habilidades={habilidades} portfolio={portfolio}/>
        <BaseLayout>
        <ThemeButton>

          <Switch 
          onChange={toggleTheme}
          checked={isChecked}
          uncheckedIcon={false}
          checkedIcon={false}
          height={10}
          width={40}
          borderRadius={5}
          handleDiameter={15}
          offColor={lighten(0.1, '#074f93')}
          onColor={lighten(0.1, '#D00000')}

          />
                    <h4> Click</h4>
          {/* <p style={{ color: "#fff" }}>{global.contexto}</p>
          <button onClick={set3d}
          onChange={toggleTheme} 
          >mudar</button> */}
        </ThemeButton>
          <ContentBio />
          <ProfileDataHabilidadesDev  ref={habilidades}/>
          <ProjetosDev ref={portfolio}/>
        </BaseLayout>
        <GlobalStyle />
      </ThemeProvider>
    </MainContext.Provider>
  );
}

export default App;
