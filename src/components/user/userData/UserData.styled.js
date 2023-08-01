import styled from 'styled-components';
import variables from '../../../settings/variables';

const {
  colors: { cardBgColor },
  shadow: { shadowDefault, shadowHover },
  transition: { transitionShadow },
} = variables;

export const StyledFormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-right: 24px;
  padding-bottom: 20px;
  padding-left: 16px;
  width: 280px;
  height: 517px;
  border-radius: 40px;
  background-color: ${cardBgColor};
  box-shadow: ${shadowDefault};
   ${variables.breakPoints.tablet} {

  }
  ${variables.breakPoints.desktop} {
    width: 395px;
  }
`;

export const ButtonEditUserInfo = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
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
