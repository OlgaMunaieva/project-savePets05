import NoticesCategoriesList from 'components/notice/noticesCategoriesList/NoticesCategoriesList';
import { NoticesCategoriesNav } from 'components/notice/noticesCategoriesNav/NoticesCategoriesNav';
import TitlePage from 'components/title/TitlePage';
import { useEffect } from 'react';
import { fetchByCategory, fetchFavorite } from 'redux/notices/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectNotices } from 'redux/notices/selectors';
import { useParams } from 'react-router-dom';
// import { useResize } from 'hooks/useResize';

const NoticesPage = () => {
  const notices = useSelector(selectNotices);
  const dispatch = useDispatch();
  const params = useParams();
  // const [limit, setLimit] = useState(12);
  const limit = 12;

  // const { width } = useResize();

  // const resizeHandler = width => {
  //   if (width <= 766) {
  //     setLimit(11);
  //   } else if (width < 1279) {
  //     setLimit(10);
  //   } else if (width >= 1280) {
  //     setLimit(12);
  //   }
  // };

  const locationCategory = params.categoryName;
  useEffect(() => {
    document.title = 'YourPet | Find pet';
    // resizeHandler(width);
    if (locationCategory !== 'favorite' && locationCategory !== 'own') {
      dispatch(
        fetchByCategory({
          category: locationCategory,
          limit: limit,
        })
      );
    }
    if (locationCategory === 'favorite') {
      dispatch(fetchFavorite({ limit: limit }));
    }
  }, [dispatch, locationCategory, limit]);

  return (
    <>
      <TitlePage children={'Find your favorite pet'} />
      <NoticesCategoriesNav />
      <NoticesCategoriesList
        pets={notices}
        locationCategory={locationCategory}
      />
    </>
  );
};

export default NoticesPage;
