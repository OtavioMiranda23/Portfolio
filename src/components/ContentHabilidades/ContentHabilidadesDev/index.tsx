import React from 'react';

import { CardSkills, Container, GitIcon, JavaIcon, MongoDbIcon, MySqlIcon, NodeIcon, PythonIcon, ReactIcon, StyeldComponentsIcon, TypescriptIcon, VueIcon } from './styles';

interface IContentHabilidadesDev {
  typescript?: string;
  front1: string;
  front2?: string;
  linguagemBackend1: string;
  linguagemBackend2?: string;
  linguagemBackend3?: string;
  servicos: string[];
}

const ContentHabilidadesDev: React.FC<IContentHabilidadesDev> = (Props) => {
  const linguagens = Object.values(Props);
  
  return (
    <>
      <Container>
        <span>Services</span>
        <h1>Skill-Set</h1>

        {linguagens.map((item)=> 

          <div>
            <CardSkills>
              <h3>{item}</h3>
            </CardSkills>
          </div>
)}
    </Container>
      </>
  );
}

export default ContentHabilidadesDev;