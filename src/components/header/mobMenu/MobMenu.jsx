import { useState } from 'react';
import {
  BtnWrapper,
  LinkTo,
  LinksLogoutTab,
  List,
  ListItem,
  LogOutIcon,
  MobMenus,
  Wrap,
} from './MobMenu.styled';
import { ReactComponent as Burger } from '../../../images/icons/menu-hamburger.svg';
import { ReactComponent as BurgerCross } from '../../../images/icons/cross-small.svg';
import LogoComponent from '../logo/Logo';
// import { LinksLogout } from '../navigation/userNav/UserNav.styled';

const MobMenu = () => {
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
          <LogoComponent />
          <LinksLogoutTab>
            Log out
            <LogOutIcon />
          </LinksLogoutTab>
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
