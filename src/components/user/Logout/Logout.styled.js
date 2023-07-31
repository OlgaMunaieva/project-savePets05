import styled from 'styled-components';
import variables from '../../../settings/variables';

const {
  colors: { placeHolderColor },
  shadow: { shadowHover },
  transition: { transitionShadow },
} = variables;

export const StyledButton = styled.button`
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.38;
  letter-spacing: 0.04em;
  color: ${placeHolderColor};

  background-color: inherit;
  border: none;
  cursor: pointer;
  transition: ${transitionShadow};

  &:hover,
  &:focus {
    box-shadow: ${shadowHover};
    border-radius: 40px;
  }
`;
