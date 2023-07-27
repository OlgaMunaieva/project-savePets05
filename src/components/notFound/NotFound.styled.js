import variables from 'settings/variables';
import { styled } from 'styled-components';

export const NotFoundContainer = styled.picture`
  width: 100px;
  height: 100px;
  /* display: flex; */
`;

export const Picture = styled.img`
  /* position: absolute; */
  min-width: 280px;
  min-height: 123px;
  /* top: 190px;
  left: -10px; */
  /* margin: -30px 20px; */
  ${variables.breakPoints.tablet} {
    width: 680px;
    top: 300px;
    left: 56px;
    margin: -40px 32px;
  }
  ${variables.breakPoints.desktop} {
    width: 704px;
    top: 0px;
    left: 8px;
    margin: -40px 32px;
  }
`;

// const NotFound = {
//   NotFoundContainer,
//   Picture
// }

// export default NotFound;
