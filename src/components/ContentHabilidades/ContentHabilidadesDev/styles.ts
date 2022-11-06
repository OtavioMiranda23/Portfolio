import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 90vw;

  //border: 1px solid green;
  text-align: center;
  margin: 0 auto;

  span {
    color: var(--shape);
    font-size: 1.2rem;
    font-weight: 500;
  }

  h1 {
    font-size: 2.5rem;
    color: var(--red);
    border-bottom: 3px solid #ff4c2c;
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
  color: var(--shape);
  gap: 0.5rem;

  justify-content: center;
  align-items: center;
  //margin: 0.5rem auto;

  background-color: #233436;
  border-radius: 0.25rem;
  padding: 1rem;
  //width: 11rem;

  svg {
    width: 2rem;
    height: 2rem;
    fill: var(--red);
    margin-bottom: 0.5rem;
    font-weight: 700;
  }
`;

export const ProficienciaEstrela = styled.div`
  
  display: flex;
  flex-direction: row;
`;