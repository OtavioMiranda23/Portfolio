import styled from 'styled-components';

export const Container = styled.div`
  color: ${props => props.theme.colors.textBody};
  font-size: 1.1rem;
  font-weight: 400;
  //border: 1px solid magenta;

  
  button {
    font-size: 1.1rem;
    padding-left: .5rem;
    background-color: transparent;
    font-weight: 600;
    cursor: pointer;
    border: none;
    color: ${props => props.theme.colors.text};
  }
`;
