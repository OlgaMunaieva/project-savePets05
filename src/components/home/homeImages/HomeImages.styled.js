import variables from 'settings/variables';

const { styled } = require('styled-components');

const MainPageContainer = styled.div`
  position: relative;
  min-width: 280px;
  ${variables.breakPoints.tablet} {
    min-width: 704px;
  }
`;

const BigDogImg = styled.img`
  width: 280px;
  margin: -30px 20px;
  ${variables.breakPoints.tablet} {
    width: 704px;
    margin: -40px 32px;
  }
`;

const SmallDogImg = styled.img`
  position: absolute;
  top: 150px;
  left: -20px;
  width: 224px;
  ${variables.breakPoints.tablet} {
    width: 450px;
    top: 380px;
    left: -32px;
  }
`;

const CatImg = styled.img`
  position: absolute;
  width: 186px;
  top: 244px;
  left: 112px;
  ${variables.breakPoints.tablet} {
    width: 362px;
    top: 580px;
    left: 376px;
`;

const Pictures = {
  MainPageContainer,
  BigDogImg,
  SmallDogImg,
  CatImg,
};

export default Pictures;
