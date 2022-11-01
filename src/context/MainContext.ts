import { createContext, useContext } from "react";
import IGlobais from "../globais";

export const MainContext = createContext<IGlobais>({
  lula: "dev",
  especialidade: "Desenvolvedxr Fullstack",
});

export const useMainContext = () => {
  return useContext(MainContext);
};
