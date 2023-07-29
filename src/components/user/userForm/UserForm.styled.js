// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Form, Field } from 'formik';
import styled from 'styled-components';
import variables from '../../../settings/variables';

const {
  colors: { cardBgColor, buttonsHoverBg, simpleWhite },
  shadow: { shadowDefault, shadowHover },
  transition: { transitionShadow },
} = variables;

export const StyledForm = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  /* position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-right: 24px;
  padding-bottom: 20px;
  padding-left: 16px;
  width: 395px;
  border-radius: 40px;
  background-color: ${cardBgColor};
  box-shadow: ${shadowDefault}; */
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
`;

export const StyledInput = styled(Field)`
  padding: 4px 12px;
  width: 255px;
  border: 1px solid ${buttonsHoverBg};
  border-radius: 20px;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: ${simpleWhite};
  &:disabled {
    background-color: inherit;
  }
`;

export const StyledLabel = styled.label`
  font-family: inherit;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: ${simpleWhite};
`;
export const UserAvatar = styled.img`
  margin: 0 auto 9px auto;
  max-height: 182px;
  object-fit: cover;
`;

export const ButtonEditPhoto = styled.button`
  margin: 0 auto 20px auto;
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: inherit;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.04em;
  color: ${simpleWhite};
  background-color: inherit;
  border: none;
  cursor: pointer;
  transition: ${transitionShadow};
  &:hover,
  &:focus {
    box-shadow: ${shadowHover};
    border-radius: 5px;
  }
`;

export const ButtonUpload = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: inherit;
  border: none;
  cursor: pointer;
  transition: ${transitionShadow};
  &:hover,
  &:focus {
    box-shadow: ${shadowHover};
    border-radius: 50%;
  }
`;

export const ButtonCancelUpload = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: inherit;
  border: none;
  cursor: pointer;
  transition: ${transitionShadow};
  &:hover,
  &:focus {
    box-shadow: ${shadowHover};
    border-radius: 50%;
  }
`;

export const ContainerButtonsUpload = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-bottom: 20px;
  gap: 8px;
  font-family: inherit;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.04em;
  color: ${simpleWhite};
`;
