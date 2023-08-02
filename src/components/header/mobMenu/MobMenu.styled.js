import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from 'settings/variables';
import { ReactComponent as LogoutIcon } from 'images/icons/logout.svg';
import { ReactComponent as UserIcon } from 'images/icons/user-icon.svg';
import variables from 'settings/variables';

export const MobMenus = styled.div`
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fdf7f2;
`;

export const BtnWrapper = styled.div`
  position: absolute;
  @media screen and (max-width: 766px) {
    top: 4px;
    right: 0;
  }
  cursor: pointer;
  z-index: 51;
  top: 9px;
  right: 0;
  transition: all 0.25s ease-in-out;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const LinksLogoutTab = styled(Link)`

position: absolute;
@media screen and (min-width: 767px) {
top:2px;
right:80px;


}
z-index: 21;
display:inline-flex;
align-items: center;
padding: 8px 20px 8px 20px;
border-radius: 40px;
border: none;
background-color: ${colors.colors.buttonsHoverBg};
color:  ${colors.colors.secondaryText};
font-size: 16px;
font-weight: 700;
line-height: 22px;
letter-spacing: 0.04em;
transition: all 0.25s ease-in-out;
@media screen and (max-width: 766px) {
  position: absolute;
bottom: 40px;
left: 0;
}
  &:hover,
  &:focus {
    background-color: ${colors.colors.buttonsGr};
    box-shadow: ${colors.shadow.shadowHover};
  
`;

export const LogOutIcon = styled(LogoutIcon)`
  margin-left: 8px;
`;

export const Wrap = styled.div`
  @media screen and (max-width: 766px) {
    margin-top: 20px;
  }
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 92px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  height: 100vh;
`;
export const ListItem = styled.li`
  display: block;
  text-align: center;
`;
export const LinkTo = styled(NavLink)`
  @media screen and (max-width: 766px) {
    line-height: 43px;
    line-height: 43px;
  }
  font-weight: 500;
  font-size: 32px;

  letter-spacing: 0.04em;
  color: ${variables.colors.simpleWhite};
  transition: all 0.25s ease-in-out;
  @media screen and (min-width: 767px) {
    font-size: 48px;
    line-height: 65px;
  }
  &:hover,
  &:focus,
  &:active {
    color: ${variables.colors.accentHeaderButton};
  }
`;

export const MobileUser = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.colors.accentHeaderButton};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.04em;
  padding: 8px 16px;
  margin-top: 25px;
  margin-bottom: 67px;
`;
export const Icon = styled(UserIcon)`
  margin-right: 12px;
`;

export const DivLogin = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`;
