import styled from 'styled-components';

export const Container = styled.div`
  color: ${props => props.theme.colors.text};
  font-size: 1.1rem;
  font-weight: 600;
  //border: 1px solid magenta;
  
  button {
    font-size: 1.2rem;
    padding-left: .5rem;
    background-color: transparent;
    font-weight: 700;
    cursor: pointer;
    border: none;
    color: ${props => props.theme.colors.text};

  }
`;
