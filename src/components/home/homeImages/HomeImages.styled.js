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
z-index: 5;
  position: absolute;
  min-width: 310px;
  top: 145px;
  left: -10px;
  margin: -30px 20px;
  ${variables.breakPoints.tablet} {
    z-index: 5;
    width: 680px;
    top: 250px;
    left: 56px;
    margin: -40px 32px;
  }
  ${variables.breakPoints.desktop} {
    width: 704px;
    top: -66px;
    left: 538px;
    margin: 0 32px;
  }
`;

const BigDogImgBg = styled.img`
  position: absolute;
  width: 246px;
    top: 198px;
    left: 100px;
  margin: -30px 20px;
  ${variables.breakPoints.tablet} {
    width: 520px;
    top: 372px;
    left: 290px;
    margin: -40px 32px;
  }
  ${variables.breakPoints.desktop} {
    display: none;
    width: 704px;
    top: -66px;
    left: 538px;
    margin: 0 32px;
  }
`;

const SmallDogImg = styled.img`
z-index: 5;
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
    width: 637px;
    top: 198px;
    left: 303px;
  }
`;

const SmallDogImgBg = styled.img`
  position: absolute;
  top: 245px;
    left: -120px;
    min-width: 325px;
  ${variables.breakPoints.tablet} {
   min-width: 611px;
    top: 499px;
    left: -127px;
  }
  ${variables.breakPoints.desktop} {
    /* display: none; */
    min-width: 541px;
    top: 197px;
    left: 402px;

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
    top: 436px;
    left: 796px;
  }
`;

const Pictures = {
  // MainPageContainer,
  BigDogImg,
  SmallDogImg,
  CatImg,
  SmallDogImgBg,
  BigDogImgBg
};

export default Pictures;
