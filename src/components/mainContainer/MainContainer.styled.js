import { styled } from 'styled-components';
import variables from 'settings/variables';

const MainContainer = styled.div`
  padding: 20px 20px 0px;
  margin: 0 auto;
  max-width: 320px;
  ${variables.breakPoints.tablet} {
    padding: 24px 32px 0px;
    max-width: 768px;
  }
  ${variables.breakPoints.desktop} {
    padding: 20px 16px 0px;
    max-width: 1280px;
  }
`;

export default MainContainer;
