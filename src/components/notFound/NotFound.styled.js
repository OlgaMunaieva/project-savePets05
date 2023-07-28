import variables from 'settings/variables';
import { styled } from 'styled-components';

export const NotFoundContainer = styled.picture`
  display: flex;
  justify-content: center;
  padding-top: 80px;
`;

export const Picture = styled.img`
  min-width: 280px;
  min-height: 123px;
  ${variables.breakPoints.tablet} {
    min-width: 704px;
    min-height: 308px;
  }
  ${variables.breakPoints.desktop} {
    min-width: 822px;
    min-height: 360px;
  }
`;
