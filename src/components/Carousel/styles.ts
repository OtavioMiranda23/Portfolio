import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    position: relative;
`;

export const SlideStyles = styled.div`
    width: 100%;
    height: 100%;
    border-radius: .8rem;
    background-position: center;
    background-size: cover;
    background-color: aqua;
`;

export const LeftArrowStyles = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 32px;
    font-size: 2.5rem;
    color: var(--shape);
    z-index: 1;
    cursor: pointer;
`;
export const RightArrowStyles = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 32px;
    font-size: 2.5rem;
    color: var(--shape);
    z-index: 1;
    cursor: pointer;
`;