import styled from 'styled-components';
import variables from 'settings/variables';
import { Form, Field } from 'formik';

export const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 20;

  background-color: transparent;

  ${variables.breakPoints.tablet} {
    position: static;
  }
`;
export const BtnToOpen = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props['data-isopen']
      ? `${variables.colors.buttonsHoverBg}`
      : `${variables.colors.cardsButtonBg}`};
  color: transparent;
  stroke: ${props =>
    props['data-isopen']
      ? `${variables.colors.secondaryText}`
      : `${variables.colors.buttonsHoverBg}`};

  transition: ${variables.transition.transitionColor},
    background-color 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);

  &:hover,
  &:focus {
    border: none;
    background-color: transparent;

    &::before {
      opacity: 1;
    }
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: ${variables.colors.buttonsGr};
    opacity: 0;
    transition: opacity 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);
  }

  ${variables.breakPoints.tablet} {
    position: relative;
    padding: 9px;
    width: 152px;
    border: 2px solid ${variables.colors.buttonsHoverBg};
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background-color: ${props =>
      props['data-isopen']
        ? `${variables.colors.buttonsHoverBg}`
        : 'transparent'};
  }
`;

export const BtnOpenTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 4%;
  display: none;
  color: ${props =>
    props['data-isopen']
      ? `${variables.colors.secondaryText}`
      : `${variables.colors.buttonsHoverBg}`};
  ${BtnToOpen}:hover &, 
  ${BtnToOpen}:focus & {
    color: ${variables.colors.secondaryText};
  }
  ${variables.breakPoints.tablet} {
    display: block;
  }
`;

export const DropdownWrapper = styled.div`
  margin-top: 52px;
  padding: 8px;
  width: 152px;
  border-radius: 20px;
  z-index: 100;
  background-color: ${variables.colors.cardBgColor};
  box-shadow: ${variables.shadow.shadowDefault};
  ${variables.breakPoints.tablet} {
    margin-top: 20px;
    position: absolute;
  }
`;

export const BtnOpenLabel = styled.span`
  font-size: 16px;
  font-weight: bold;
  display: none;
`;

export const Text = styled.p`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 16px;
  color: ${variables.colors.buttonsHoverBg};
`;

export const SubMenu = styled.div`
  position: relative;
  width: 136px;
  margin-bottom: 8px;
  padding: 14px;
  padding-top: ${props =>
    props['data-ageopen'] || props['data-genderopen'] ? '38px' : '28px'};
  border-radius: 20px;
  color: ${variables.colors.buttonsHoverBg};
  background-color: ${variables.colors.cardsButtonBg};
`;

export const BtnFilter = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 42px;
  padding: 6px 8px;
  border-radius: 20px;
  border: none;
  display: flex;
  align-items: center;
  outline: none;
  gap: 10px;
  font-weight: 400;
  font-size: 14px;
  color: transparent;
  stroke: ${variables.colors.buttonsHoverBg};
  background-color: ${variables.colors.cardsButtonBg};
  transition: background-color 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12),
    color 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);
  &:hover {
    outline: none;
    background-color: ${variables.colors.buttonsHoverBg};
    stroke: ${variables.colors.cardBgColor};
  }
`;

export const BtnLabel = styled.span`
  font-family: 'Inter';
  color: ${variables.colors.buttonsHoverBg};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  transition: color 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);
  ${BtnFilter}:hover & {
    color: ${variables.colors.secondaryText};
  }
`;

export const Icon = styled.svg`
  z-index: 2;
  fill: currentColor;

  min-width: 24px;

  transition: transform 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12),
    stroke 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);

  ${BtnFilter}:hover &, ${BtnToOpen}:hover & {
    stroke: ${variables.colors.secondaryText};
  }
`;

export const Forma = styled(Form)`
  margin-top: 8px;
  //   padding-left: 18px;

  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Input = styled(Field)`
  width: 16px;
  height: 16px;
  margin: 0;

  display: grid;
  place-content: center;
  cursor: pointer;
  line-height: 0;

  border-radius: 4px;
  border: 2px solid ${variables.colors.buttonsHoverBg};
  transition: border-color 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12),
    transform 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);

  appearance: none;

  &::before {
    content: '';
    width: 0.85em;
    height: 0.85em;
    transform: scale(0);
    box-shadow: inset 1em 1em 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);
  }

  &:checked {
    &::before {
      transform: scale(1);
    }

    &:hover,
    &:focus {
      transform: scale(1.2);
      box-shadow: inset 1em 1em 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);
    }
  }
`;

export const Label = styled.label`
  position: relative;
  padding: 4px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 8px;
  font-family: 'Inter';
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  transition: background-color 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12),
    color 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);

  color: ${variables.colors.buttonsHoverBg};

  &:hover,
  &:focus {
    background-color: ${variables.colors.buttonsHoverBg};
    color: ${variables.colors.cardBgColor};
  }

  &:focus ${Input}, &:hover ${Input} {
    border-color: ${variables.colors.cardBgColor};
  }
`;

export const IconCheck = styled.svg`
  position: absolute;
  left: 0;
  top: 3px;
  z-index: 2;
  fill: currentColor;
  color: transparent;
  stroke: ${variables.colors.buttonsHoverBg};
  min-width: 24px;

  transition: transform 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12),
    stroke 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);

  ${Label}:hover &, ${Label}:hover & {
    stroke: ${variables.colors.secondaryText};
  }
`;

