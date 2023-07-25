// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import {
  InputContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './UserForm.styled';

import Button from '../Button/Button';

// const yearNow = new Date().getFullYear();

const phoneRegExp = /^\+380\d{9}$/;

const birthdayRegExp =
  /^(0[1-9]|1\d|2\d|3[01])-(0[1-9]|1[0-2])-(19[0-9]\d|20[0-6]\d)$/;
const nameRegExp = /^[\p{Lu}]{1}[\p{Ll}'`]{1,16}$/u;
const cityRegExp = /^[\p{Lu}]{1}[\p{Ll}'`]{1,31}$/u;

export default function UserForm() {
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

  const initialValues = {
    name: '',
    email: '',
    birthday: '',
    phone: '',
    city: '',
    file: '',
  };

  // console.log(yearNow);

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
        <input
          id="file"
          name="file"
          type="file"
          accept="image/jpeg, image/jpg, image/png"
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
          <StyledLabel style={{ color: 'red' }} htmlFor="birthday">
            Birthday:
          </StyledLabel>
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
            color: 'green',
          }}
          type="submit"
          content="Save"
          $darkType
        ></Button>
      </StyledForm>
    </Formik>
  );
}
