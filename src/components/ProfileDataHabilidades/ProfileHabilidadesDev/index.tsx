import React from 'react';
import ContentHabilidadesDev from '../../ContentHabilidades/ContentHabilidadesDev';
;

// import { Container } from './styles';



const ProfileDataHabilidadesDev: React.FC = () => {
  return (
    <ContentHabilidadesDev
    typescript="Typescript"
    front1="React Js"
    front2="Vue"
    linguagemBackend1="Node.js"
    linguagemBackend2="Java"
    linguagemBackend3="Python"
    servicos={["Git", "Styled-components", "mySQL", "MongoDB" ]}
    />     
  );
}

export default ProfileDataHabilidadesDev;