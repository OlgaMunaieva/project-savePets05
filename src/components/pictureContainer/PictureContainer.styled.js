import { styled } from 'styled-components';
import variables from 'settings/variables';
import pawprintMobile1 from '../../images/pawprint/pawprint-mobile-1.png';
import pawprintTablet1 from '../../images/pawprint/pawprint-tablet-1.png';
import pawprintDesktop1 from '../../images/pawprint/pawprint-desktop-1.png';

const RelativeContainer = styled.div`
  position: relative;
  margin: 0 auto;
  /* background-color: aqua; */
  width: 320px;
  height: 601px;

  ${variables.breakPoints.tablet} {
    width: 768px;
    height: 1193px;
  }
  ${variables.breakPoints.desktop} {
    width: 1280px;
    height: 770px;
  }
`;

const PawContainer = styled.div`
  position: absolute;
  /* background-color: black; */
  width: 79px;
  height: 79px;
  top: 338px;
  left: 98px;
  /* opacity: 0.12px; */
  /* rotate: 40.54; */
  background-image: ${pawprintMobile1};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;

  ${variables.breakPoints.tablet} {
    width: 157px;
    height: 157px;
    top: 671px;
    left: 235px;
    background-image: ${pawprintTablet1};
  }
  ${variables.breakPoints.desktop} {
    background-image: ${pawprintDesktop1};
  }
`;

const PictureContainer = {
  RelativeContainer,
  PawContainer,
};

export default PictureContainer;
