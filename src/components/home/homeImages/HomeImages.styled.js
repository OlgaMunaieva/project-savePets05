const { styled } = require('styled-components');

const MainPageContainer = styled.div`
  position: relative;
  min-width: 280px;
`;

const BigDogImg = styled.img`
  width: 280px;
  margin: -30px 20px;
`;

const SmallDogImg = styled.img`
  position: absolute;
  top: 150px;
  left: -20px;
  width: 224px;
`;

const CatImg = styled.img`
  position: absolute;
  width: 186px;
  top: 244px;
  left: 112px;
`;

const Pictures = {
  MainPageContainer,
  BigDogImg,
  SmallDogImg,
  CatImg,
};

export default Pictures;
