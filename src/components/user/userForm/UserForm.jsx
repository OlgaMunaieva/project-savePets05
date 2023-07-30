// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Formik } from 'formik';
import { getValidationSchema } from './utils/SchemaValidateUserForm';
import { useState, useRef } from 'react';

import Button from '../Button/Button';
import variables from 'settings/variables';
import spriteImage from '../../../images/sprite.svg';
import UserDefaultAvatar from '../../../images/icons/user-default-avatar.svg';

import {
  ButtonEditPhoto,
  ButtonUpload,
  ButtonCancelUpload,
  InputContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
  UserAvatar,
  ContainerButtonsUpload,
  StyledErrorMessage,
  ErrorMessageContainer,
} from './UserForm.styled';

// const yearNow = new Date().getFullYear();
// console.log(yearNow);

export default function UserForm({ userInfo, isFormDisabled }) {
  const imgRef = useRef(null);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [isAvatarUpdated, setIsAvatarUpdated] = useState(false);

  const { name, email, birthday, phone, city, avatarURL } = userInfo;
  // console.log('🚀 ~ birthday:', birthday);

  const isBirthdayValid = value => {
    if (value === 'Invalid date') {
      value = null;
      return value;
    }
    return value;
  };

  // console.log('🚀 ~ birthday:', isBirthdayValid(birthday));
  // console.log('🚀 ~ userInfo:', userInfo);
  // console.log('🚀 ~ isFormDisabled :', isFormDisabled);

  // console.log('🚀 ~ disabled :', isFormDisabled);
  // console.log('🚀 ~ isAvatarUpdated:', isAvatarUpdated);

  const validationSchema = getValidationSchema();

  const initialValues = {
    name: name ?? '',
    email: email ?? '',
    // birthday: isBirthdayValid(birthday) ?? '',
    phone: phone ?? '',
    city: city ?? '',
    file: '',
  };

  // console.log('initialValues', initialValues);

  // const closeModal = () => {
  //   setIsFormDisabled(true);
  // };

  const handleAvatarPreview = event => {
    setSelectedAvatar(event.target.files[0]);
    setImgUrl(URL.createObjectURL(event.target.files[0]));
    setIsAvatarUpdated(true);
  };

  const handleAvatarPick = event => {
    imgRef.current.click();
  };

  const handleAvatarUpload = async () => {
    // zagruzka na server
    if (!selectedAvatar) {
      alert('Please select a file!');
      return;
    }
    const formData = new FormData();
    formData.append('file', selectedAvatar);
    // 'file' nazvanie na backend
    // const response = await fetch(hostUrl, { method:'POST', body:formData});
    // const data = await response.json();
    for (const entry of formData.entries()) {
      console.log(entry);
    }
    setIsAvatarUpdated(false);
  };

  const cancelAvatarUpload = () => {
    setImgUrl('');
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('values', values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm autoComplete="off">
        <p>{avatarURL}</p>

        <UserAvatar
          src={!imgUrl ? UserDefaultAvatar : imgUrl}
          width="182"
          height="182"
          alt="User avatar"
          // onClick={handleAvatarPick}
          loading="lazy"
        />

        {isFormDisabled ? (
          <div style={{ height: '54px' }}></div>
        ) : !isAvatarUpdated ? (
          <ButtonEditPhoto type="button" onClick={handleAvatarPick}>
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <use href={spriteImage + '#icon-camera'} />
            </svg>
            Edit photo
          </ButtonEditPhoto>
        ) : (
          <ContainerButtonsUpload>
            <ButtonUpload type="button" onClick={handleAvatarUpload}>
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <use href={spriteImage + '#icon-check'} />
              </svg>
            </ButtonUpload>
            <p>Confirm</p>
            <ButtonCancelUpload type="button" onClick={cancelAvatarUpload}>
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <use href={spriteImage + '#icon-x'} />
              </svg>
            </ButtonCancelUpload>
          </ContainerButtonsUpload>
        )}

        <input
          style={variables.visualHidden}
          id="file"
          name="file"
          type="file"
          ref={imgRef}
          accept="image/jpeg, image/jpg, image/png"
          onChange={handleAvatarPreview}
        />
        <InputContainer>
          <StyledLabel htmlFor="name">Name:</StyledLabel>
          <ErrorMessageContainer>
            <StyledInput name="name" type="text" disabled={isFormDisabled} />
            <StyledErrorMessage component="div" name="name" />
          </ErrorMessageContainer>
        </InputContainer>

        <InputContainer>
          <StyledLabel htmlFor="email">Email:</StyledLabel>
          <ErrorMessageContainer>
            <StyledInput name="email" type="email" disabled={isFormDisabled} />
            <StyledErrorMessage component="div" name="email" />
          </ErrorMessageContainer>
        </InputContainer>

        {!isFormDisabled && !isBirthdayValid(birthday) && (
          <InputContainer>
            <StyledLabel htmlFor="birthday">Birthday:</StyledLabel>
            <ErrorMessageContainer>
              <StyledInput
                name="birthday"
                type="text"
                disabled={isFormDisabled}
                placeholder="00-00-0000"
              />
              <StyledErrorMessage component="div" name="birthday" />
            </ErrorMessageContainer>
          </InputContainer>
        )}

        {!isFormDisabled && !phone && (
          <InputContainer>
            <StyledLabel htmlFor="phone">Phone:</StyledLabel>
            <ErrorMessageContainer>
              <StyledInput
                name="phone"
                type="tel"
                disabled={isFormDisabled}
                placeholder="+380000000000"
              />
              <StyledErrorMessage component="div" name="phone" />
            </ErrorMessageContainer>
          </InputContainer>
        )}

        {!isFormDisabled && !city && (
          <InputContainer>
            <StyledLabel htmlFor="city">City:</StyledLabel>
            <ErrorMessageContainer>
              <StyledInput
                name="city"
                type="text"
                disabled={isFormDisabled}
                placeholder="City"
              />
              <StyledErrorMessage component="p" name="city" />
            </ErrorMessageContainer>
          </InputContainer>
        )}

        <Button
          style={{
            marginLeft: 'auto',
            width: '255px',
          }}
          type="submit"
          $content="Save"
          $darkType
        />
      </StyledForm>
    </Formik>
  );
}
