import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  //border: 1px solid green;
  //margin: 1rem;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.text};

  div {
    //border: 1px solid green;
    //margin-top: .5rem;
    text-align: start;
    margin: 0.2rem 0 1rem 0;
  }
`;
const colorCycle = keyframes`
0%, 55% {
  filter: brightness(0) invert(1); //white
}
  11%, 33% {
    filter: none;
  }
`;


export const Apresentacao = styled.h1`
  font-family: 'Anton', Arial, Helvetica, sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 1rem;
  padding-top: 1rem;
  font-size: 3.5rem;
  letter-spacing: -.19rem;
  
  color: #fff;
  
  line-height: 3.3rem;
  margin: 2px solid green;
  span {
    padding: 0 1rem;
    filter: brightness(1) invert(0);

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: ${colorCycle} 10s ease-in-out infinite;
  }
  span:nth-child(1) {
            background-image: linear-gradient(90deg, #7A056A, #D00000);
        }
        span:nth-child(2) {
            background-image: linear-gradient(90deg, #DC2F02, #F48C06);
            animation-delay: 3.33s;
        }
        span:nth-child(3) {
            background-image: linear-gradient(90deg, #FAA307, #F7FF08);
            animation-delay: 6.66s;
        }
`;

export const ButtonsBio = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  button {
    padding: 1rem 0.5rem 1rem 0.5rem;
    border-radius: 0.25rem;
    margin: 0 6rem 1rem 6rem;
    border: 0.2rem solid ${props => props.theme.colors.secundary};
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text };
    font-weight: 600;
    z-index: 1;
    outline: none;
    position: relative;
    cursor: pointer;
  }

  //-------Botão Linkedin-------
  .Linkedin:hover {
    color: ${props => props.theme.colors.secundary};
    font-weight: 600;
    cursor: pointer;
    border: 0.2rem solid ${props => props.theme.colors.secundary};
    border-left: none;
    border-right: none;
    border-radius: 0;
  }
  .Linkedin:before {
    transition: 0.1s ease ease-out;
    position: absolute;
    top: 0;
    left: 0;
    right: 100%;
    bottom: 0;
    opacity: 0;
    content: "";
    background-color: ${props => props.theme.colors.background};
    border-left: none;
  }
  .Linkedin:hover:before {
    transition: 0.5s all ease;
    left: 0;
    right: 0%;
    opacity: 1;
    z-index: -1;
    border-left: none;
  }

  //----Botão CV-----
  .CV:hover {
    color: ${props => props.theme.colors.secundary};
    font-weight: 600;
    cursor: pointer;
    border: 0.2rem solid ${props => props.theme.colors.secundary};
  }

  .CV:before {
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: "";
    background-color: ${props => props.theme.colors.background};
  }

  .CV:hover:before {
    transition: 0.5s all ease;
    left: 0;
    right: 0;
    opacity: 1;
    z-index: -1;
  }
`;
