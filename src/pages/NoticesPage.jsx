import NoticesCategoriesList from 'components/notice/noticesCategoriesList/NoticesCategoriesList';
import { NoticesCategoriesNav } from 'components/notice/noticesCategoriesNav/NoticesCategoriesNav';
import TitlePage from 'components/title/TitlePage';
import { useEffect, useState } from 'react';
import {
  fetchByCategory,
  fetchFavorite,
  fetchMyPets,
} from 'redux/notices/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectNotices } from 'redux/notices/selectors';
import { useNavigate, useParams } from 'react-router-dom';
import Pagination from 'components/pagination/Pagination';
import { FixedButtonWrapper } from 'components/buttons/addPetBtn/addPetBtn.styled';
import AddPetBtnCircle from 'components/buttons/addPetBtn/addPetBtnCircle';
import { useResize } from 'hooks/useResize';

const NoticesPage = () => {
  // для кнопки add pet
  const { width } = useResize();

  const notices = useSelector(selectNotices);
  const dispatch = useDispatch();
  const params = useParams();
  // const [limit, setLimit] = useState(12);
  const limit = 12;
  const [page, setPage] = useState(0);

  const navigate = useNavigate(); // для кнопки add pet

  // для кнопки add pet
  const handleNavigate = source => {
    navigate(`/add-pet?source=${source}`);
  };

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
    // resizeHandler(width);
    if (locationCategory !== 'favorite' && locationCategory !== 'own') {
      dispatch(
        fetchByCategory({
          category: locationCategory,
          limit: limit,
          page: page + 1,
        })
      );
    }
    if (locationCategory === 'favorite') {
      dispatch(fetchFavorite({ limit: limit }));
    }
    if (locationCategory === 'own') {
      dispatch(fetchMyPets({ limit: limit }));
    }
  }, [dispatch, locationCategory, limit, page]);

  const handlePageClick = ({ selected }) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPage(selected);
  };
  return (
    <>
      <TitlePage children={'Find your favorite pet'} />
      <NoticesCategoriesNav />
      <NoticesCategoriesList
        pets={notices}
        locationCategory={locationCategory}
      />
      <Pagination click={handlePageClick} limit={limit} page={page} />
      {width < 768 && (
        <FixedButtonWrapper>
          <AddPetBtnCircle onClick={() => handleNavigate('notices')} />
        </FixedButtonWrapper>
      )}
    </>
  );
};

export default NoticesPage;
