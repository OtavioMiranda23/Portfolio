import { AiFillStar } from "react-icons/ai";
import { CardSkills, Container, ProficienciaEstrela } from "./styles";
import IHabilidade from "../../../types/Habilidade";

const ContentHabilidadesDev = (props: { skills: IHabilidade[] }) => {
  return (
    <>
      <Container className='habilidades' id="habilidades">
        <h1>Skill-Set</h1>
        <div className="wrapper">
          {props.skills.map((item: IHabilidade) => (
            <CardSkills key={item.nome}>
              <h3>{item.nome}</h3>
              <item.icon />
              <ProficienciaEstrela>
                {new Array(item.nivelProficiencia).fill(0).map(() => (
                  <AiFillStar />
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
