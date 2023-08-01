import styled from 'styled-components';
import colors from 'settings/variables';
import variables from 'settings/variables';
// import { NavLink } from 'react-router-dom';

export const FixedButtonWrapper = styled.div`
  position: fixed;
  top: 520px; /* Зафиксировать относительно вертикального центра экрана */
  left: 70%; /* Зафиксировать сдвиг вправо относительно центра экрана (70vw - это 70% ширины экрана) */
  transform: translateY(
    -70%
  ); /* Центрирование вертикально относительно элемента */
  z-index: 5; /* При необходимости установите нужный z-index */
`;

export const Button = styled.button`
  display: flex;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 0;

  min-width: 129px;
  height: 40px;
  border: none;
  background-color: ${colors.colors.buttonsHoverBg};
  color: ${colors.colors.secondaryText};
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.04em;
  transition: all 0.25s ease-in-out;
  &:hover,
  &:focus {
    background-color: ${colors.colors.buttonsGr};
    box-shadow: ${colors.shadow.shadowHover};
  }
`;

export const Icon = styled.svg`
  stroke: ${variables.colors.background};
  min-width: 24px;
  transition: stroke 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);
  ${Button}:hover & {
    stroke: ${variables.colors.secondaryText};
  }
`;

export const ButtonCircle = styled(Button)`
  flex-direction: column-reverse;
  gap: 4px;
  min-width: 80px;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: 0em;
  text-align: center;
`;
