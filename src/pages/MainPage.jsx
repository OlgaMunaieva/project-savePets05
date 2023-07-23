import GreetingsMainPage from 'components/greetingsMainPage/GreetingsMainPage.styled';
import PictureContainer from 'components/pictureContainer/PictureContainer.styled';

export default function MainPage() {
  return (
    <>
      {/* <PictureContainer.RelativeContainer> */}
      <PictureContainer.PawContainer>
        <GreetingsMainPage>Take good care of your small pets</GreetingsMainPage>
      </PictureContainer.PawContainer>
      {/* </PictureContainer.RelativeContainer> */}
    </>
  );
}
