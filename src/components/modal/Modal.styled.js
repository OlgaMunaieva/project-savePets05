import styled from 'styled-components';
import variables from '../../settings/variables';
import { VscChromeClose } from 'react-icons/vsc';

const {
  colors: { cardBgColor, buttonsHoverBg, accentHeaderButton },
} = variables;

export const ModalWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(97, 97, 97, 0.6);
  z-index: 52;
`;

// Update ExitButton styles for mobile and tablet
export const ExitButton = styled(VscChromeClose)`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  z-index: 100;
  transform: scale(1);
  color: ${buttonsHoverBg};

  transition: all 0.5s ease;

  &:hover,
  &:focus {
    transform: scale(1.2);
    background-color: ${accentHeaderButton};
    box-shadow: 5px 10px 20px 0px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    color: ${cardBgColor};
  }
`;

// Update ModalContent styles for mobile and tablet
export const ModalContent = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 280px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  /* width: fit-content; */
  background-color: white;
  border-radius: 20px;
`;
