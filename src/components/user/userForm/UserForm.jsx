// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Formik, ErrorMessage } from 'formik';
import { useState, useRef } from 'react';
import * as yup from 'yup';

import {
  ButtonEditPhoto,
  ButtonUpload,
  ButtonCancelUpload,
  ButtonClose,
  InputContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
  UserAvatar,
  ContainerButtonsUpload,
} from './UserForm.styled';

import Button from '../Button/Button';
import variables from 'settings/variables';
import spriteImage from '../../../images/sprite.svg';
import UserDefaultAvatar from '../../../images/icons/user-default-avatar.svg';

// redux
// import { useAuth } from 'hooks/useAuth';

// const yearNow = new Date().getFullYear();

const phoneRegExp = /^\+380\d{9}$/;

const birthdayRegExp =
  /^(0[1-9]|1\d|2\d|3[01])-(0[1-9]|1[0-2])-(19[0-9]\d|20[0-6]\d)$/;
const nameRegExp = /^[\p{Lu}]{1}[\p{Ll}'`]{1,16}$/u;
const cityRegExp = /^[\p{Lu}]{1}[\p{Ll}'`]{1,31}$/u;

export default function UserForm() {
  // const { user } = useAuth();
  const imgRef = useRef(null);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [isAvatarUpdated, setIsAvatarUpdated] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Name must be at least 2 characters')
      .max(16, 'Name must be at most 16 characters')
      .matches(
        nameRegExp,
        'Field Name must contain only unicode letter and begin with a capital letter.'
      ),
    email: yup.string().email().required('Email is a required field'),
    birthday: yup
      // .date()
      // .transform(currentValue => {
      //   // check to see if the previous transform already parsed the date
      //   // if (context.isType(value)) return value;

      //   const formats = 'DD-MM-YYYY';
      //   // // the default coercion failed so let's try it with Moment.js instead
      //   // value = moment(currentValue).format(formats);
      //   // console.log('value', value);
      //   console.log('org', currentValue);

      //   // if it's valid return the date object, otherwise return an `InvalidDate`
      //   // return value.isValid() ? value.toDate() : new Date('');
      // })

      // .typeError('please enter a valid date')
      // .max(new Date(), "Your birthday can't be in the future!")
      .string()
      .matches(
        birthdayRegExp,
        'Birthday has invalid date format. The format should be DD-MM-YYYY.'
      )
      .required('Birthday is a required field'),
    phone: yup
      .string()
      .matches(
        phoneRegExp,
        'Phone has invalid phone number format. The format should be +380XXXYYZZ.'
      ),
    city: yup
      .string()
      .min(2, 'City must be at least 2 characters')
      .max(32, 'City must be at most 32 characters')
      .matches(
        cityRegExp,
        'City must contain only unicode letter and begin with a capital letter.'
      ),
  });

  // const { name, email, birthday, phone, city, avatarURL } = user;
  // console.log('useeerkom', user);

  const initialValues = {
    name: '',
    email: '',
    birthday: '',
    phone: '',
    city: '',
    file: '',
  };

  // console.log(yearNow);
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

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

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
        {/* <p>{name}</p>
        <p>{email}</p>
        <p>{birthday}</p>
        <p>{phone}</p>
        <p>{city}</p>
        <p>{avatarURL}</p> */}

        {/* onClick={closeModal} */}

        <ButtonClose type="button">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <use href={spriteImage + '#icon-cross-small'} />
          </svg>
        </ButtonClose>

        <UserAvatar
          src={!imgUrl ? UserDefaultAvatar : imgUrl}
          width="182"
          height="182"
          alt="User avatar"
          // onClick={handleAvatarPick}
          loading="lazy"
        />

        {!isAvatarUpdated ? (
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
          <StyledInput name="name" type="text" />
          <ErrorMessage component="div" name="name" />
        </InputContainer>
        <InputContainer>
          <StyledLabel htmlFor="email">Email:</StyledLabel>
          <StyledInput name="email" type="email" />
          <ErrorMessage component="div" name="email" />
        </InputContainer>
        <InputContainer>
          <StyledLabel htmlFor="birthday">Birthday:</StyledLabel>
          <StyledInput name="birthday" type="text" placeholder="00-00-0000" />
          {/* <Field name="birthday" type="date" /> */}
          <ErrorMessage component="div" name="birthday" />
        </InputContainer>
        <InputContainer>
          <StyledLabel htmlFor="phone">Phone:</StyledLabel>
          <StyledInput name="phone" type="tel" placeholder="+380000000000" />
          <ErrorMessage component="div" name="phone" />
        </InputContainer>
        <InputContainer>
          <StyledLabel htmlFor="city">City:</StyledLabel>
          <StyledInput name="city" type="text" />
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
