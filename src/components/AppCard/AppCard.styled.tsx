import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const StyledCard = styled(Card)`
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    }
`;
