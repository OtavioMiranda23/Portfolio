import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 90vw;

  //border: 1px solid green;
  text-align: center;
  margin: 0 auto;

  span {
    color: ${props => props.theme.colors.text};
    font-size: 1.2rem;
    font-weight: 500;
  }

  h1 {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.secundary};
    border-bottom: 3px solid ${props => props.theme.colors.secundary};
    margin: 1rem;
    padding-bottom: 0.5rem;
  }

  .wrapper {
    //border: 2px solid green;
    //margin: 0 0.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    // flex-wrap: wrap;
    gap: 0.5rem;
    //margin: 0.4rem auto;
  }
`;

export const CardSkills = styled.div`
  //border: 2px solid green;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.text};
  gap: 0.5rem;

  justify-content: center;
  align-items: center;
  //margin: 0.5rem auto;

  background-color: ${props => props.theme.colors.tertiary};
  border-radius: 0.25rem;
  padding: 1rem;
  //width: 11rem;

  svg {
    width: 2rem;
    height: 2rem;
    fill: ${props => props.theme.colors.secundary};
    margin-bottom: 0.5rem;
    font-weight: 700;
  }
`;

export const ProficienciaEstrela = styled.div`
  
  display: flex;
  flex-direction: row;
`;