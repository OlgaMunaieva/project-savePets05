// import styled from 'styled-components';

// export const ModalWindow = styled.div`
//   /* position: fixed; */
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background-color: rgba(97, 97, 97, 0.6);
//   backdrop-filter: blur(4px);
// `;

// export const ExitButton = styled.button`
//   position: absolute;
//   top: 23px;
//   right: 26px;
//   width: 24px;
//   height: 24px;
//   border: none;
//   padding: 0;
//   background-color: transparent;
//   cursor: pointer;
// `;

// export const ModalContent = styled.div`
//   position: absolute;
//   box-sizing: border-box;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   max-width: 680px;
//   min-height: 350px;
//   min-width: 280px;
//   max-height: 540px;
//   width: fit-content;
//   padding: 30px;
//   background-color: white;
//   border-radius: 40px;
// `;

import styled from 'styled-components';
import variables from '../../settings/variables';

const {
  shadow: { shadowHover },
  transition: { transitionShadow },
} = variables;

// ModalWindow styles remain unchanged for mobile and tablet

export const ModalWindow = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(97, 97, 97, 0.6);
  /* backdrop-filter: blur(4px); */
  z-index: 52;

  //!---------------------------
  display: flex;
  justify-content: center;
  align-items: center;

  /* Запрещаем прокрутку фона */
  overflow: hidden;
  //!-----------------------------------
`;

// Update ExitButton styles for mobile and tablet
export const ExitButton = styled.button`
  position: absolute;
  top: 23px;
  right: 26px;
  width: 24px;
  height: 24px;
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  z-index: 100;
  transition: ${transitionShadow};
  &:hover,
  &:focus {
    box-shadow: ${shadowHover};
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    /* Adjust styles for tablet */
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    /* Adjust styles for mobile */
    top: 5px;
    right: 5px;
    width: 16px;
    height: 16px;
  }
`;

// Update ModalContent styles for mobile and tablet
export const ModalContent = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 680px;
  min-height: 350px;
  min-width: 280px;
  max-height: 540px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  width: fit-content;
  padding: 30px;
  background-color: white;
  border-radius: 40px;

  @media (max-width: 768px) {
    /* Adjust styles for tablet */
    max-width: 500px;
    padding: 20px;
    border-radius: 30px;
  }

  @media (max-width: 480px) {
    /* Adjust styles for mobile */
    max-width: 300px;
    padding: 15px;
    border-radius: 20px;
  }
`;
