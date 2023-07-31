import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import spriteImage from '../../../images/sprite.svg';

import { ModalWindow } from '../../modal/Modal.styled';

import CrossIcon from '../../../images/icons/CrossIcon.svg';
import {
  Data,
  DataWrapper,
  ExitButton,
  Img,
  ImgWrapper,
  InformationWrapper,
  ModalContent,
  TitleWrapper,
  Title,
  DescriptionWrapper,
  Details,
  ContactBtn,
  FavoriteBtn,
  MainDataWrapper,
  Wrapper,
  ButtonsWrapper,
} from './ModalNotice.styled';
import {
  Icon,
  Status,
  StatusText,
} from '../noticeCategoryItem/NoticeCategoryItem.styled';

const BaseUrlImg = 'https://res.cloudinary.com/dfvviqdic/image/upload/';

const modalRoot = document.body;

const ModalNotice = ({ onClose, isOpenedModal, data, children }) => {
  const { photoUrl, category, title, sex, location, cardId } = data;
  console.log(cardId);

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
        <MainDataWrapper>
          <Wrapper>
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
                  <Details></Details>
                </DataWrapper>
                <DataWrapper>
                  <Data>Birthday:</Data>
                  <Details></Details>
                </DataWrapper>
                <DataWrapper>
                  <Data>Type:</Data>
                  <Details></Details>
                </DataWrapper>
                <DataWrapper>
                  <Data>Place:</Data>
                  <Details>{location}</Details>
                </DataWrapper>
                <DataWrapper>
                  <Data>The sex:</Data>
                  <Details>{sex}</Details>
                </DataWrapper>
                <DataWrapper>
                  <Data>Email:</Data>
                  <Details></Details>
                </DataWrapper>
                <DataWrapper>
                  <Data>Phone:</Data>
                  <Details></Details>
                </DataWrapper>
              </InformationWrapper>
            </TitleWrapper>
          </Wrapper>
          <DescriptionWrapper>
            <span>Comments:</span>
          </DescriptionWrapper>
        </MainDataWrapper>
        <ButtonsWrapper>
          <ContactBtn>Contact</ContactBtn>
          <FavoriteBtn type="button">
            <span>Add to</span>
            <Icon width={24} height={24}>
              <use href={spriteImage + '#icon-heart'}></use>
            </Icon>
          </FavoriteBtn>
        </ButtonsWrapper>
      </ModalContent>
    </ModalWindow>,
    modalRoot
  );
};

export default ModalNotice;
