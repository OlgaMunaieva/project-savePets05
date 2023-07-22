import { styled } from 'styled-components';
import variables from 'settings/variables';

const PictureContainer = styled.div`
  width: 320px;
  height: 601px;

  ${variables.breakPoints.tablet} {
    padding: 24px 32px 0px;
  }
  ${variables.breakPoints.desktop} {
    padding: 20px 16px 0px;
  }
`;

export default PictureContainer;
