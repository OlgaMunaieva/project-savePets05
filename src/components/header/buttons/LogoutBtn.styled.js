import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as LogoutIcon } from 'images/icons/logout.svg';
import colors from 'settings/variables';
export const LinksLogout = styled(Link)`
@media screen and (max-width: 1279px) {
     display: none;
   }
  display: flex;
  align-items: center;
  padding: 8px 20px 8px 20px;
  border-radius: 40px;
  border: none;
  background-color: ${colors.colors.buttonsHoverBg};
  width: 100%;
  color:  ${colors.colors.secondaryText};
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.04em;
  transition: all 0.25s ease-in-out;
  &:hover,
  &:focus {
    background-color: ${colors.colors.buttonsGr};
    box-shadow: ${colors.shadow.shadowHover};
 
`;

export const LogOutIcon = styled(LogoutIcon)`
  margin-left: 8px;
`;
