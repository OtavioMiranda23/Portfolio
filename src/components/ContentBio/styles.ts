import styled from 'styled-components';

export const Container = styled.div`
    //border: 1px solid green;
    margin: 1rem;
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
    
    button:nth-child(1) {
        padding: 1rem .5rem 1rem .5rem;
        border-radius: 5rem;
        margin: 0 6rem 1rem 6rem;
        border: .2rem solid white;
        background-color: var(--red) ;
        color: var(--shape);
    }
    button:nth-child(2) {
        padding: 1rem .5rem 1rem .5rem;
        border-radius: 5rem;
        margin: 0 6rem 1rem 6rem;
        border: .2rem solid white;
        background-color: var(--red) ;
        color: var(--shape);
    }
`;
