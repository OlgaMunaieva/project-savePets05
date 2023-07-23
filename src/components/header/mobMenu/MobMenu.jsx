import { useState } from 'react';
import {
  BtnWrapper,
  DivLogin,
  Icon,
  LinkTo,
  LinksLogoutTab,
  List,
  ListItem,
  LogOutIcon,
  MobMenus,
  MobileUser,
  Wrap,
} from './MobMenu.styled';
import { ReactComponent as Burger } from '../../../images/icons/menu-hamburger.svg';
import { ReactComponent as BurgerCross } from '../../../images/icons/cross-small.svg';
import LogoComponent from '../logo/Logo';
import AuthBtn from '../buttons/AuthBtn';

const MobMenu = ({ isLogin, size, userName }) => {
  const [isOpen, setOpen] = useState(true);

  return (
    <>
      <BtnWrapper>
        {isOpen ? (
          <Burger
            onClick={() => {
              setOpen(false);
            }}
          />
        ) : (
          <BurgerCross
            onClick={() => {
              setOpen(true);
            }}
          />
        )}
      </BtnWrapper>

      {!isOpen ? (
        <MobMenus>
          <LogoComponent itsMobile={size} />
          <></>
          {!isLogin ? (
            <LinksLogoutTab>
              Log out
              <LogOutIcon />
            </LinksLogoutTab>
          ) : null}

          {size && isLogin ? (
            <DivLogin>
              <AuthBtn />
            </DivLogin>
          ) : null}
          {size && !isLogin ? (
            <MobileUser>
              <Icon />
              {userName}
            </MobileUser>
          ) : null}
          <Wrap>
            <List>
              <ListItem>
                <LinkTo>News</LinkTo>
              </ListItem>
              <ListItem>
                <LinkTo>Find pet</LinkTo>
              </ListItem>
              <ListItem>
                <LinkTo>Our friends</LinkTo>
              </ListItem>
            </List>
          </Wrap>
        </MobMenus>
      ) : null}
    </>
  );
};

export default MobMenu;
