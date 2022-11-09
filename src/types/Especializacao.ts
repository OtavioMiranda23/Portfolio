import IHabilidade from "./Habilidade";
import Projeto from "./Projeto";

export default interface Especializacao {
  contexto: string;
  especialidade: string;
  descricao: string;
  habilidades: IHabilidade[];
  projetos: Projeto[];
}
