import React from 'react';

import { CardSkills, Container } from './styles';

interface IContentHabilidadesDev {
  front1: string;
  front2?: string;
  linguagemBackend1: string;
  linguagemBackend2?: string;
  linguagemBackend3?: string;
  servicos: string[];
}

const ContentHabilidadesDev: React.FC<IContentHabilidadesDev> = (Props) => {
  return (
    <Container>
      <span>Services</span>
      <h1>Skill-Set</h1>
      <CardSkills>
        <div>{Props.front1}</div>
      </CardSkills>
    </Container>
  );
}

export default ContentHabilidadesDev;