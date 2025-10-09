import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { size } from '../../helpers/setSize';
import { COLORS } from '../../styles/colors';

export const StyledCard = styled(Card)`
    ${size('100%','200px')}
    border-top:5px solid ${COLORS.dark};
    border-radius: 0;
    font-size: 2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    .card-wrapper.expanded & {
        ${size('100%','100vh')}
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        border-top: none;
    }
`;

export const Title = styled(Card.Title)`
    font-size: 2.5rem;
`;

export const Text = styled(Card.Text)`
    font-size: 1.5rem;  
`;
