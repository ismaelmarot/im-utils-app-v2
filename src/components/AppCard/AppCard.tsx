import type { AppCardProps } from '../../interfaces/AppCard.interface';
import Card from 'react-bootstrap/Card';
import { StyledCard } from './AppCard.styled';

export default function AppCard({ title, description }: AppCardProps) {
    return (
        <StyledCard className='h-100'>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </StyledCard>
    );
}
