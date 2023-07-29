import { toast } from 'react-hot-toast';
import icons from '../../../images/icons/icons-card.svg';
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
import { putFavorite } from 'redux/notices/operations';

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
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch(cardId);

  const favoriteClickHandle = () => {
    if (!isLoggedIn) {
      toast.error('You need to sign in');
    }
    dispatch(putFavorite(cardId));
    console.log(favorite);
  };

  const getAge = age => {
    const year = Math.floor(age / 12);
    if (age < 12) {
      return `${age} month`;
    }
    return Math.floor(age) === 12 ? `1 year` : `${Math.floor(year)} years`;
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
                <Icon width={24} height={24}>
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
              <DescriptionItemText>{getAge(age)}</DescriptionItemText>
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
          <BtnLearn>
            Learn More
            <BtnLearnIcon width={24} height={24}>
              <use href={icons + '#pawprint'}></use>
            </BtnLearnIcon>
          </BtnLearn>
        </TitleWrapper>
      </Item>
    </>
  );
};

export default NoticesCategoryItem;
