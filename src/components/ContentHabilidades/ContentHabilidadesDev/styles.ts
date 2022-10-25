import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  //border: 2px solid green;
  text-align: center;

  span {
    color: var(--shape);
    font-size: 1.2rem;
    font-weight: 500;    
  }

  h1 {
    font-size: 2.5rem;
    color: var(--red);
    border-bottom: 3px solid #FF4C2C;
    margin: 0 7rem;
    padding-bottom: 0.5rem;
  }
  `;

export const CardSkills = styled.div`
  //border: 2px solid green;
  display: flex;
  flex-direction: column;
  color: var(--shape);
  
  width: 70vw;
  height: auto;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;

  background-color: #233436;
  border-radius: 0.45rem;
  padding: 1rem;
`;