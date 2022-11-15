import { AiOutlineStar } from "react-icons/ai";
import { CardSkills, Container, ProficienciaEstrela } from "./styles";
import IHabilidade from "../../../types/Habilidade";

const ContentHabilidadesDev = (props: { skills: IHabilidade[] }) => {
  return (
    <>
      <Container>
        <h1>Skill-Set</h1>
        <div className="wrapper">
          {props.skills.map((item: IHabilidade) => (
            <CardSkills key={item.nome}>
              <h3>{item.nome}</h3>
              <item.icon />
              <ProficienciaEstrela>
                {new Array(item.nivelProficiencia).fill(0).map(() => (
                  <AiOutlineStar />
                ))}
              </ProficienciaEstrela>
            </CardSkills>
          ))}
        </div>
      </Container>
    </>
  );
};

export default ContentHabilidadesDev;
