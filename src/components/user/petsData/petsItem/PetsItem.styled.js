import styled from 'styled-components';
import variables from '../../../../settings/variables';

const {
  colors: { cardBgColor, cardsButtonBg },
  shadow: { shadowHover, shadowDefault },
} = variables;

export const PetsCard = styled.li`
  position: relative;
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 16px 20px 16px 20px;
  border-radius: 40px;
  background-color: ${cardBgColor};
  box-shadow: ${shadowDefault};
  ${variables.breakPoints.tablet} {
    padding: 20px;
    flex-direction: row;
  }
  ${variables.breakPoints.desktop} {
    gap: 32px;
  }
`;

export const PetsImg = styled.img`
  height: 240px;
  width: 240px;
  object-fit: cover;
  border-radius: 20px;
  ${variables.breakPoints.tablet} {
    height: 128px;
    width: 128px;
    flex-direction: row;
  }
  ${variables.breakPoints.desktop} {
    height: 161px;
    width: 161px;
    border-radius: 40px;
  }
`;

export const PetsInfoContainer = styled.div`
  max-width: 240px;
  ${variables.breakPoints.tablet} {
    max-width: 515px;
  }
  ${variables.breakPoints.desktop} {
    max-width: 580px;
  }
`;

export const PetsInfoTitle = styled.span`
  font-weight: 600;
`;

export const PetsInfoText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: 0.04em;
  word-wrap: break-word;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  ${variables.breakPoints.tablet} {
    word-wrap: break-word;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
  ${variables.breakPoints.desktop} {
    font-size: 16px;
    line-height: 1.4;
    word-wrap: break-word;
  }
`;

export const ButtonDeletePet = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 264px;
  right: 8px;
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
    top: 12px;
    right: 12px;
  }
  ${variables.breakPoints.desktop} {
  }
`;
