import React, { useEffect, useState } from 'react';

import Modal from '../../../pages/ModalApproveAction';

import HeartIcon from '../../../images/icons/HeartIcon.svg';
import ImagePet from '../../../images/PetImage.jpg';

import {
  AddToButton,
  BottomBlock,
  ButtonsWrapper,
  CharacteristicItem,
  CommentsParagraph,
  ContactButton,
  Container,
  ImageCaption,
  ImageWrapper,
  PetDetailsWrapper,
  PetImage,
  PetMainWrapper,
  PetTitle,
  StyledHeartIcon,
  PetCharacteristicsList,
  PetCharacteristicsProperty,
  PetCharacteristicsValue,
  PetCharacteristicsValueLink,
} from './NoticeModal.styled';

const petСharacteristics = [
  'Name',
  'Biirthday',
  'Type',
  'Place',
  'The sex',
  'Email',
  'Phone',
];

const PetModal = ({ closeModal }) => {
  const [petData, setPetData] = useState({
    name: 'Rich',
    birthday: '21.09.2020',
    type: 'Pomeranian',
    place: 'Lviv',
    theSex: 'male',
    email: 'user@mail.com',
    phone: '+380971234567',
  });
  // const petDetailsList = Object.values(petDetails);
  const [petDetailsList, setPetDetailsList] = useState([]);

  useEffect(() => {
    setPetDetailsList(Object.values(petData));
  }, [petData]);

  const fetchPetData = async () => {
    ///
  };

  const onClickAddTo = async () => {
    ///
  };

  const onClickContact = async () => {
    ///
  };

  return (
    <Modal closeModal={() => closeModal()}>
      <Container>
        <PetMainWrapper>
          <ImageWrapper>
            <PetImage src={ImagePet} alt="Pet Image" />
            <ImageCaption>In good hands</ImageCaption>
          </ImageWrapper>
          <PetDetailsWrapper>
            <PetTitle>Сute dog looking for a home</PetTitle>
            <PetCharacteristicsList>
              {petСharacteristics.map((characteristic, index) => (
                <CharacteristicItem key={index}>
                  <PetCharacteristicsProperty>
                    {characteristic}:
                  </PetCharacteristicsProperty>
                  {characteristic !== 'Email' && characteristic !== 'Phone' ? (
                    <PetCharacteristicsValue>
                      {petDetailsList[index]}
                    </PetCharacteristicsValue>
                  ) : (
                    <PetCharacteristicsValueLink
                      href={
                        characteristic === 'Email'
                          ? `mailto:${petDetailsList[index]}`
                          : `tel:${petDetailsList[index]}`
                      }
                    >
                      {petDetailsList[index]}
                    </PetCharacteristicsValueLink>
                  )}
                </CharacteristicItem>
              ))}
            </PetCharacteristicsList>
          </PetDetailsWrapper>
        </PetMainWrapper>
        <BottomBlock>
          <CommentsParagraph>
            <PetCharacteristicsProperty>Comments:</PetCharacteristicsProperty>{' '}
            Rich would be the perfect addition to an active family that loves to
            play and go on walks. I bet he would love having a doggy playmate
            too!
          </CommentsParagraph>
          <ButtonsWrapper>
            <AddToButton onClick={onClickAddTo}>
              <span>Add to </span>{' '}
              <StyledHeartIcon src={HeartIcon} alt="Heart" />
            </AddToButton>
            <ContactButton onClick={onClickContact}>Contact</ContactButton>
          </ButtonsWrapper>
        </BottomBlock>
      </Container>
    </Modal>
  );
};

export default PetModal;
