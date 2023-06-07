import styled from "styled-components";
import { darken, lighten } from 'polished';

export const Titulo = styled.h1`

    font-size: 2.5rem;
    color: ${props => props.theme.colors.primary};
    border-bottom: 3px solid ${props => props.theme.colors.primary};
    margin: 1rem;
    padding-bottom: 0.5rem;
    text-align: center;
  `


export const Link = styled.a`
  
    color: ${(props) => props.theme.colors.background};
    text-decoration: none;
 
`;


export const CardPortfolio = styled.div`

  //border: 3px solid green;
  font-size: 1.2rem;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  height: 10rem;
  margin: 1rem auto;
  //gap: 1rem;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: row;
  // color: var(--shape);
  color: ${(props) => props.theme.colors.background};
  border-radius: 0.25rem;

  :hover {
    transition: 0.1s;
    background-color: ${(props) => darken(0.1, props.theme.colors.primary)};
    color: ${props => props.theme.colors.text};
    cursor: pointer;
  }
`;
