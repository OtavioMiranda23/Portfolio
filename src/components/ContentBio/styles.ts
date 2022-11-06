import styled from 'styled-components';

export const Container = styled.div`
    //border: 1px solid green;
    //margin: 1rem;
    display: flex;
    flex-direction: column;
    color: var(--text-title);
    
    div {
        //border: 1px solid green;
        //margin-top: .5rem;
        text-align: start;
        margin: .2rem 0 1rem 0;
    }
`;

export const ButtonsBio = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    button {
        padding: 1rem .5rem 1rem .5rem;
        border-radius: 0.25rem;
        margin: 0 6rem 1rem 6rem;
        border: .2rem solid var(--shape);
        background-color: var(--red) ;
        color: var(--shape);
        z-index: 1;
        outline: none;
        position: relative;
        cursor: pointer;
    }
    .Linkedin {
        :hover {
            background-color: var(--background);
            border: .2rem solid var(--red);
            color: var(--red);
        }
    }

    .CV:hover {
        color: var(--red);
        font-weight: 600;
        cursor: pointer;
        border: .2rem solid var(--red);
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
        background-color: var(--background);
        
    }
    
    .CV:hover:before {
        transition: 0.5s all ease;
        left: 0;
        right: 0;
        opacity: 1;
        z-index: -1;

    }
`;
