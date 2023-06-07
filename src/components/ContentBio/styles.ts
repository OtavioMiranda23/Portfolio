import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  //border: 1px solid green;
  //margin: 1rem;
  background: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.text};
  text-align: center;

  @media screen and (min-width: 889px) {
    height: 50vh;
}

  div {
    //border: 1px solid green;
    //margin-top: .5rem;
    text-align: center;
    margin: 0.2rem 0 1rem 0;
  }
`;


// const colorCycle = keyframes
// 0%, 55% {
//   filter: brightness(0) invert(1); //white
// }
//   11%, 33% {
//     filter: none;
//   }
// `;

const typing = keyframes`
  100% {
    left: 100%;
    margin: 0 -35px 0 -35px;
  }
`;

export const Apresentacao = styled.div`
  //font-family: 'Anton', Arial, Helvetica, sans-serif;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto 0;
  line-height: 3rem;
  padding: 1rem;
  //border: 1px solid green;
  .estatico {
    color: ${props => props.theme.colors.textBody};
    font-size: 4rem;
    font-weight: 500;
    letter-spacing: -.3rem;
    
  }
  
  .digitado {
    //border: 1px solid green;
    color: ${props => props.theme.colors.primary};
    font-size: 2rem;
    letter-spacing: -.15rem;
    position: relative;
    
  }
  .digitado::after {
    //border: 1px solid green;
    background: ${props => props.theme.colors.background};
    content: '';
    position: absolute;
    height: 100%;
    //width: 0%;
    left: 0;
    //border-left: 3px solid ${props => props.theme.colors.text};
    animation: ${typing} 2s steps(15) forwards;
  }



`;


// ------- Buttons --------
export const ButtonsBio = styled.div`
  display: flex;
  flex-direction: column;
  //border: 1px solid green;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
  button {
    height: 3.5rem;
    width: 13rem;
    color: ${props => props.theme.colors.background};
    //border-radius: 0.25rem;
    margin: .5rem;
    //border: 0.2rem solid ${props => props.theme.colors.primary};
    border:none;
    background-color: ${props => props.theme.colors.primary };
    font-weight: 600;
    font-size: 1rem;
    z-index: 1;
    outline: none;
    position: relative;
    cursor: pointer;
  }
  
  .Linkedin {
    background-color: ${props => props.theme.colors.background};
    border-top: 2px solid ${props => props.theme.colors.primary};
    border-bottom: 2px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    
  }
  //-------Botão Linkedin-------
  .Linkedin:hover {
    color: ${props => props.theme.colors.background};
    font-weight: 600;
    cursor: pointer;
    border: 0.2px solid ${props => props.theme.colors.primary};
    border-left: none;
    border-right: none;
    border-radius: 0;
  }
  .Linkedin:before {
    transition: 0.3s ease ease-out;
    position: absolute;
    top: 0;
    left: 0;
    right: 100%;
    bottom: 0;
    opacity: 0;
    content: "";
    background-color: ${props => props.theme.colors.primary};
    border-left: none;
  }
  .Linkedin:hover:before {
    transition: 0.5s all ease;
    left: 0;
    right: 0;
    opacity: 1;
    z-index: -1;
  }

  //----Botão CV-----
  .CV:hover {
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
    cursor: pointer;
    border: 0.2rem solid ${props => props.theme.colors.primary};
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
