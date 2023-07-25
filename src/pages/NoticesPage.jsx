import NoticesCategoriesList from 'components/notice/noticesCategoriesList/NoticesCategoriesList';
import pets from '../components/notice/pets.json';
import MainContainer from 'components/mainContainer/MainContainer.styled';
import { NoticesCategoriesNav } from 'components/notice/noticesCategoriesNav/NoticesCategoriesNav';
import TitlePage from 'components/title/TitlePage';

const NoticesPage = () => {
  return (
    <MainContainer>
      <TitlePage children={'Find your favorite pet'} />
      <NoticesCategoriesNav />
      <NoticesCategoriesList pets={pets} />
    </MainContainer>
  );
};

export default NoticesPage;
