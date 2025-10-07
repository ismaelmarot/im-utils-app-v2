import styled from 'styled-components';
import { flex } from '../../helpers/setFlex';
import { size } from '../../helpers/setSize';

export const ContainerStyled = styled.div`
    ${flex('column', 'center', 'center')}
    ${size('100%','')}
    min-height: 100vh; 
`;
