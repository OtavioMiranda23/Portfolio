import React from "react";
import { ThemeProvider } from "styled-components";

function getPrimaryColor(contexto: string) {
  switch (contexto) {
    case "3d":
      "green";
    case "desenho":
      "magenta";
    case "dev":
    default:
      "blue";
  }
}

const theme = {
  colors: {
    corPrimaria: "#fff",
    corSecundaria: "#333",
    destaque: "magenta",
  },
};

export default function Theme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
