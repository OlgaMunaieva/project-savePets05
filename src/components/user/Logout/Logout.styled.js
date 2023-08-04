import styled from 'styled-components';
import variables from '../../../settings/variables';

const {
  colors: { placeHolderColor },
  shadow: { shadowHover },
} = variables;

export const StyledButton = styled.button`
  width: 129px;
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
  border-radius: 40px;
  background-color: inherit;
  border: none;
  cursor: pointer;

  transition: box-shadow 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);

  &:hover,
  &:focus {
    box-shadow: ${shadowHover};
  }
`;
