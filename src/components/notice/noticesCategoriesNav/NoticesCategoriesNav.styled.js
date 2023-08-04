import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import variables from 'settings/variables';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const WrapperLinks = styled.div`
  display: flex;
`;

export const List = styled.ul`
  width: 205px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  ${variables.breakPoints.tablet} {
    width: 319px;
    gap: 12px;
  }
  ${variables.breakPoints.desktop} {
    width: 100%;
  }
`;

export const Item = styled.li`
  height: 35px;
  display: flex;
`;

export const Button = styled(NavLink)`
  position: relative;
  padding: 8px 16px;
  text-decoration: none;
  font-size: 14px;
  font-weight: medium;
  border: none;
  border-radius: 40px;
  color: ${variables.colors.buttonsHoverBg};
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
    z-index: -1;
    transition: opacity 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  &:hover,
  &:focus {
    color: ${variables.colors.secondaryText};
    background-color: transparent;
  }
`;
