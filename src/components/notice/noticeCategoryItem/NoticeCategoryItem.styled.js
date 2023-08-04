import styled from 'styled-components';
import variables from 'settings/variables';

export const Item = styled.li`
  list-style: none;
  min-width: 280px;
  width: 100%;
  padding-bottom: 24px;
  user-select: none;
  background-color: ${variables.colors.cardBgColor};
  box-shadow: ${variables.shadow.shadowDefault};
  border-radius: 0px 0px 40px 40px;

  ${variables.breakPoints.tablet} {
    width: 336px;
  }
  ${variables.breakPoints.desktop} {
    width: 288px;
  }
  transition: transform 150ms cubic-bezier(0.21, 0.65, 0.66, 0.12);

  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`;

export const ImgWrapper = styled.div`
  height: 288px;
  width: 100%;
  margin-bottom: 20px;
  position: relative;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
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

export const BtnFavorite = styled.button`
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  margin: 0;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  line-height: 0;
  align-items: center;
  background-color: ${variables.colors.cardsButtonBg};
  color: transparent;
  transition: ${variables.transition.transitionColor};

  &:hover {
    color: ${variables.colors.buttonsHoverBg};
  }
`;

export const BtnRemoveMyPet = styled.button`
  margin-top: 16px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50px;
  color: transparent;
  cursor: pointer;
  background-color: ${variables.colors.cardsButtonBg};
  background-color 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);

  &:hover {
    background-color: ${variables.colors.buttonsHoverBg};
  }
`;

export const Description = styled.ul`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 12px;
  right: 8px;
  left: 8px;
  list-style: none;
`;

export const DescriptionItem = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 3px;
  align-items: center;
  width: 84px;
  padding: 2px;
  border-radius: 16px;
  color: transparent;
  user-select: none;
  background-color: ${variables.colors.cardsButtonBg};
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
    z-index: 1;
    transition: opacity 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  &:hover,
  &:focus {
    background-color: ${variables.colors.buttonsHoverBg};
  }
`;

export const Icon = styled.svg`
  z-index: 2;
  fill: currentColor;
  stroke: ${variables.colors.buttonsHoverBg};
  min-width: 24px;

  transition: stroke 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);

  ${DescriptionItem}:hover &,
   ${BtnRemoveMyPet}:hover & {
    stroke: ${variables.colors.secondaryText};
  }
`;

export const DescriptionItemText = styled.span`
  z-index: 2;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: ${variables.colors.simpleWhite};
  transition: ${variables.transition.transitionColor};

  ${DescriptionItem}:hover & {
    color: ${variables.colors.secondaryText};
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 20px;
  padding-left: 20px;
  height: 120px;
`;

export const Title = styled.p`
  word-wrap: break-word;
  width: 231px;
  max-height: 66px;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BtnLearnIcon = styled.svg`
  width: 0;
  height: 0;
  position: absolute;

  opacity: 0;
  pointer-events: none;
  fill: currentColor;

  // transition: opacity #fff;
`;

export const BtnLearn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 248px;
  height: 38px;
  padding: 6px 28px;
  margin: 0 auto;
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
`;
