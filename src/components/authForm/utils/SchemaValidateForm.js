import * as Yup from 'yup';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,16}$/;

const schema = Yup.object({
  name: Yup.string()
    .test('name', 'Please, enter a name', value => {
      return value ? value.trim() : false;
    })
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .test('email', 'Invalid email address', value => {
      return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
    })

    .required('Required'),
  password: Yup.string()
    .test(
      'password',
      'Password must contain minimum 6 characters, maximum 16, at least 1 uppercase letter, 1 lowercase letter and 1 digit with no symbols.',
      value => {
        return passwordRegex.test(value);
      }
    )
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must match')
    .required('Required'),
});

export default schema;
