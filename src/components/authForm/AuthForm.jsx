import { useState } from 'react';
import { Formik } from 'formik';
import { getValidationSchema } from './utils/SchemaValidateForm';
import { useNavigate } from 'react-router-dom';

import {
  StyledInputsContainer,
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledIconClear,
  InputContainer,
  StyledIconCheck,
  StyledError,
  StyledIconEye,
  StyledButton,
  StyledTitle,
  StyledText,
  StyledLink,
  StyledRow,
  StyledIconEyeOpen,
} from './AuthForm.styled';

const clearInputValue = (setFieldValue, fieldName) => {
  setFieldValue(fieldName, '');
};

function AuthForm({ formType, onSubmit, showNameField, showConfirmPassword }) {
  const [showFields, setShowFields] = useState({
    password: false,
    confirmPassword: false,
  });

  const navigate = useNavigate();

  const handleToggleField = fieldName => {
    setShowFields(prevState => ({
      ...prevState,
      [fieldName]: !prevState[fieldName],
    }));
  };

  const isRegisterForm = formType === 'register';
  const validationSchema = getValidationSchema(isRegisterForm);

  const handleFormSubmit = values => {
    onSubmit({
      name: values.name.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
    });
  };

  return (
    <StyledContainer data-isregisterform={isRegisterForm}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          touched,
          errors,
          setFieldValue,
        }) => (
          <StyledForm onSubmit={handleSubmit} autoComplete="off">
            <StyledRow onClick={() => navigate(-1)} />
            <StyledTitle>
              {isRegisterForm ? 'Registration' : 'Login'}
            </StyledTitle>
            <StyledInputsContainer>
              {showNameField && isRegisterForm && (
                <>
                  <InputContainer>
                    <StyledInput
                      className={`input ${
                        touched.name
                          ? errors.name
                            ? 'error'
                            : 'success'
                          : 'initial'
                      }`}
                      touched={touched.name?.toString()}
                      type="name"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      placeholder="Name"
                    />
                    {touched.name && errors.name ? (
                      <StyledIconClear
                        onClick={() => clearInputValue(setFieldValue, 'name')}
                      />
                    ) : (
                      <StyledIconCheck />
                    )}
                    <StyledError component="label" name="name" />
                  </InputContainer>
                </>
              )}
              <InputContainer>
                <StyledInput
                  className={`input ${
                    touched.email
                      ? errors.email
                        ? 'error'
                        : 'success'
                      : 'initial'
                  }`}
                  touched={touched.email?.toString()}
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Email"
                />
                {touched.email && errors.email ? (
                  <StyledIconClear
                    onClick={() => clearInputValue(setFieldValue, 'email')}
                  />
                ) : (
                  <StyledIconCheck />
                )}
                <StyledError component="label" name="email" />
              </InputContainer>
              <InputContainer>
                <StyledInput
                  className={`input ${
                    touched.password
                      ? errors.password
                        ? 'error'
                        : 'success'
                      : 'initial'
                  }`}
                  touched={touched.password?.toString()}
                  type={showFields.password ? 'text' : 'password'}
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Password"
                />
                {touched.password && !errors.password && <StyledIconCheck />}
                {touched.password && errors.password && (
                  <StyledIconClear
                    onClick={() => clearInputValue(setFieldValue, 'password')}
                  />
                )}
                {showFields.password ? (
                  <StyledIconEyeOpen
                    onClick={() => handleToggleField('password')}
                  />
                ) : (
                  <StyledIconEye
                    data-showfields={showFields.password}
                    errors={errors.password}
                    onClick={() => handleToggleField('password')}
                  />
                )}
                <StyledError component="label" name="password" />
              </InputContainer>
              {showConfirmPassword && isRegisterForm && (
                <>
                  <InputContainer>
                    <StyledInput
                      className={`input ${
                        touched.confirmPassword
                          ? errors.confirmPassword
                            ? 'error'
                            : 'success'
                          : 'initial'
                      }`}
                      touched={touched.confirmPassword?.toString()}
                      type={showFields.confirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                      placeholder="Confirm password"
                    />
                    {touched.confirmPassword && errors.confirmPassword && (
                      <StyledIconClear
                        onClick={() =>
                          clearInputValue(setFieldValue, 'confirmPassword')
                        }
                      />
                    )}
                    {touched.confirmPassword && !errors.confirmPassword && (
                      <StyledIconCheck />
                    )}
                    {showFields.confirmPassword ? (
                      <StyledIconEyeOpen
                        onClick={() => handleToggleField('confirmPassword')}
                      />
                    ) : (
                      <StyledIconEye
                        data-showfields={showFields.confirmPassword}
                        errors={errors.confirmPassword}
                        onClick={() => handleToggleField('confirmPassword')}
                      />
                    )}
                    <StyledError component="label" name="confirmPassword" />
                  </InputContainer>
                </>
              )}
            </StyledInputsContainer>
            <StyledButton type="submit">
              {isRegisterForm ? 'Registration' : 'Login'}
            </StyledButton>
            <StyledText>
              {isRegisterForm
                ? 'Already have an account? '
                : "Don't have an account yet? "}
              <StyledLink to={isRegisterForm ? '/login' : '/register'}>
                {isRegisterForm ? 'Login' : 'Register'}
              </StyledLink>
            </StyledText>
          </StyledForm>
        )}
      </Formik>
    </StyledContainer>
  );
}

export default AuthForm;
