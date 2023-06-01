import { useMainContext } from "../../../context/MainContext";
import ContentHabilidadesDev from "../../ContentHabilidades/ContentHabilidadesDev";

interface IHabilidades {
  ref: React.MutableRefObject<null> 
}

const ProfileDataHabilidadesDev = (Props: IHabilidades) => {
  const { habilidades } = useMainContext();
  return (
    <div className='habilidades' id="habilidades">

    <ContentHabilidadesDev  skills={habilidades} />;
    </div>

  ) 
};

export default ProfileDataHabilidadesDev;
