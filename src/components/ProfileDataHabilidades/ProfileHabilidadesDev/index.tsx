import { useMainContext } from "../../../context/MainContext";
import ContentHabilidadesDev from "../../ContentHabilidades/ContentHabilidadesDev";

const ProfileDataHabilidadesDev = () => {
  const { habilidades } = useMainContext();
  return <ContentHabilidadesDev skills={habilidades} />;
};

export default ProfileDataHabilidadesDev;
