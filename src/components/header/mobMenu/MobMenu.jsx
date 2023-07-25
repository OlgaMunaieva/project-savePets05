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
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { motion, AnimatePresence } from 'framer-motion';
import BodyScroll from './BodyScroll';

const MobMenu = ({ isLogin, size, userName }) => {
  const [isOpen, setOpen] = useState(true);

  const dispatch = useDispatch();

  return (
    <>
      <BtnWrapper>
        {isOpen ? (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0.5, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.5, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Burger
                onClick={() => {
                  setOpen(!isOpen);
                }}
              />
            </motion.div>
          </AnimatePresence>
        ) : (
          <BurgerCross
            onClick={() => {
              setOpen(!isOpen);
            }}
          />
        )}
      </BtnWrapper>
      <AnimatePresence>
        {!isOpen ? (
          <MobMenus>
            <BodyScroll />
            <motion.div
              initial={{ opacity: 0.5, x: -301 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -301 }}
              transition={{
                duration: 0.5,
              }}
            >
              <LogoComponent itsMobile={size} />
              <></>

              {size && !isLogin ? (
                <DivLogin>
                  <AuthBtn />
                </DivLogin>
              ) : null}
              {size && isLogin ? (
                <motion.div
                  initial={{ scale: 0.3, opacity: 0.5, y: -301 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                  }}
                >
                  <MobileUser>
                    <Icon />
                    {userName}
                  </MobileUser>
                </motion.div>
              ) : null}
              <Wrap>
                <List>
                  <ListItem>
                    <motion.div
                      initial={{ scaleY: 0, opacity: 0.5 }}
                      animate={{ scaleY: 1, opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.5,
                      }}
                    >
                      <LinkTo to="/news">News</LinkTo>
                    </motion.div>
                  </ListItem>
                  <ListItem>
                    <motion.div
                      initial={{ scaleY: 0, opacity: 0.5 }}
                      animate={{ scaleY: 1, opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.5,
                      }}
                    >
                      <LinkTo>Find pet</LinkTo>
                    </motion.div>
                  </ListItem>
                  <ListItem>
                    <motion.div
                      initial={{ scaleY: 0, opacity: 0.5 }}
                      animate={{ scaleY: 1, opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.5,
                      }}
                    >
                      <LinkTo>Our friends</LinkTo>
                    </motion.div>
                  </ListItem>
                </List>
              </Wrap>
            </motion.div>
          </MobMenus>
        ) : null}
      </AnimatePresence>
      {isLogin && !isOpen ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.1 }}
            transition={{
              duration: 0.3,
              delay: 0.7,
            }}
          >
            <LinksLogoutTab onClick={() => dispatch(logOut())}>
              Log out
              <LogOutIcon />
            </LinksLogoutTab>
          </motion.div>
        </AnimatePresence>
      ) : null}
    </>
  );
};

export default MobMenu;
