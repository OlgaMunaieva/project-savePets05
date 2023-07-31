import Nav from './nav/Nav';
import AuthNav from './authNav/AuthNav';
import UserNav from './userNav/UserNav';
import {
  BtnWrapper,
  CancelBtn,
  DelBtn,
  Div,
  ModalWraperr,
  TitleDelBtn,
  TitleModal,
} from './Navigation.styled';
import LogoComponent from '../logo/Logo';
import { useEffect, useState } from 'react';
import MobMenu from '../mobMenu/MobMenu';
import { useResize } from 'hooks/useResize';
import { selectIsLoggedIn, selectUserName } from 'redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'components/modal/Modal';
import { LogOutIcon } from '../buttons/LogoutBtn.styled';
import { logOut } from 'redux/auth/authOperations';

const Navigation = () => {
  const { name } = useSelector(selectUserName);
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLoggedIn);
  const [sizeDesk, setsizeDesk] = useState(false);
  const [sizeTab, setsizeTab] = useState(true);
  const [itsMobile, setitsMobile] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handlerOpenModal = () => {
    setOpenModal(!openModal);
  };
  const { width } = useResize();

  const resizeHandler = width => {
    if (width <= 766) {
      setitsMobile(true);
      setsizeTab(false);
      setsizeDesk(false);
    } else if (width < 1279) {
      setsizeTab(true);
      setitsMobile(false);
      setsizeDesk(false);
    } else if (width >= 1280) {
      setsizeDesk(true);
      setsizeTab(false);
      setitsMobile(false);
    }
  };

  useEffect(() => {
    resizeHandler(width);
  }, [width]);
  return (
    <Div>
      <LogoComponent itsMobile={itsMobile} />
      {sizeDesk ? <Nav /> : null}
      {!isLogin ? (
        <AuthNav size={itsMobile} />
      ) : (
        <UserNav
          modalOpen={handlerOpenModal}
          userName={name}
          size={itsMobile}
        />
      )}
      {!sizeTab && !itsMobile ? null : (
        <MobMenu
          closeModal={handlerOpenModal}
          userName={name}
          size={itsMobile}
          isLogin={isLogin}
        />
      )}
      {openModal && (
        <Modal closeModal={handlerOpenModal}>
          <ModalWraperr>
            <TitleModal>Already leaving?</TitleModal>

            <div>
              <BtnWrapper>
                <CancelBtn onClick={() => handlerOpenModal()}>
                  <span>Cancel</span>
                </CancelBtn>
                <DelBtn
                  onClick={() => {
                    dispatch(logOut());
                    handlerOpenModal();
                  }}
                >
                  <TitleDelBtn>Yes</TitleDelBtn>
                  <LogOutIcon />
                </DelBtn>
              </BtnWrapper>
            </div>
          </ModalWraperr>
        </Modal>
      )}
    </Div>
  );
};

export default Navigation;
