import { Formik } from 'formik';
import { getValidationSchema } from './utils/SchemaValidateUserForm';

import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addUserAvatar, addUserInformation } from 'redux/user/operations';
import Button from '../Button/Button';
import variables from 'settings/variables';
import spriteImage from '../../../images/sprite.svg';
import UserDefaultAvatar from '../../../images/icons/user-default-avatar.svg';
// import {
//   selectUser,
//   // selectIsLoading,
//   // selectError,
//   // getUserError,
// } from 'redux/user/selectors';
// import { fetchUserInformation } from 'redux/user/operations';

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
} from './UserForm.styled';

export default function UserForm({ user, isFormDisabled, closeModal }) {
  // const user = useSelector(selectUser);
  const {
    userInfo: { name, email, birthday, phone, city },
    avatar: avatarURL,
  } = user;
  const imgRef = useRef(null);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [imgUrl, setImgUrl] = useState(avatarURL);
  const [isAvatarUpdated, setIsAvatarUpdated] = useState(false);
  const [errorImg, setErrorImg] = useState('');

  // console.log('useeer', user.userInfo);
  // console.log('avatar', user.avatar);

  // console.log('🚀 ~ name:', name);
  // console.log('🚀 ~   avatarURL:', avatarURL);
  // console.log('🚀 ~ birthday:', birthday);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('fetchuseefffect');
  //   dispatch(fetchUserInformation());
  // }, [dispatch]);

  const isBirthdayValid = value => {
    if (value === 'Invalid date') {
      value = null;
      return value;
    }
    return value;
  };

  // useEffect(() => {
  //   console.log('effect');
  //   setNameForm(name);
  // }, [imgUrl, name, email, birthday, phone, city]);

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
    if (!selectedAvatar) {
      alert('Please select a file!');
      return;
    }

    if (selectedAvatar.size > 3145728) {
      setErrorImg('Image is too big please select image below 3 MB');
    } else {
      dispatch(addUserAvatar(selectedAvatar));
    }
    setIsAvatarUpdated(false);
  };

  const cancelAvatarUpload = () => {
    // setImgUrl(UserDefaultAvatar);
    setImgUrl('');

    // const file = new File([img_11], 'defaultImg', {
    //   type: 'image/jpeg',
    // });

    // dispatch(file);

    setIsAvatarUpdated(false);
  };

  const handleSubmit = (values, { resetForm }) => {
    const { name, email, birthday, phone, city } = values;
    dispatch(addUserInformation({ name, email, birthday, phone, city }));
    // updateProps();
    closeModal();

    // resetForm();
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
