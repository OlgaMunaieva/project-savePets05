import GreetingsMainPage from 'components/home/greetingsMainPage/GreetingsMainPage.styled';
import HomeImages from 'components/home/homeImages/HomeImages';
import PictureContainer from 'components/pictureContainer/PictureContainer.styled';

export default function MainPage() {
  return (
    <>
      {/* <PictureContainer.RelativeContainer> */}
      <PictureContainer.PawContainer>
        <GreetingsMainPage>Take good care of your small pets</GreetingsMainPage>
        <HomeImages />
      </PictureContainer.PawContainer>
      {/* </PictureContainer.RelativeContainer> */}
    </>
  );
}
