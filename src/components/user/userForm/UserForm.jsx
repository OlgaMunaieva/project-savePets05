// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Formik, ErrorMessage } from 'formik';
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
  ButtonClose,
  ButtonEditUserInfo,
  InputContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
  UserAvatar,
  ContainerButtonsUpload,
} from './UserForm.styled';

// const yearNow = new Date().getFullYear();
// console.log(yearNow);

export default function UserForm({ userInfo }) {
  const imgRef = useRef(null);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [isAvatarUpdated, setIsAvatarUpdated] = useState(false);

  const [isFormDisabled, setIsFormDisabled] = useState(true);

  const { name, email, birthday, phone, city, avatarURL } = userInfo;
  // console.log('🚀 ~ userInfo:', userInfo.name);
  // console.log('🚀 ~ disabled :', isFormDisabled);
  // console.log('🚀 ~ isAvatarUpdated:', isAvatarUpdated);

  const validationSchema = getValidationSchema();

  const initialValues = {
    name: name ?? '',
    email: email ?? '',
    birthday: birthday ?? '',
    phone: phone ?? '',
    city: city ?? '',
    file: '',
  };

  // console.log('initialValues', initialValues);

  const handleFormDisabled = () => {
    setIsFormDisabled(false);
  };

  const closeModal = () => {
    setIsFormDisabled(true);
  };

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
        {isFormDisabled ? (
          <ButtonEditUserInfo type="button" onClick={handleFormDisabled}>
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <use href={spriteImage + '#icon-edit-2'} />
            </svg>
          </ButtonEditUserInfo>
        ) : (
          <ButtonClose type="button" onClick={closeModal}>
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <use href={spriteImage + '#icon-cross-small'} />
            </svg>
          </ButtonClose>
        )}
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
          <StyledInput name="name" type="text" disabled={isFormDisabled} />
          <ErrorMessage component="div" name="name" />
        </InputContainer>
        <InputContainer>
          s<StyledLabel htmlFor="email">Email:</StyledLabel>
          <StyledInput name="email" type="email" disabled={isFormDisabled} />
          <ErrorMessage component="div" name="email" />
        </InputContainer>
        <InputContainer>
          <StyledLabel htmlFor="birthday">Birthday:</StyledLabel>
          <StyledInput
            name="birthday"
            type="text"
            disabled={isFormDisabled}
            placeholder="00-00-0000"
          />
          {/* <Field name="birthday" type="date" /> */}
          <ErrorMessage component="div" name="birthday" />
        </InputContainer>
        <InputContainer>
          <StyledLabel htmlFor="phone">Phone:</StyledLabel>
          <StyledInput
            name="phone"
            type="tel"
            disabled={isFormDisabled}
            placeholder="+380000000000"
          />
          <ErrorMessage component="div" name="phone" />
        </InputContainer>
        <InputContainer>
          <StyledLabel htmlFor="city">City:</StyledLabel>
          <StyledInput name="city" type="text" disabled={isFormDisabled} />
          <ErrorMessage component="div" name="city" />
        </InputContainer>
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
