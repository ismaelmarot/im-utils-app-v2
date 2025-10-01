import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { size } from '../../helpers/setSize';
import { flex } from '../../helpers/setFlex';

export const ContainerStyled = styled(Container)`
    ${flex('column', 'center', 'center')};
    ${size('100vw', '100vh')};
    perspective: 1000px;
    padding: 0 0 5rem;
    border: 3px solid red; /* debug */
`;

export const CardsStack = styled.div`
    ${flex('row', 'flex-end', 'center')};
    ${size('100vw', '100vh')};
    position: relative;
    border: 2px solid blue;

    .card-wrapper {
        ${size('100%','180px')};
        position: absolute;
        transition: all 0.4s ease;
        cursor: pointer;
        border: 4px solid yellow;
    }

    /* carta inferior (primer elemento visible) */
    .card-wrapper:nth-child(3) {
        bottom: 0px;
        z-index: 3;
    }

    /* carta del medio */
    .card-wrapper:nth-child(2) {
        bottom: 40px;
        z-index: 2;
    }

    /* carta superior */
    .card-wrapper:nth-child(1) {
        bottom: 80px;
        z-index: 1;
    }

    /* cuando una tarjeta se expande */
    .card-wrapper.expanded {
        bottom: 0;
        height: 100%;
        z-index: 100;
    }
`;
