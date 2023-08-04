// import { toast } from 'react-hot-toast';
import { debounce } from 'lodash';
import icons from '../../../images/icons/icons-card.svg';
import variables from 'settings/variables';
import {
  BtnFavorite,
  BtnLearn,
  BtnLearnIcon,
  BtnRemoveMyPet,
  Description,
  DescriptionItem,
  DescriptionItemText,
  Icon,
  Img,
  ImgWrapper,
  Item,
  Status,
  StatusText,
  Title,
  TitleWrapper,
} from './NoticeCategoryItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import {
  delMyPetsById,
  fetchFavorite,
  fetchMyPets,
  putFavorite,
} from 'redux/notices/operations';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import ModalNotice from '../modalNotice/ModalNotice';
import { ModalConfirmDelete } from '../ModalDelMyPet/ModalDelMyPet';
import { ModalUserLogin } from 'components/allModals/UserLoginModal/UserLoginModal';
const BaseUrlImg = 'https://res.cloudinary.com/dfvviqdic/image/upload/';

const NoticesCategoryItem = ({
  id: cardId,
  category,
  sex,
  age,
  location,
  title,
  favorite,
  owner,
  photoUrl,
}) => {
  const params = useParams();
  const categoryParam = params.categoryName;
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch(cardId);

  const favoriteClickHandle = () => {
    const debouncedFetchFavorite = debounce(() => {
      dispatch(fetchFavorite());
    }, 150);

    if (!isLoggedIn) {
    }
    dispatch(putFavorite(cardId));
    if (!isLoggedIn) {
      handleModalUserLogin();
      // setIsModalOpenUserLogin(true);
    }
    if (categoryParam === 'favorite' && favorite) {
      debouncedFetchFavorite();
    }
  };

  const handleDelete = () => {
    const debouncedFetchMyPets = debounce(() => {
      dispatch(fetchMyPets());
    }, 150);

    dispatch(delMyPetsById(cardId));

    if (categoryParam === 'own') {
      debouncedFetchMyPets();
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenDel, setIsModalOpenDel] = useState(false);
  const [isModalOpenUserLogin, setIsModalOpenUserLogin] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleModalDel = () => {
    setIsModalOpenDel(!isModalOpenDel);
  };

  const handleModalUserLogin = () => {
    setIsModalOpenUserLogin(!isModalOpenUserLogin);
  };

  return (
    <>
      <Item>
        <ImgWrapper>
          <Img src={BaseUrlImg + photoUrl} alt="pet" loading="lazy" />
          <Status>
            <StatusText>{category}</StatusText>
            <div>
              <BtnFavorite type="button" onClick={favoriteClickHandle}>
                <Icon
                  width={24}
                  height={24}
                  color={
                    favorite
                      ? `${variables.colors.buttonsHoverBg}`
                      : 'currentColor'
                  }
                >
                  <use href={icons + '#heart'}></use>
                </Icon>
              </BtnFavorite>
              {owner && isLoggedIn && (
                <BtnRemoveMyPet onClick={handleModalDel}>
                  <Icon width={24} height={24}>
                    <use href={icons + '#trash'}></use>
                  </Icon>
                </BtnRemoveMyPet>
              )}
            </div>
          </Status>
          <Description>
            <DescriptionItem>
              <Icon width={24} height={24}>
                <use href={icons + '#location'}></use>
              </Icon>
              <DescriptionItemText>{location}</DescriptionItemText>
            </DescriptionItem>
            <DescriptionItem>
              <Icon width={24} height={24}>
                <use href={icons + '#clock'}></use>
              </Icon>
              <DescriptionItemText>{age}</DescriptionItemText>
            </DescriptionItem>
            <DescriptionItem>
              {sex === 'male' ? (
                <Icon width={24} height={24}>
                  <use href={icons + '#male'} width={24} height={24}></use>
                </Icon>
              ) : (
                <Icon width={24} height={24}>
                  <use href={icons + '#female'} width={24} height={24}></use>
                </Icon>
              )}
              <DescriptionItemText>{sex}</DescriptionItemText>
            </DescriptionItem>
          </Description>
        </ImgWrapper>
        <TitleWrapper>
          <Title>{title}</Title>
          <BtnLearn onClick={handleModal}>
            Learn More
            <BtnLearnIcon width={24} height={24}>
              <use href={icons + '#pawprint'}></use>
            </BtnLearnIcon>
          </BtnLearn>
          {isModalOpen && (
            <ModalNotice
              favorite={favorite}
              onClose={handleModal}
              id={cardId}
            />
          )}
        </TitleWrapper>
        {isModalOpenDel && (
          <ModalConfirmDelete
            closeModal={handleModalDel}
            name={title}
            handleDelete={handleDelete}
          />
        )}
        {isModalOpenUserLogin && (
          <ModalUserLogin closeModal={handleModalUserLogin} />
        )}
      </Item>
    </>
  );
};

export default NoticesCategoryItem;
