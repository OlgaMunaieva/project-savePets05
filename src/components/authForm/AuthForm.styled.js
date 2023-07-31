import styled, { css, keyframes } from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { IoClose } from 'react-icons/io5';
import { BsCheckLg } from 'react-icons/bs';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import variables from 'settings/variables';

const {
  colors: {
    simpleBlack,
    buttonsHoverBg,
    placeHolderColor,
    accentInputInvalidValue,
    cardBgColor,
    accentAddPetCard,
    accentHeaderButton,
  },
} = variables;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const StyledContainer = styled.div`
  position: relative;
  z-index: 10;
  padding: 40px 0;

  @media (min-width: 479px) {
    padding-top: 80px;

    ${props =>
      props['data-isregisterform']
        ? `padding-bottom: 140px`
        : `padding-bottom: 290px`}
  }
`;

export const StyledRow = styled(AiOutlineArrowLeft)`
  position: absolute;
  left: 20px;
  top: 40px;
  width: 26px;
  height: 26px;
  color: ${accentHeaderButton};
  animation: ${pulseAnimation} 1.5s infinite;

  &:hover {
    width: 40px;
  }

  @media (min-width: 1279px) {
    display: none;
  }
`;

export const StyledForm = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 280px;
  margin: 0 auto;
  padding: 40px 12px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  box-sizing: border-box;
  background-color: ${cardBgColor};

  @media (min-width: 479px) {
    max-width: 610px;
    padding: 60px 75px;
    border-radius: 40px;
  }
`;

export const StyledTitle = styled.h1`
  color: ${simpleBlack};
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;

  @media (min-width: 479px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

export const StyledInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-bottom: 40px;

  @media (min-width: 479px) {
    gap: 32px;
    margin-bottom: 50px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const StyledInput = styled(Field)`
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  width: 250px;
  padding: 12px 16px;
  border-radius: 40px;
  border: 1px solid ${buttonsHoverBg};
  color: ${placeHolderColor};
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.5s ease;

  @media (min-width: 479px) {
    width: 380px;
  }
  @media (min-width: 569px) {
    width: 460px;
  }
  &:focus {
    outline: transparent;
    border-color: ${buttonsHoverBg};
  }

  &:hover {
    transform: scale(1.1);
  }

  &::placeholder {
    color: ${placeHolderColor};
    line-height: 1.5;
  }

  ${props =>
    props.touched &&
    css`
      &.error {
        border: 1px solid ${accentInputInvalidValue};
      }
      &.success {
        border: 1px solid ${accentAddPetCard};
      }

      &.initial {
        border-color: 1px solid ${buttonsHoverBg};
      }
    `}
`;

export const StyledIconClear = styled(IoClose)`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 16px;
  top: 12px;
  color: ${accentInputInvalidValue};
  cursor: pointer;
  margin-right: 30px;

  transform: scale(1);
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }

  ${StyledInput}.initial + & {
    display: none;
  }
`;

export const StyledIconCheck = styled(BsCheckLg)`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 16px;
  top: 12px;
  color: ${accentAddPetCard};
  margin-right: 30px;

  ${StyledInput}.initial + & {
    display: none;
  }
`;

export const StyledError = styled(ErrorMessage)`
  color: ${accentInputInvalidValue};
  max-width: 430px;
  margin-left: 16px;
  font-size: 12px;
  display: block;
  margin-top: 5px;
`;

export const StyledIconEye = styled(AiOutlineEyeInvisible)`
  position: absolute;
  right: 16px;
  top: 12px;
  width: 24px;
  height: 24px;
  cursor: pointer;

  transform: scale(1);
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }

  color: ${placeHolderColor};
`;

export const StyledIconEyeOpen = styled(AiOutlineEye)`
  position: absolute;
  right: 16px;
  top: 12px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: ${buttonsHoverBg};

  transform: scale(1);
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledButton = styled.button`
  font-family: 'Manrope', sans-serif;
  max-width: 250px;
  font-size: 20px;
  font-weight: 600;
  padding: 10px 28px;
  text-align: center;
  border-radius: 40px;
  background-color: ${buttonsHoverBg};
  border: transparent;
  color: ${cardBgColor};
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.5s ease;

  @media (min-width: 479px) {
    max-width: 460px;
    margin-bottom: 16px;
  }

  &:hover {
    background-color: ${accentHeaderButton};
    box-shadow: 5px 10px 20px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledText = styled.p`
  font-size: 12px;
  text-align: center;
  color: ${placeHolderColor};
`;

export const StyledLink = styled(Link)`
  color: ${buttonsHoverBg};
  text-decoration: underline;
`;
