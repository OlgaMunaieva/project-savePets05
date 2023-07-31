import variables from 'settings/variables';

const { styled } = require('styled-components');

const MainPageContainer = styled.div`
  /* min-width: 320px; */
  ${variables.breakPoints.tablet} {
    min-width: 704px;
  }
  ${variables.breakPoints.desktop} {
    /* min-width: 917px; */
    position: absolute;
    /* min-width: 704px; */
    top: 34px;
    left: 540px;
  }
`;

const BigDogImg = styled.img`
  position: absolute;
  min-width: 310px;
  top: 190px;
  left: -10px;
  margin: -30px 20px;
  ${variables.breakPoints.tablet} {
    width: 680px;
    top: 300px;
    left: 56px;
    margin: -40px 32px;
  }
  ${variables.breakPoints.desktop} {
    width: 704px;
    top: 28px;
    left: 8px;
    margin: 0 32px;
  }
`;

const SmallDogImg = styled.img`
  position: absolute;
  top: 300px;
  left: -20px;
  width: 220px;
  ${variables.breakPoints.tablet} {
    width: 518px;
    top: 680px;
    left: -32px;
  }
  ${variables.breakPoints.desktop} {
    width: 540px;
    top: 346px;
    left: -160px;
  }
`;

const SmallDogImgBg = styled.img`
  position: absolute;
  top: 300px;
  left: -20px;
  width: 220px;
  ${variables.breakPoints.tablet} {
    width: 518px;
    top: 680px;
    left: -32px;
  }
  ${variables.breakPoints.desktop} {
    width: 464px;
    top: 344px;
    left: -76px;

    /* width: 540px;
    top: 346px;
    left: -160px; */
  }
`;

const CatImg = styled.img`
  position: absolute;
  width: 210px;
  top: 436px;
  left: 108px;
  ${variables.breakPoints.tablet} {
    width: 400px;
    top: 830px;
    left: 376px;
  }
  ${variables.breakPoints.desktop} {
    width: 420px;
    top: 530px;
    left: 266px;
  }
`;

const Pictures = {
  MainPageContainer,
  BigDogImg,
  SmallDogImg,
  CatImg,
  SmallDogImgBg,
};

export default Pictures;
