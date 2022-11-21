import styled from 'styled-components';

export const Container = styled.nav`
    background: ${props => props.theme.colors.tertiary};
    font-weight: 500;
    //height: 125px;
    height: 62px;

    ul {
            //border: 1px solid green;
            margin: 0 4.5rem;
            display: flex;
            flex-direction: row;
            justify-content:space-around;
            height: 100%;
            text-align: center;
            
            font-size: 1.1rem;
            font-weight: 500;
            color: ${props => props.theme.colors.textBody};
            
            li {
                
                //border: 1px solid green;
                list-style: none;
                position: relative;
  
                top: 30%;
                ;
                :hover {
                    color: ${props => props.theme.colors.text};
                    transition: 50ms ease-out;
                    cursor: pointer;
                }
            }
        }

    @media screen and (max-width: 600px) {
        ul {
            display: none;
        }
}
    @media screen and (min-width: 1200px) {
        ul {
            margin: 0 6rem;
        }
        .menuMobile {
            display: none;
        }
    }
    @media screen and (min-width: 889px) {
        .menuMobile {
            display: none;
        }
        
    }
`;

export const MenuEmLinha = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: end;
    padding: 1.5rem;

    font-size: 1rem;
`; 

export const MenuBurguer = styled.div`
    font-size: 1.2rem;
    position: absolute;
    width: 100%;
    height: 125px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //padding: 0.5rem;
    text-align: center;

    background-color: ${props => props.theme.colors.tertiary};

    ul {
        list-style-type: none;
    }

    li + li {
        //border: 1px solid green;
        padding-top: 0.5rem;
    }
`;

export const BarrasMenuHamburguer = styled.label`
    //border: 1px solid green;
    input {
        -webkit-appearance: none;
        visibility: hidden;
        display: none;
    }
    
    div {
        position: absolute;
        top: 2rem;
        right: 3rem;
        cursor: pointer;
        display: flex;
        justify-content: center;
    }

    span:nth-child(1) {
        bottom: 0.3rem;
        height: 0.2rem;
        width: 2.5rem;
        background: var(--text-title);
        border-radius: 0.25rem;
        position: absolute;
        transition: 0.3s ease;
    }
    span:nth-child(2) {
        height: 0.2rem;
        width: 2.5rem;
        background: var(--text-title);
        border-radius: 0.25rem;
        position: absolute;
        transition: 0.3s ease;
    }
    span:nth-child(3) {
        top: 0.5rem;
        height: 0.2rem;
        width: 2.5rem;
        background: var(--text-title);
        border-radius: 0.25rem;
        position: absolute;
        transition: 0.3s ease;
    }
    input:checked ~ div span:nth-child(1){
        transform: rotate(-40deg);
        width: 2.5rem;
        transform-origin: right;
        top: -.8rem;
    }
    input:checked ~ div span:nth-child(3){
        transform: rotate(40deg);
        width: 2.5rem;
        transform-origin: right;
        top: .8rem;
    }
    input:checked ~ div span:nth-child(2){
        transform: translateX(1rem);
        opacity: 0;
    }
`;

export const NavbarExpandida = styled.nav`
    height: 50px;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
`;

export const ThemeButton = styled.div`
    position: absolute;
    top: 1.5rem;

`;