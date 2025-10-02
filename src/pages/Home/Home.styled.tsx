import styled from 'styled-components';

export const ContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
    width: 100%;
`;

export const CardsStack = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 400px;
    max-height: 80vh;
    overflow-y: auto;
    padding: 1rem;
    box-sizing: border-box;
    border: 2px solid blue;

    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 4px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }

    .card-wrapper {
        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .card-wrapper.expanded {
        transform: scale(1.05);
    }
`;
