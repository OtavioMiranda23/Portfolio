import styled from 'styled-components';

export const Container = styled.div`
    margin: 4rem;
    gap: 1rem;
    //border: 1px solid green;
    height: 15rem;
    display: flex;
    flex-direction: row;
    border: 3px solid green;
`;

export const CardPortfolio = styled.div`
    //border: 3px solid green;
    justify-content: center;
    align-items: center;
    height: 10rem;
    margin: 1rem auto;
    //gap: 1rem;
    background-color: var(--dark-red);
    display: flex;
    flex-direction: row;
    color: var(--shape);
    border-radius: .25rem;
    
    :active {
        background-color: var(--red);

    }
`;

