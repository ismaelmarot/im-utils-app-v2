import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { size } from '../../helpers/setSize';

export const StyledCard = styled(Card)`
    ${size('','300px')}
    border-top:3px solid black;
    font-size: 2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    .card-wrapper.expanded & {
        ${size('','100vh')}
        border-radius: 1.5rem;
        box-shadow: 0 12px 40px rgba(0,0,0,0.3);
    }
`;

export const Title = styled(Card.Title)`
    font-size: 2.5rem;
`;

export const Text = styled(Card.Text)`
    font-size: 1.5rem;  
`;
