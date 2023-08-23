import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import spriteImage from '../../../images/sprite.svg';

import { ExitButton, ModalWindow } from '../../modal/Modal.styled';

import CrossIcon from '../../../images/icons/CrossIcon.svg';
import {
  Data,
  DataWrapper,
  Img,
  ImgWrapper,
  InformationWrapper,
  ModalContent,
  TitleWrapper,
  Title,
  DescriptionWrapper,
  Details,
  ContactBtn,
  FavoriteBtn,
  MainDataWrapper,
  Wrapper,
  ButtonsWrapper,
  NoticeLink,
  Icon,
} from './ModalNotice.styled';
import {
  Status,
  StatusText,
} from '../noticeCategoryItem/NoticeCategoryItem.styled';
import axios from 'axios';
import { CircleLoader } from 'react-spinners';
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavorite, putFavorite } from 'redux/notices/operations';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import variables from 'settings/variables';

const BaseUrlImg = 'https://res.cloudinary.com/dfvviqdic/image/upload/';

const modalRoot = document.body;

const ModalNotice = ({ onClose, isOpenedModal, id, favorite, children }) => {
  const params = useParams();
  const categoryParam = params.categoryName;
  const [data, setData] = useState(null);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch(id);
  console.log(favorite);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://project-savepets05-be.onrender.com/api/notices/${id}`
        );
        const notice = response.data;

        setData(notice);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const toggleModal = useCallback(
    e => {
      if (e.code !== 'Escape') return;
      onClose();
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', toggleModal);

    return () => {
      window.removeEventListener('keydown', toggleModal);
    };
  }, [isOpenedModal, toggleModal]);

  useEffect(() => {
    const handleKeyDown = e => toggleModal(e);

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  const onClickOverlay = e => {
    if (e.target === e.currentTarget) onClose();
  };

  const favoriteClickHandle = () => {
    const debouncedFetchFavorite = debounce(() => {
      dispatch(fetchFavorite());
    }, 150);

    if (!isLoggedIn) {
      toast.error('You need to sign in');
    }
    dispatch(putFavorite(id));

    if (categoryParam === 'favorite' && favorite) {
      debouncedFetchFavorite();
    }
  };

  return createPortal(
    <ModalWindow onClick={onClickOverlay}>
      {!data ? (
        <CircleLoader color="#CCE4FB" size={23} />
      ) : (
        <ModalContent>
          <ExitButton onClick={() => onClose()}>
            <img src={CrossIcon} alt="Cross" width={24} height={24} />
          </ExitButton>
          <MainDataWrapper>
            <Wrapper>
              <ImgWrapper>
                <Img
                  src={BaseUrlImg + data.photoUrl}
                  alt="pet"
                  loading="lazy"
                />
                <Status>
                  <StatusText>{data.category}</StatusText>
                </Status>
              </ImgWrapper>
              <TitleWrapper>
                <Title>{data.title}</Title>
                <InformationWrapper>
                  <DataWrapper>
                    <Data>Name:</Data>
                    <Details>{data.name}</Details>
                  </DataWrapper>
                  <DataWrapper>
                    <Data>Birthday:</Data>
                    <Details>{data.birthday}</Details>
                  </DataWrapper>
                  <DataWrapper>
                    <Data>Type:</Data>
                    <Details>{data.type}</Details>
                  </DataWrapper>
                  <DataWrapper>
                    <Data>Place:</Data>
                    <Details>{data.location}</Details>
                  </DataWrapper>
                  <DataWrapper>
                    <Data>The sex:</Data>
                    <Details>{data.sex}</Details>
                  </DataWrapper>
                  <DataWrapper>
                    <Data>Email:</Data>
                    <NoticeLink href={`mailto:${data.email}`}>
                      {data.email}
                    </NoticeLink>
                  </DataWrapper>
                  <DataWrapper>
                    <Data>Phone:</Data>
                    <NoticeLink href={`tel:${data.phone}`}>
                      {data.phone}
                    </NoticeLink>
                  </DataWrapper>
                </InformationWrapper>
              </TitleWrapper>
            </Wrapper>
            <DescriptionWrapper>
              <span style={{ marginRight: 5 }}>Comments:</span>
              {data.comments}
            </DescriptionWrapper>
          </MainDataWrapper>
          <ButtonsWrapper>
            <ContactBtn href={`tel:${data.phone}`}>Contact</ContactBtn>
            <FavoriteBtn type="button" onClick={favoriteClickHandle}>
              {favorite ? <span>Favorite</span> : <span>Add to</span>}
              <Icon
                width={24}
                height={24}
                color={
                  favorite ? `${variables.colors.secondaryText}` : 'transparent'
                }
                stroke={`red`}
              >
                <use href={spriteImage + '#icon-heart'}></use>
              </Icon>
            </FavoriteBtn>
          </ButtonsWrapper>
        </ModalContent>
      )}
    </ModalWindow>,
    modalRoot
  );
};

export default ModalNotice;
