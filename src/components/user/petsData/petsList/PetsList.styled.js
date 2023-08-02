import styled from 'styled-components';
import variables from '../../../../settings/variables';

export const PetsCardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${variables.breakPoints.tablet} {
  }
  ${variables.breakPoints.desktop} {
    gap: 24px;
  }
`;
