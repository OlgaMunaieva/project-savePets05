import styled from 'styled-components';
import variables from '../../../settings/variables';

const {
  colors: { cardsButtonBg },
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

// export const ButtonClose = styled.button`
//   position: absolute;
//   top: 18px;
//   right: 18px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0;
//   background-color: inherit;
//   border: none;
//   cursor: pointer;
//   transition: ${transitionShadow};
//   &:hover,
//   &:focus {
//     box-shadow: ${shadowHover};
//     border-radius: 50%;
//   }
// `;
