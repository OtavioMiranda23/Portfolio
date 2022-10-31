import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Carousel from './components/Carousel'
import ContentHabilidadesDev from './components/ContentHabilidades/ContentHabilidadesDev'

import Navbar from './components/Navbar'
import ProfileDataBio from './components/ProfileDataBio'
import ProfileDataHabilidadesDev from './components/ProfileDataHabilidades/ProfileHabilidadesDev'
import { GlobalStyle } from './styles/global'
function App() {
  const slides = [0, 1, 2, 3] 
    return (
    <>
      <Navbar />
      <ProfileDataBio/>
      <ProfileDataHabilidadesDev />
      {/* <Carousel slides={slides} /> */}
      <GlobalStyle />
    </>
  )
}

export default App
