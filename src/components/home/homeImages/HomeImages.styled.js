const { styled } = require('styled-components');

const MainPageContainer = styled.div`
  position: relative;
  min-width: 280px;
`;

const BigDogContainer = styled.picture`
  /* position: absolute; */
  /* z-index: 3; */
  /* padding-left: 609px; */
  /* max-width: 280px;
  margin-top: -53px; */
`;

const SmallDogContainer = styled.picture`
  /* position: absolute; */
  /* z-index: 2; */
  /* top: 140px; */
  /* left: 0px; */
  width: 224px;
  /* padding-left: 609px; */
  /* max-width: 280px;
  margin-top: -53px; */
`;

const CatContainer = styled.picture`
  /* position: absolute; */
  /* z-index: 1; */
  top: 250px;
  left: 104px;
  width: 186px;
  /* padding-left: 609px; */
  /* max-width: 280px;
  margin-top: -53px; */
`;
const BigDogImg = styled.img`
  /* position: absolute; */
  /* padding-left: 609px; */
  width: 280px;
  margin: -30px 20px;
`;

const SmallDogImg = styled.img`
  position: absolute;
  /* z-index: 2; */
  top: 150px;
  left: -20px;
  width: 224px;
  /* padding-left: 609px; */
  /* max-width: 280px;
  margin-top: -53px; */
  /* position: absolute; */
  /* padding-left: 609px; */
  /* width: 280px; */
  /* margin: -30px 0px; */
`;

const CatImg = styled.img`
  position: absolute;
  /* padding-left: 609px; */
  width: 186px;
  top: 244px;
  left: 112px;
`;

const Pictures = {
  MainPageContainer,
  BigDogContainer,
  BigDogImg,
  SmallDogContainer,
  CatContainer,
  SmallDogImg,
  CatImg,
};

export default Pictures;
