import { toast } from 'react-hot-toast';
import icons from '../../../images/icons/icons-card.svg';
import variables from 'settings/variables';
import {
  BtnFavorite,
  BtnLearn,
  BtnLearnIcon,
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
import { fetchFavorite, putFavorite } from 'redux/notices/operations';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ModalNotice from '../modalNotice/ModalNotice';
const BaseUrlImg = 'https://res.cloudinary.com/dfvviqdic/image/upload/';

const NoticesCategoryItem = ({
  id: cardId,
  category,
  sex,
  age,
  location,
  title,
  favorite,
  photoUrl,
}) => {
  const params = useParams();
  const categoryParam = params.categoryName;
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch(cardId);

  const favoriteClickHandle = () => {
    if (!isLoggedIn) {
      toast.error('You need to sign in');
    }
    dispatch(putFavorite(cardId));
    if (categoryParam === 'favorite' && favorite) {
      console.log(categoryParam);
      dispatch(fetchFavorite());
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // MODAL
  useEffect(() => {
    // При открытии модального окна
    if (isModalOpen) {
      // Сохраняем текущую позицию прокрутки
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed'; // Запрещаем прокрутку body
      document.body.style.top = -`${scrollY}px`; // Запоминаем текущую позицию
    } else {
      // При закрытии модального окна
      const scrollY = parseInt(document.body.style.top || '0', 10);
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, -scrollY); // Восстанавливаем прокрутку
    }
  }, [isModalOpen]);

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
          )}
        </TitleWrapper>
      </Item>
    </>
  );
};

export default NoticesCategoryItem;
