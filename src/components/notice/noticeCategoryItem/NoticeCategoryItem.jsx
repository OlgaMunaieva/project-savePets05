import { toast } from 'react-hot-toast';
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
  putFavorite,
} from 'redux/notices/operations';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import ModalNotice from '../modalNotice/ModalNotice';
// import { ModalConfirmDelete } from '../ModalDelMyPet/ModalDelMyPet';
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
      toast.error('You need to sign in');
    }
    dispatch(putFavorite(cardId));

    if (categoryParam === 'favorite' && favorite) {
      debouncedFetchFavorite();
    }
  };

  const handleDelete = () => {
    // const debouncedfetchMyPets = debounce(() => {
    //   dispatch(fetchMyPets());
    // }, 150);

    if (!isLoggedIn) {
      toast.error('You need to sign in');
    }
    console.log('item', cardId);
    dispatch(delMyPetsById(cardId));

    if (categoryParam === 'own') {
      // debouncedfetchMyPets();
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
                    favorite ? `${variables.colors.buttonsHoverBg}` : 'current'
                  }
                >
                  <use href={icons + '#heart'}></use>
                </Icon>
              </BtnFavorite>
              {owner && categoryParam === 'own' ? (
                <BtnRemoveMyPet onClick={handleOpenModal}>
                  <Icon width={24} height={24}>
                    <use href={icons + '#trash'}></use>
                  </Icon>
                </BtnRemoveMyPet>
              ) : null}
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
          <BtnLearn onClick={handleOpenModal}>
            Learn More
            <BtnLearnIcon width={24} height={24}>
              <use href={icons + '#pawprint'}></use>
            </BtnLearnIcon>
          </BtnLearn>
          {isModalOpen && (
            <ModalNotice
              onClose={handleCloseModal}
              data={{ photoUrl, category, title, sex, cardId }}
            />
            // <ModalConfirmDelete
            //   closeModal={handleCloseModal}
            //   name={title}
            //   handleDelete={handleDelete}
            // />
          )}
        </TitleWrapper>
      </Item>
    </>
  );
};

export default NoticesCategoryItem;
