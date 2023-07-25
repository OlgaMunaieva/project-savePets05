import NoticesCategoriesList from 'components/notice/noticesCategoriesList/NoticesCategoriesList';
import pets from '../components/notice/pets.json';
import { NoticesCategoriesNav } from 'components/notice/noticesCategoriesNav/NoticesCategoriesNav';
import TitlePage from 'components/title/TitlePage';

const NoticesPage = () => {
  return (
    <>
      <TitlePage children={'Find your favorite pet'} />
      <NoticesCategoriesNav />
      <NoticesCategoriesList pets={pets} />
    </>
  );
};

export default NoticesPage;
