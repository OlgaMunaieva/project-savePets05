import { styled } from 'styled-components';
import variables from 'settings/variables';

const MainContainer = styled.div`
  margin: 20px 20px 0px;
  ${variables.breakPoints.tablet} {
    margin: 24px 32px 0px;
  }
  ${variables.breakPoints.desktop} {
    margin: 20px 16px 0px;
  }
`;

export default MainContainer;
