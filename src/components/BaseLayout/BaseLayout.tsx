import styled from "styled-components";

export default styled.main`
  height: calc(100vh - 125px);
  padding: 5%;

  // Celular
  @media screen and (max-width: 600px) {
    padding: 7.5%;
  }

  // Tablet
  @media screen and (min-width: 768px) {
    padding: 7.5%;
  }

  // Tela 720p
  @media screen and (min-width: 889px) {
    padding: 7.5%;
  }

  // Telas maiores
  @media screen and (min-width: 1200px) {
    padding: 7.5%;
  }
`;
