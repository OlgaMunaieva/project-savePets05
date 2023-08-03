import variables from 'settings/variables';
import styled from 'styled-components';

export const Header = styled.div`
  z-index: 20;
  display: flex;
  z-index: 20;
  align-items: center;
  justify-content: space-between;
  position: relative;
  min-width: 280px;
  margin: 0 auto;
  ${variables.breakPoints.mobile} {
    max-width: 440px;
  }
  ${variables.breakPoints.tablet} {
    max-width: 768px;
  }
  ${variables.breakPoints.desktop} {
    max-width: 1280px;
  }
`;
