import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const StyledCard = styled(Card)`
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    height: 300px;
    font-size: 2rem;

    .card-wrapper.expanded & {
        height: 100%;
        border-radius: 1.5rem;
        box-shadow: 0 12px 40px rgba(0,0,0,0.3);
    }
`;
