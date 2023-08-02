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
import { selectNotices, selectTotalPages } from 'redux/notices/selectors';
import { useNavigate, useParams } from 'react-router-dom';
import Pagination from 'components/pagination/Pagination';
import { FixedButtonWrapper } from 'components/buttons/addPetBtn/addPetBtn.styled';
import AddPetBtnCircle from 'components/buttons/addPetBtn/addPetBtnCircle';
import { useResize } from 'hooks/useResize';
import NoticesSearch from 'components/notice/noticesSearch/NoticesSearch';
// import { debounce } from 'lodash';

const NoticesPage = () => {
  // для кнопки add pet
  const { width } = useResize();
  const totalPages = useSelector(selectTotalPages);
  const notices = useSelector(selectNotices);
  const dispatch = useDispatch();
  const params = useParams();
  // const [limit, setLimit] = useState(12);
  const limit = 12;
  const [page, setPage] = useState(0);
  const [title, setTitle] = useState('');
  const navigate = useNavigate(); // для кнопки add pet
  const locationCategory = params.categoryName;

  // для кнопки add pet
  function handleNavigate(source) {
    navigate(`/add-pet?source=${source}`);
  }

  const resizeHandler = width => {
    if (width <= 766) {
      return 11;
    } else if (width < 1279) {
      return 10;
    } else if (width >= 1280) {
      return 12;
    }
  };

  const handlerQuery = query => {
    setTitle(query);
  };
  const handlerCleanQuery = () => {
    setTitle('');
  };

  const handleCategoryChange = () => {
    setPage(0);
  };

  useEffect(() => {
    if (locationCategory !== 'favorite' && locationCategory !== 'own') {
      dispatch(
        fetchByCategory({
          category: locationCategory,
          limit: resizeHandler(width),
          page: page + 1,
          title: title,
        })
      );
    }
    if (locationCategory === 'favorite') {
      dispatch(fetchFavorite({ limit: resizeHandler(width) }));
    }
    if (locationCategory === 'own') {
      dispatch(fetchMyPets({ limit: resizeHandler(width) }));
    }
  }, [dispatch, locationCategory, limit, page, title, width]);

  const handlePageClick = ({ selected }) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPage(selected);
  };

  const paginationKey = `${locationCategory}`;
  console.log(totalPages);

  return (
    <>
      <TitlePage children={'Find your favorite pet'} />
      <NoticesSearch clean={handlerCleanQuery} setQvery={handlerQuery} />
      <NoticesCategoriesNav onClick={handleCategoryChange} />
      <NoticesCategoriesList
        pets={notices}
        locationCategory={locationCategory}
      />
      {totalPages >= 12 &&
        locationCategory !== 'favorite' &&
        locationCategory !== 'own' && (
          <Pagination
            key={paginationKey}
            click={handlePageClick}
            limit={limit}
            page={page}
          />
        )}
      {width < 768 && (
        <FixedButtonWrapper>
          <AddPetBtnCircle onClick={() => handleNavigate('notices')} />
        </FixedButtonWrapper>
      )}
    </>
  );
};

export default NoticesPage;
