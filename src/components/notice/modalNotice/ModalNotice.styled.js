import variables from 'settings/variables';
import { styled } from 'styled-components';
// import { BtnLearn, BtnLearnIcon } from '../noticeCategoryItem/NoticeCategoryItem.styled';
import { BtnLearnIcon } from '../noticeCategoryItem/NoticeCategoryItem.styled';

export const ExitButton = styled.button`
  position: absolute;
  border: none;
  padding: 0;
  background-color: transparent;
  top: 12px;
  right: 12px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  z-index: 100;
  transition: ${variables.transition.transitionShadow};
  &:hover,
  &:focus {
    box-shadow: ${variables.shadow.shadowHover};
    border-radius: 50%;
  }

  ${variables.breakPoints.tablet} {
    top: 23px;
    right: 26px;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 280px;
  /* min-height: 786px; */
  padding-top: 44px;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 280px;
  background-color: white;
  border-radius: 20px;
  /* max-height: 90vh; */
  /* overflow-y: auto; */
  ${variables.breakPoints.tablet} {
    min-width: 681px;
    min-height: 540px;
    padding-top: 32px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const ImgWrapper = styled.div`
  margin: 0 auto;
  height: 240px;
  width: 240px;
  border-radius: 0px 0px 40px 40px;
  /* margin-bottom: 20px; */
  position: relative;
  ${variables.breakPoints.tablet} {
    margin: 0;
    width: 262px;
    height: 298px;
  }
`;

export const Img = styled.img`
  border-radius: 0px 0px 40px 40px;
  width: 240px;
  height: 240px;
  object-fit: cover;
  ${variables.breakPoints.tablet} {
    width: 262px;
    height: 298px;
  }
`;

export const Wrapper = styled.div`
  ${variables.breakPoints.tablet} {
    display: flex;
    gap: 24px;
    margin-bottom: 28px;
  }
`;

export const Status = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export const StatusText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 17px;
  width: 126px;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: ${variables.colors.simpleWhite};
  background-color: ${variables.colors.cardsButtonBg};
  border-radius: 0px 16px 16px 0px;
`;

export const MainDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 70vh;
  overflow-y: auto;
  margin-bottom: 5px;
  margin-top: 5px;
  /* padding-top: 12px; */
  ${variables.breakPoints.tablet} {
    flex-direction: column;
    margin-bottom: 70px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* padding-top: 12px; */
`;

export const Title = styled.p`
  word-wrap: break-word;
  width: 231px;
  margin-bottom: 20px;
  max-height: 66px;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const InformationWrapper = styled.div``;
export const DataWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 8px;
`;
export const Data = styled.div`
  width: 70px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: 0px;
`;
export const Details = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 0px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  text-align: left;
`;

export const DescriptionWrapper = styled.div`
  margin-top: 5px;
  margin-bottom: 12px;
  min-height: 30px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.35;
  letter-spacing: 0.04em;
  text-align: left;
`;

export const ButtonsWrapper = styled.div`
  ${variables.breakPoints.tablet} {
    display: flex;
    flex-direction: row-reverse;
    gap: 17px;
    justify-content: end;
  }
`;

export const ContactBtn = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 248px;
  height: 38px;
  padding: 6px 28px;
  margin: 0 auto;
  margin-bottom: 8px;
  border: 2px solid ${variables.colors.buttonsHoverBg};
  border-radius: 40px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  background: transparent;
  color: ${variables.colors.buttonsHoverBg};
  transition: ${variables.transition.transitionColor},
    background-color 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);

  &.active {
    color: ${variables.colors.secondaryText};
    background-color: ${variables.colors.buttonsHoverBg};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: ${variables.colors.buttonsGr};
    border-radius: 40px;
    opacity: 0;
    transition: opacity 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);
  }

  &:hover::before,
  &:focus::before {
    z-index: -1;
    opacity: 1;
  }

  &:hover,
  &:focus {
    background-color: ${variables.colors.buttonsHoverBg};
  }

  &:hover,
  &:focus {
    color: ${variables.colors.secondaryText};
    background: ${variables.colors.buttonsGr};
    border: none;

    & > ${BtnLearnIcon} {
      width: 24px;
      height: 24px;
      position: relative;
      opacity: 1;
      pointer-events: all;
    }
  }
  ${variables.breakPoints.tablet} {
    margin: 0;
    width: 129px;
    height: 40px;
  }
`;

export const FavoriteBtn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 248px;
  height: 38px;
  padding: 6px;
  margin: 0 auto;
  margin-bottom: 8px;
  border: none;
  border-radius: 40px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  background: transparent;
  background-color: ${variables.colors.buttonsHoverBg};
  color: ${variables.colors.secondaryText};
  stroke: ${variables.colors.secondaryText};

  transition: ${variables.transition.transitionColor},
    background-color 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: ${variables.colors.buttonsGr};
    border-radius: 40px;
    opacity: 0;
    transition: opacity 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);
  }

  &:hover::before {
    z-index: -1;
    opacity: 1;
  }

  &:hover {
    background-color: ${variables.colors.buttonsHoverBg};
  }

  &:hover {
    color: ${variables.colors.secondaryText};
    background: ${variables.colors.buttonsGr};
    border: none;

    & > ${BtnLearnIcon} {
      width: 24px;
      height: 24px;
      position: relative;
      opacity: 1;
      pointer-events: all;
    }
  }
  ${variables.breakPoints.tablet} {
    margin: 0;
    width: 129px;
    height: 40px;
  }
`;

export const Icon = styled.svg`
  z-index: 2;
  fill: currentColor;
  stroke: ${variables.colors.secondaryText};
  min-width: 24px;

  transition: stroke 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);

  }
`;

export const NoticeLink = styled.a`
  display: block;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0px;
  text-align: left;
  color: ${variables.colors.accentHeaderButton};

  ${variables.breakPoints.tablet} {
    font-size: 16px;
  }

  /* ${variables.breakPoints.desktop} {
    font-size: 16px;
  } */
`;
