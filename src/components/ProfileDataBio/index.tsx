import React from 'react';
import ContentBio from '../ContentBio';






const ProfileDataBio: React.FC = () => {
  let resumo = "Atuo com desenvolvimento web, utilizando ReactJs e NodeJs, e ciência de dados, com Python e suas ferramentas. Possuo experiência com análise de dados, no Arquivo Público de São Paulo, com desenvolvimento de aplicações web e computação gráfica, incluindo animação, ilustração e modelagem 3D. Minha formação inicial, em História, pela Universidade de São Paulo, e a atual, em Ciências da Computação, contribuem para minha autonomia de pesquisa e gosto pelo aprendizado."
  return (
      <ContentBio
      saudacao={"Olá"}
      nomeDev={"Otávio"}
      especialidade={"Fullstack!"}
      resumo={resumo}
      />




      


  );
}

export default ProfileDataBio;