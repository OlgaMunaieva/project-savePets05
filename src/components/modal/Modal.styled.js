import styled from 'styled-components';

export const ModalWindow = styled.div`
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(97, 97, 97, 0.6);
  backdrop-filter: blur(4px);
`;

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
  width: fit-content;
  padding: 30px;
  background-color: white;
  border-radius: 40px;
`;
