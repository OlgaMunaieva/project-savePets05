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
import {
  selectIsNoticeLoading,
  selectNotices,
  selectTotalPages,
} from 'redux/notices/selectors';
import { useNavigate, useParams } from 'react-router-dom';
import Pagination from 'components/pagination/Pagination';
import { FixedButtonWrapper } from 'components/buttons/addPetBtn/addPetBtn.styled';
import AddPetBtnCircle from 'components/buttons/addPetBtn/addPetBtnCircle';
import { useResize } from 'hooks/useResize';
import NoticesSearch from 'components/notice/noticesSearch/NoticesSearch';
import Loader from 'components/Loader/Loader';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { ModalUserLogin } from 'components/allModals/UserLoginModal/UserLoginModal';
import { WrapperBtn, WrapperFilter } from './NoticesPage.styled';
import AddPetBtn from 'components/buttons/addPetBtn/addPetBtn';
import NoticesFilters from 'components/notice/noticesFilters/NoticesFilters';

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
  const [isModalOpenUserLogin, setIsModalOpenUserLogin] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // для кнопки add pet
  const handleNavigate = source => {
    if (!isLoggedIn) {
      setIsModalOpenUserLogin(true);
    } else {
      navigate(`/add-pet?source=${source}`);
    }
  };

  const isLoading = useSelector(selectIsNoticeLoading);

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

  const handleModalUserLogin = () => {
    setIsModalOpenUserLogin(!isModalOpenUserLogin);
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
      dispatch(
        fetchFavorite({
          limit: resizeHandler(width),
          page: page + 1,
          title: title,
        })
      );
    }
    if (locationCategory === 'own') {
      dispatch(
        fetchMyPets({
          limit: resizeHandler(width),
          page: page + 1,
          title: title,
        })
      );
    }
  }, [dispatch, locationCategory, limit, page, title, width]);

  const handlePageClick = ({ selected }) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPage(selected);
  };

  const paginationKey = `${locationCategory}`;

  return (
    <>
      {isModalOpenUserLogin && (
        <ModalUserLogin closeModal={() => setIsModalOpenUserLogin(false)} />
      )}
      <TitlePage children={'Find your favorite pet'} />
      <NoticesSearch clean={handlerCleanQuery} setQvery={handlerQuery} />
      <WrapperFilter>
        <NoticesCategoriesNav onClick={handleCategoryChange} />
        <WrapperBtn>
          <NoticesFilters />
          {width >= 768 && (
            <AddPetBtn onClick={() => handleNavigate('notices')} />
          )}
        </WrapperBtn>
      </WrapperFilter>
      {isLoading ? (
        <Loader />
      ) : (
        <NoticesCategoriesList
          pets={notices}
          locationCategory={locationCategory}
        />
      )}

      {width < 768 && (
        <FixedButtonWrapper>
          <AddPetBtnCircle onClick={() => handleNavigate('notices')} />
        </FixedButtonWrapper>
      )}
      {totalPages >= 12 && !isLoading ? (
        <Pagination
          key={paginationKey}
          click={handlePageClick}
          page={page}
          limit={limit}
        />
      ) : null}
      {isModalOpenUserLogin && (
        <ModalUserLogin closeModal={handleModalUserLogin} />
      )}
    </>
  );
};

export default NoticesPage;
