// import { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import PropTypes from 'prop-types';

// import { number } from 'yup';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/authSelectors';
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

const NoticesCategoryItem = ({ category, gender, birthday, city, title }) => {
  // const isLogin = useSelector(selectIsLoggedIn);

  // const favoriteClickHandle = () => {
  //   if (!isLogin) {
  //     alert('You need to sign in');
  //   }
  //   dispatch(
  //     favoriteNotice({
  //       id: _id,
  //     })
  //   );
  // };

  const getAge = date => {
    const dateArr = date.split('.');
    const birthdayDate = `${dateArr[2]}.${dateArr[1]}.${dateArr[0]}`;
    const age =
      (new Date().getTime() - new Date(birthdayDate)) /
      (24 * 3600 * 1000 * 365.25);
    if (age < 1) {
      return `${Math.floor((age * 365.25) / 30)} month`;
    }
    return Math.floor(age) === 1 ? `1 year` : `${Math.floor(age)} years`;
  };

  return (
    <>
      <Item>
        <ImgWrapper>
          <Img
            src="https://ribalych.com/media/24019/conversions/40626-668.webp"
            alt="pet"
            loading="lazy"
          />
          <Status>
            <StatusText>{category}</StatusText>
            <div>
              <BtnFavorite>
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
              <DescriptionItemText>{city}</DescriptionItemText>
            </DescriptionItem>
            <DescriptionItem>
              <Icon width={24} height={24}>
                <use href={icons + '#clock'}></use>
              </Icon>
              <DescriptionItemText>{getAge(birthday)}</DescriptionItemText>
            </DescriptionItem>
            <DescriptionItem>
              {gender === 'male' ? (
                <Icon width={24} height={24}>
                  <use href={icons + '#male'} width={24} height={24}></use>
                </Icon>
              ) : (
                <Icon width={24} height={24}>
                  <use href={icons + '#female'} width={24} height={24}></use>
                </Icon>
              )}
              <DescriptionItemText>{gender}</DescriptionItemText>
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
