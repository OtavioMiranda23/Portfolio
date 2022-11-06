import styled from 'styled-components';

export const Container = styled.nav`
    background: var(--red);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    font-weight: 500;
    display: flex;
    height: 125px;
    color: var(--text-title);
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

    background-color: var(--red);

    ul {
        list-style-type: none;
    }

    li + li {
        //border: 1px solid green;
        padding-top: 0.5rem;
    }
`;

export const BarrasMenuHamburguer = styled.label`
    border: 1px solid green;
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