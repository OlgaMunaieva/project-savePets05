import styled from 'styled-components';
import variables from '../../../settings/variables';

const {
  colors: { cardBgColor, buttonsHoverBg, secondaryText, buttonsGr },
  transition: { transitionColor },
} = variables;

export const StyledButton = styled.button`
  display: inline-block;
  padding-top: 9px;
  padding-bottom: 9px;
  width: 129px;
  border-radius: 40px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.04em;
  color: ${props => {
    return props.$darkType ? secondaryText : buttonsHoverBg;
  }};
  background-color: ${props => {
    return props.$darkType ? buttonsHoverBg : cardBgColor;
  }};
  border: ${props => {
    return props.$darkType ? 'none' : `2px solid ${buttonsHoverBg}`;
  }};
  cursor: pointer;
  transition: ${transitionColor};
  &:hover,
  &:focus {
    background-image: ${buttonsGr};
    color: ${secondaryText};
    place-content: center;
  }
`;
