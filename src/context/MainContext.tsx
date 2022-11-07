import { createContext, useContext } from "react";
import Especializacao from "../types/Especializacao";
import ProfileDev from "./ProfileDev";

export const MainContext = createContext<Especializacao>(ProfileDev);

export const useMainContext = () => {
  return useContext(MainContext);
};
