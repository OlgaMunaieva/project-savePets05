// import { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import PropTypes from 'prop-types';

// import { number } from 'yup';
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
  const today = new Date();
  const birthdays = new Date(birthday);
  const todayD =
    (today.getFullYear() * 12 + today.getMonth()) * 31 + today.getDate() - 1;
  const birthdayD =
    (birthdays.getFullYear() * 12 + birthdays.getMonth()) * 31 +
    birthdays.getDate() -
    1;
  const age = Math.ceil((todayD - birthdayD) / 31 / 12);

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
              <DescriptionItemText>{age} year</DescriptionItemText>
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
