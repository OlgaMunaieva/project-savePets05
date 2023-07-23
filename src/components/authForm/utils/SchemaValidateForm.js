import * as Yup from 'yup';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,16}$/;

export const getValidationSchema = isRegisterForm => {
  return Yup.object().shape({
    name: isRegisterForm
      ? Yup.string().trim().required('Required')
      : Yup.string().trim(),

    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .test(
        'password',
        'Password must contain minimum 6 characters, maximum 16, at least 1 uppercase letter, 1 lowercase letter and 1 digit with no symbols.',
        value => {
          return passwordRegex.test(value);
        }
      )
      .required('Required'),
    confirmPassword: isRegisterForm
      ? Yup.string()
          .oneOf([Yup.ref('password'), null], 'Password must match')
          .required('Required')
      : Yup.string(),
  });
};
