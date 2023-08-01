import { HomePageContainer } from 'components/home/HomeContainer.styled';
import GreetingsMainPage from 'components/home/greetingsMainPage/GreetingsMainPage.styled';
import HomeImages from 'components/home/homeImages/HomeImages';

export default function MainPage() {
  return (
    <>
      <HomePageContainer>
      <GreetingsMainPage>Take good care of your small pets</GreetingsMainPage>
        <HomeImages />
        </HomePageContainer>
    </>
  );
}
