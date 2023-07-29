import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import spriteImage from '../../../images/sprite.svg';

import { ModalWindow } from '../../modal/Modal.styled';

import CrossIcon from '../../../images/icons/CrossIcon.svg';
import {
  Data,
  DataWrapper,
  Ditails,
  ExitButton,
  Img,
  ImgWrapper,
  InformationWrapper,
  ModalContent,
  TitleWrapper,
  Title,
} from './ModalNotice.styled';
import {
  BtnFavorite,
  BtnLearn,
  Icon,
  Status,
  StatusText,
} from '../noticeCategoryItem/NoticeCategoryItem.styled';

const BaseUrlImg = 'https://res.cloudinary.com/dfvviqdic/image/upload/';

const modalRoot = document.body;

const ModalNotice = ({ onClose, isOpenedModal, data, children }) => {
  const { photoUrl, category, title, sex } = data;

  const toggleModal = useCallback(
    e => {
      if (e.code !== 'Escape') return;
      onClose();
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', toggleModal);

    return () => {
      window.removeEventListener('keydown', toggleModal);
    };
  }, [isOpenedModal, toggleModal]);

  useEffect(() => {
    const handleKeyDown = e => toggleModal(e);

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  const onClickOverlay = e => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <ModalWindow onClick={onClickOverlay}>
      <ModalContent>
        <ExitButton onClick={() => onClose()}>
          <img src={CrossIcon} alt="Cross" width={24} height={24} />
        </ExitButton>
        <ImgWrapper>
          <Img src={BaseUrlImg + photoUrl} alt="pet" loading="lazy" />
          <Status>
            <StatusText>{category}</StatusText>
          </Status>
        </ImgWrapper>
        <TitleWrapper>
          <Title>{title}</Title>
          <InformationWrapper>
            <DataWrapper>
              <Data>Name:</Data>
              <Ditails></Ditails>
            </DataWrapper>
            <DataWrapper>
              <Data>Birthday:</Data>
              <Ditails></Ditails>
            </DataWrapper>
            <DataWrapper>
              <Data>Type:</Data>
              <Ditails></Ditails>
            </DataWrapper>
            <DataWrapper>
              <Data>Place:</Data>
              <Ditails></Ditails>
            </DataWrapper>
            <DataWrapper>
              <Data>The sex:</Data>
              <Ditails>{sex}</Ditails>
            </DataWrapper>
            <DataWrapper>
              <Data>Email:</Data>
              <Ditails></Ditails>
            </DataWrapper>
            <DataWrapper>
              <Data>Phone:</Data>
              <Ditails></Ditails>
            </DataWrapper>
          </InformationWrapper>
          <BtnLearn>Contact</BtnLearn>
          <div>
            <BtnFavorite type="button">
              <Icon width={24} height={24}>
                <use href={spriteImage + '#icon-heart'}></use>
              </Icon>
            </BtnFavorite>
          </div>
        </TitleWrapper>
      </ModalContent>
    </ModalWindow>,
    modalRoot
  );
};

export default ModalNotice;
