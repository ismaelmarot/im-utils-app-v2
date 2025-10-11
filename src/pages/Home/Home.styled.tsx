import styled from 'styled-components';
import { flex } from '../../helpers/setFlex';
import { size } from '../../helpers/setSize';

export const ContainerStyled = styled.div`
    ${flex('column', 'center', 'flex-start')}
    ${size('100%','100vh')}
`;

export const ContainerAppCard = styled.div`
    ${flex('column', 'center', 'center')}
    ${size('100%','33.3vh')}
    max-width: 30rem;
`;
