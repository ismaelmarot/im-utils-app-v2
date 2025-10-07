import type { AppCardProps } from '../../interfaces/AppCard.interface';
import Card from 'react-bootstrap/Card';
import { StyledCard, Title, Text } from './AppCard.styled';

export default function AppCard({ title, description }: AppCardProps) {
    return (
        <StyledCard>
            <Card.Body>
                <Title>{title}</Title>
                <Text>{description}</Text>
            </Card.Body>
        </StyledCard>
    );
}
