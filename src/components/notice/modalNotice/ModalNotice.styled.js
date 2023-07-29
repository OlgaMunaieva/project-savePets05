import variables from 'settings/variables';
import { styled } from 'styled-components';

export const ExitButton = styled.button`
  position: absolute;
  border: none;
  /* padding: 0; */
  background-color: transparent;
  top: 12px;
  right: 12px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  z-index: 100;
  transition: ${variables.transition.transitionShadow};
  &:hover,
  &:focus {
    box-shadow: ${variables.shadow.shadowHover};
    border-radius: 50%;
  }

  ${variables.breakPoints.tablet} {
    top: 23px;
    right: 26px;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 280px;
  min-height: 786px;
  width: fit-content;
  padding: 100px;
  background-color: white;
  border-radius: 20px;
  ${variables.breakPoints.tablet} {
    min-width: 681px;
    min-height: 540px;
  }
`;
