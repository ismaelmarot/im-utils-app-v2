import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const StyledCard = styled(Card)`
    height: 300px;
    border-top:3px solid black;
    font-size: 2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    .card-wrapper.expanded & {
        height: 100vh;
        border-radius: 1.5rem;
        box-shadow: 0 12px 40px rgba(0,0,0,0.3);
    }
`;
