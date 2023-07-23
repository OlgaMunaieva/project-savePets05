import styled, { css } from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { IoClose } from 'react-icons/io5';
import { BsCheckLg } from 'react-icons/bs';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
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
  breakPoints: { mobile, tablet, desktop },
} = variables;

export const StyledContainer = styled.div`
  padding: 80px 0;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 610px;
  margin: 0 auto;
  padding: 60px 75px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
`;

export const StyledTitle = styled.h1`
  color: ${simpleBlack};
  text-align: center;
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 40px;
`;

export const StyledInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 50px;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const StyledInput = styled(Field)`
  font-family: 'Manrope', sans-serif;
  width: 260px;
  padding: 12px 16px;
  border-radius: 40px;
  border: 1px solid ${buttonsHoverBg};
  color: ${placeHolderColor};
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.5s ease;

  @media (min-width: 479px) {
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
  top: 8px;
  color: ${accentInputInvalidValue};
  cursor: pointer;

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
  top: 8px;
  color: ${accentAddPetCard};

  ${StyledInput}.initial + & {
    display: none;
  }
`;

export const StyledError = styled(ErrorMessage)`
  color: ${accentInputInvalidValue};

  margin-left: 16px;
  font-size: 12px;
  display: block;
  margin-top: 5px;
`;

export const StyledIconEye = styled(AiOutlineEyeInvisible)`
  position: absolute;
  right: 16px;
  top: 8px;
  width: 24px;
  height: 24px;
  cursor: pointer;

  transform: scale(1);
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }

  color: ${props =>
    props.showFields ? `${placeHolderColor}` : `${buttonsHoverBg}`};
  margin-right: ${props =>
    (props.touched && !props.errors) || (props.touched && props.errors)
      ? '30px'
      : '0'};
`;

export const StyledButton = styled.button`
  font-family: 'Manrope', sans-serif;
  max-width: 460px;
  font-size: 20px;
  font-weight: 600;
  padding: 10px 28px;
  text-align: center;
  border-radius: 40px;
  background-color: ${buttonsHoverBg};
  border: transparent;
  color: ${cardBgColor};
  margin-bottom: 16px;
  cursor: pointer;
  transition: all 0.5s ease;

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
