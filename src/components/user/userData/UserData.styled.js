import styled from 'styled-components';
import variables from '../../../settings/variables';

const {
  colors: { cardsButtonBg, buttonsHoverBg, simpleWhite },
  shadow: { shadowHover },
} = variables;

export const StyledFormContainer = styled.div``;

export const ButtonEditUserInfo = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 6px;
  right: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: inherit;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);
  &:hover,
  &:focus {
    box-shadow: ${shadowHover};
    background-color: ${cardsButtonBg};
  }
  ${variables.breakPoints.tablet} {
    top: 10px;
    right: 10px;
  }
  ${variables.breakPoints.desktop} {
  }
`;

export const StyledUserDataForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 59px;

  ${variables.breakPoints.tablet} {
    flex-direction: row-reverse;
    gap: 71px;
  }
  ${variables.breakPoints.desktop} {
    flex-direction: column;
    gap: 63px;
  }
`;

export const StyledUserDataInput = styled.div`
  padding: 6px 12px;
  width: 190px;
  border: 1px solid ${buttonsHoverBg};
  border-radius: 20px;
  font-family: inherit;
  font-size: 12px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: ${simpleWhite};
  &:disabled {
    background-color: inherit;
  }
  ${variables.breakPoints.tablet} {
    width: 255px;
    padding: 4px 12px;
    font-size: 16px;
  }
  ${variables.breakPoints.desktop} {
  }
`;

export const StyledUserDataLabel = styled.p`
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: ${simpleWhite};
  ${variables.breakPoints.tablet} {
    font-size: 18px;
  }
  ${variables.breakPoints.desktop} {
  }
`;

export const AvatarUserDataContainer = styled.div`
  position: relative;
`;

export const UserAvatarUserDataThumb = styled.div`
  border-radius: 40px;
  width: 182px;
  margin: 0 auto 9px auto;
  overflow: hidden;
`;

export const UserAvatarUserData = styled.img`
  height: 182px;
  width: 182px;
  object-fit: cover;
`;

export const ModalWrapper = styled.div`
  width: 280px;
  padding: 20px 8px 20px 8px;
  ${variables.breakPoints.tablet} {
    width: 704px;
    padding: 20px 76px 16px 20px;
  }
  ${variables.breakPoints.desktop} {
    width: 395px;
    padding: 20px 24px 20px 16px;
  }
`;
