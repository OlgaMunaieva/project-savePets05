import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as UserIcons } from 'images/icons/user-icon.svg';
import colors from 'settings/variables';

export const Text = styled.span`
  margin-left: 12px;
  color: ${colors.colors.accentHeaderButton};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.04em;
`;
export const UserLinK = styled(Link)`
  display: flex;
  align-items: center;
  background-color: transparent;
  transition: all 0.25s ease-in-out;
  &:hover,
  &:focus {
    transform: scale(1.03);
  }
  @media screen and (max-width: 1279px) {
    margin-right: 38px;
  }
  @media screen and (max-width: 766px) {
    margin-right: 32px;
  }
`;
export const UserIcon = styled(UserIcons)``;
