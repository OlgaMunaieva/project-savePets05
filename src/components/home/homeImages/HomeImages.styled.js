import variables from 'settings/variables';

const { styled } = require('styled-components');

// const MainPageContainer = styled.div`
//   /* min-width: 320px; */
//   ${variables.breakPoints.tablet} {
//     min-width: 704px;
//   }
//   ${variables.breakPoints.desktop} {
//     /* min-width: 917px; */
//     position: absolute;
//     /* min-width: 704px; */
//     top: 34px;
//     left: 540px;
//   }
// `;

const BigDogImg = styled.img`
  position: absolute;
  min-width: 310px;
  top: 145px;
  left: -10px;
  margin: -30px 20px;
  ${variables.breakPoints.tablet} {
    width: 680px;
    top: 250px;
    left: 56px;
    margin: -40px 32px;
  }
  ${variables.breakPoints.desktop} {
    width: 704px;
    top: 0px;
    left: 538px;
    margin: 0 32px;
  }
`;

const SmallDogImg = styled.img`
  position: absolute;
  top: 255px;
  left: -20px;
  width: 220px;
  ${variables.breakPoints.tablet} {
    width: 518px;
    top: 500px;
    left: -32px;
  }
  ${variables.breakPoints.desktop} {
    width: 540px;
    top: 318px;
    left: 370px;
  }
`;

const SmallDogImgBg = styled.img`
  position: absolute;
  top: 255px;
  left: -20px;
  width: 220px;
  ${variables.breakPoints.tablet} {
    width: 518px;
    top: 500px;
    left: -32px;
  }
  ${variables.breakPoints.desktop} {
    width: 464px;
    top: 316px;
    left: 454px;

    /* width: 540px;
    top: 346px;
    left: -160px; */
  }
`;

const CatImg = styled.img`
  position: absolute;
  width: 210px;
  top: 391px;
  left: 108px;
  ${variables.breakPoints.tablet} {
    width: 400px;
    top: 770px;
    left: 376px;
  }
  ${variables.breakPoints.desktop} {
    width: 420px;
    top: 502px;
    left: 796px;
  }
`;

const Pictures = {
  // MainPageContainer,
  BigDogImg,
  SmallDogImg,
  CatImg,
  SmallDogImgBg,
};

export default Pictures;
