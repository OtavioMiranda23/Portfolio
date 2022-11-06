import React from "react";
import { AiOutlineStar } from "react-icons/ai"
import { 
  CardSkills,
  Container,
  ProficienciaEstrela,} from "./styles";



export interface IHabilidade {
  nome: string;
  nivelProficiencia: number;
  icon: () => any;
}


const ContentHabilidadesDev = (props: any) => {
  
  function convertToStar(proficiencia: number) {
    switch (proficiencia) {
      case 1:
        return <ProficienciaEstrela>
        <AiOutlineStar/>
        </ProficienciaEstrela>
      case 2:
        return <ProficienciaEstrela>
        <AiOutlineStar/>
        <AiOutlineStar/>
        </ProficienciaEstrela>
      case 3:
        return <ProficienciaEstrela>
        <AiOutlineStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
        </ProficienciaEstrela>
        }
      };
  
  
  return (
    <>
      <Container>
        <span>Services</span>
        <h1>Skill-Set</h1>
        <div className="wrapper">
          {props.skills.map((item: IHabilidade) => (
            <CardSkills key={item.nome}>
              <h3>{item.nome}</h3>
              <item.icon />
              <>
               {
                convertToStar(item.nivelProficiencia)
               }
              </>

            </CardSkills>
          ))}
        </div>
      </Container>
    </>
  );
};

export default ContentHabilidadesDev;
