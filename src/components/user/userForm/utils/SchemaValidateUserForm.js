import * as yup from 'yup';

const phoneRegExp = /^\+380\d{9}$/;

const birthdayRegExp =
  /^(0[1-9]|1\d|2\d|3[01])-(0[1-9]|1[0-2])-(19[0-9]\d|20[0-6]\d)$/;
const nameRegExp = /^[\p{Lu}]{1}[\p{Ll}'`]{1,16}$/u;
const cityRegExp = /^[\p{Lu}]{1}[\p{Ll}'`]{1,31}$/u;

export const getValidationSchema = () => {
  return yup.object().shape({
    name: yup
      .string()
      .min(2, 'Name must be at least 2 characters')
      .max(16, 'Name must be at most 16 characters')
      .matches(
        nameRegExp,
        'Field Name must contain only unicode letter and begin with a capital letter.'
      )
      .required('Name is a required field'),
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
};
