import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ContentHabilidadesDev from './components/ContentHabilidades/ContentHabilidadesDev'

import Navbar from './components/Navbar'
import ProfileDataBio from './components/ProfileDataBio'
import ProfileDataHabilidadesDev from './components/ProfileDataHabilidades/ProfileHabilidadesDev'
import { GlobalStyle } from './styles/global'
function App() {
    return (
    <>
      <Navbar />
      <ProfileDataBio/>
      <ProfileDataHabilidadesDev />
      <GlobalStyle />
    </>
  )
}

export default App
