const { styled } = require('styled-components');

const MainPageContainer = styled.div`
  position: relative;
  min-width: 280px;
`;

const BigDogContainer = styled.picture`
  position: absolute;
  z-index: 3;
  /* padding-left: 609px; */
  /* max-width: 280px;
  margin-top: -53px; */
`;

const SmallDogContainer = styled.picture`
  position: absolute;
  z-index: 2;
  top: 140px;
  left: -40px;
  width: 205px;
  /* padding-left: 609px; */
  /* max-width: 280px;
  margin-top: -53px; */
`;

const CatContainer = styled.picture`
  position: absolute;
  z-index: 1;
  top: 250px;
  left: 104px;
  width: 174px;
  /* padding-left: 609px; */
  /* max-width: 280px;
  margin-top: -53px; */
`;
const BigDogImg = styled.img`
  /* padding-left: 609px; */
  width: 280px;
  margin: -30px 20px;
`;

const SmallDogImg = styled.img`
  /* padding-left: 609px; */
  width: 280px;
  margin: -30px 20px;
`;

const CatImg = styled.img`
  /* padding-left: 609px; */
  width: 280px;
  margin: -30px 20px;
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
