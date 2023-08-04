import { Formik } from 'formik';
import { getValidationSchema } from './utils/SchemaValidateUserForm';

import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/user/selectors';
import { addUserAvatar, addUserInformation } from 'redux/user/operations';
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
  UserAvatarThumb,
  StyledErrorImg,
  UserInfoContainer,
  AvatarContainer,
  StyledInputMask,
} from './UserForm.styled';

export default function UserForm({ isFormDisabled, closeModal }) {
  const user = useSelector(selectUser);

  const {
    userInfo: { name, email, birthday, phone, city },
    avatar: avatarURL,
  } = user;

  const imgRef = useRef(null);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [imgUrl, setImgUrl] = useState(avatarURL);
  const [isAvatarUpdated, setIsAvatarUpdated] = useState(false);
  const [errorImg, setErrorImg] = useState('');
  const [isAvatarSelected, setIsAvatarSelected] = useState(false);

  const dispatch = useDispatch();

  const isBirthdayValid = value => {
    if (value === 'Invalid date') {
      value = null;
      return value;
    }
    return value;
  };

  const validationSchema = getValidationSchema();

  const initialValues = {
    name: name ?? '',
    email: email ?? '',
    birthday: isBirthdayValid(birthday) ?? '',
    phone: phone ?? '',
    city: city ?? '',
    file: '',
  };

  const handleAvatarPick = event => {
    imgRef.current.click();
  };

  const handleAvatarPreview = event => {
    setErrorImg('');
    setSelectedAvatar(event.target.files[0]);
    setImgUrl(URL.createObjectURL(event.target.files[0]));
    setIsAvatarUpdated(true);
  };

  const handleAvatarUpload = () => {
    console.log('selected', selectedAvatar);
    if (!selectedAvatar) {
      alert('Please select a file!');
      return;
    }
    if (selectedAvatar?.size > 3145728) {
      setErrorImg('Image is too big please select image below 3 MB');
      return;
    }
    setIsAvatarSelected(true);

    setIsAvatarUpdated(false);
  };

  const cancelAvatarUpload = () => {
    setImgUrl('');

    setIsAvatarUpdated(false);
  };

  const handleSubmit = (values, { resetForm }) => {
    if (!isAvatarSelected) {
      setErrorImg('Please select an avatar');
      return;
    } else {
      dispatch(addUserAvatar(selectedAvatar));
    }

    const { name, email, birthday, phone, city } = values;

    dispatch(addUserInformation({ name, email, birthday, phone, city }));
    setSelectedAvatar(false);

    closeModal();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm autoComplete="off">
        <AvatarContainer>
          <UserAvatarThumb>
            <UserAvatar
              src={!imgUrl ? UserDefaultAvatar : imgUrl}
              width="182"
              height="182"
              alt="User avatar"
              loading="lazy"
            />
          </UserAvatarThumb>

          {errorImg && <StyledErrorImg> {errorImg}</StyledErrorImg>}

          {isFormDisabled ? (
            <div
              style={{
                height: '0px',
              }}
            ></div>
          ) : !isAvatarUpdated ? (
            <ButtonEditPhoto type="button" onClick={handleAvatarPick}>
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
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
        </AvatarContainer>

        <UserInfoContainer>
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
              <StyledInput
                name="email"
                type="email"
                disabled={isFormDisabled}
              />
              <StyledErrorMessage component="div" name="email" />
            </ErrorMessageContainer>
          </InputContainer>

          {!isBirthdayValid(birthday) && isFormDisabled ? null : (
            <StyledInput name="birthday">
              {({ field }) => (
                <InputContainer>
                  <StyledLabel htmlFor="birthday">Birthday:</StyledLabel>
                  <ErrorMessageContainer>
                    <StyledInputMask
                      {...field}
                      mask="99-99-9999" // Маска для формата "дд-мм-гггг"
                      maskplaceholder="11-11-1970" // Заполнитель для маски
                      type="text"
                      disabled={isFormDisabled}
                    />
                    <StyledErrorMessage component="div" name="birthday" />
                  </ErrorMessageContainer>
                </InputContainer>
              )}
            </StyledInput>
          )}

          {!phone && isFormDisabled ? null : (
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

          {!city && isFormDisabled ? null : (
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
          {!isFormDisabled && (
            <Button
              style={{
                marginLeft: 'auto',
                marginButton: '10px',
                width: '255px',
              }}
              type="submit"
              $content="Save"
              $darkType
            />
          )}
        </UserInfoContainer>
      </StyledForm>
    </Formik>
  );
}
