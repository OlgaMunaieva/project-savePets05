import styled from 'styled-components';

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

  @media (max-width: 768px) {
    right: 12px;
    top: 12px;
  }
`;

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
    padding: 44px 20px 20px;
    border-radius: 20px;
  }
`;
