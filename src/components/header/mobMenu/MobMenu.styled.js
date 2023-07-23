import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from 'settings/variables';
import { ReactComponent as LogoutIcon } from 'images/icons/logout.svg';
import variables from 'settings/variables';
export const MobMenus = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  padding: 24px 32px;
  background-color: #fdf7f2;
`;

export const BtnWrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: 33px;
  right: 32px;
  transition: all 0.25s ease-in-out;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const LinksLogoutTab = styled(Link)`
position: absolute;
top:25px;
right:80px;
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
  &:hover,
  &:focus {
    background-color: ${colors.colors.buttonsGr};
    box-shadow: ${colors.shadow.shadowHover};
`;

export const LogOutIcon = styled(LogoutIcon)`
  margin-left: 8px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 92px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 60px;
`;
export const ListItem = styled.li`
  text-align: center;
`;
export const LinkTo = styled(NavLink)`
  font-weight: 500;
  font-size: 48px;
  line-height: 27px;
  letter-spacing: 0.04em;
  color: ${variables.colors.simpleWhite};
  transition: ${variables.transition.transitionColor};
  &:hover,
  &:focus,
  &:active {
    color: ${variables.colors.accentHeaderButton};
  }
`;
