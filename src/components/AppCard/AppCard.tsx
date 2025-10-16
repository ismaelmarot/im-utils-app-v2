import type { AppCardProps } from '../../interfaces/AppCard.interface';
import { StyledCard, Title, Text, StyledCardBody } from './AppCard.styled';

function AppCard({ title, description }: AppCardProps) {
    return (
        <StyledCard>
            <StyledCardBody>
                <Title>{title}</Title>
                <Text>{description}</Text>
            </StyledCardBody>
        </StyledCard>
    );
}

export default AppCard;