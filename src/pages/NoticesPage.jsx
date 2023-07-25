import NoticesCategoriesList from 'components/notice/noticesCategoriesList/NoticesCategoriesList';
import pets from '../components/notice/pets.json';
import MainContainer from 'components/mainContainer/MainContainer.styled';

const NoticesPage = () => {
  return (
    <MainContainer>
      <NoticesCategoriesList pets={pets} />
    </MainContainer>
  );
};

export default NoticesPage;
