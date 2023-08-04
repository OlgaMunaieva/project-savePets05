import * as Yup from 'yup';

const yourPetSchema = Yup.object().shape({
  petName: Yup.string()
    .trim()
    .required('Required')
    .matches(
      /^[\p{Lu}]{1}[\p{Ll}'`\d]{1,15}$/u,
      'Only letters are allowed and first leter uppercase'
    )
    .min(
      2,
      `Pet's Name must be at least 2 characters and first leter uppercase`
    )
    .max(
      16,
      `Pet's Name must be at most 16 characters and first leter uppercase`
    ),
  petBirthDate: Yup.string()
    .trim()
    .required('Required')
    .matches(
      /^(0[1-9]|1\d|2\d|3[01])-(0[1-9]|1[0-2])-(19[0-9]{2}|20[0-9]{2})$/,
      'Date of Birth must be in the format DD-MM-YYYY'
    ),
  petType: Yup.string()
    .trim()
    .required('Required')
    .matches(/^[\p{L}'`\d]{1,15}$/u, 'Only letters in English are allowed')
    .min(2, `Pet's Name must be at least 2 characters`)
    .max(16, `Pet's Name must be at most 16 characters`),
  petImage: Yup.mixed()
    .required('Required')
    .test(
      'fileSize',
      'Image size is too large',
      value => value && value.size <= 3 * 1024 * 1024
    ),
  comments: Yup.string(),
});

const sellSchema = Yup.object().shape({
  petSex: Yup.string().required('Required'),
  petName: Yup.string()
    .trim()
    .required('Required')
    .matches(
      /^[\p{Lu}]{1}[\p{Ll}'`\d]{1,15}$/u,
      'Only letters are allowed and first leter uppercase'
    )
    .min(
      2,
      `Pet's Name must be at least 2 characters and first leter uppercase`
    )
    .max(
      16,
      `Pet's Name must be at most 16 characters and first leter uppercase`
    )
    .min(2, `Pet's Name must be at least 2 characters`)
    .max(16, `Pet's Name must be at most 16 characters`),
  petBirthDate: Yup.string()
    .trim()
    .required('Required')
    .matches(
      /^(0[1-9]|1\d|2\d|3[01])-(0[1-9]|1[0-2])-(19[0-9]{2}|20[0-9]{2})$/,
      'Date of Birth must be in the format DD-MM-YYYY'
    ),
  petType: Yup.string()
    .trim()
    .required('Required')
    .matches(/^[\p{L}'`\d]{1,15}$/u, 'Only letters in English are allowed')
    .min(2, `Pet's Name must be at least 2 characters`)
    .max(16, `Pet's Name must be at most 16 characters`),
  addTitle: Yup.string()
    .required('Required')
    .matches(/^[\p{L}' `\d]{1,31}$/u, 'Only letters in English are allowed')
    .trim(),
  location: Yup.string()
    .trim()
    .required('Required')
    .matches(
      /^[\p{Lu}]{1}[\p{Ll}'`]{1,31}$/u,
      'Location must contain only letters and first leter uppercase'
    ),
  petImage: Yup.mixed()
    .required('Required')
    .test(
      'fileSize',
      'Image size is too large',
      value => value && value.size <= 3 * 1024 * 1024
    ),
  comments: Yup.string().trim(),
  price: Yup.number()
    .typeError('Price must be a number')
    .required('Required')
    .positive('Price must be greater than 0'),
});

const lostFoundSchema = Yup.object().shape({
  petSex: Yup.string().required('Required'),
  petName: Yup.string()
    .required('Required')
    .matches(
      /^[\p{Lu}]{1}[\p{Ll}'`\d]{1,15}$/u,
      'Only letters are allowed and first leter uppercase'
    )
    .min(
      2,
      `Pet's Name must be at least 2 characters and first leter uppercase`
    )
    .max(
      16,
      `Pet's Name must be at most 16 characters and first leter uppercase`
    )
    .min(2, `Pet's Name must be at least 2 characters`)
    .max(16, `Pet's Name must be at most 16 characters`)
    .trim(),
  petBirthDate: Yup.string()
    .trim()
    .required('Required')
    .matches(
      /^(0[1-9]|1\d|2\d|3[01])-(0[1-9]|1[0-2])-(19[0-9]{2}|20[0-9]{2})$/,
      'Date of Birth must be in the format DD-MM-YYYY'
    ),
  petType: Yup.string()
    .trim()
    .required('Required')
    .matches(/^[\p{L}'`\d]{1,15}$/u, 'Only letters in English are allowed')
    .min(2, `Pet's Name must be at least 2 characters`)
    .max(16, `Pet's Name must be at most 16 characters`),
  addTitle: Yup.string()
    .required('Required')
    .matches(/^[\p{L}' `\d]{1,31}$/u, 'Only letters in English are allowed')
    .trim(),
  location: Yup.string()
    .trim()
    .required('Required')
    .matches(/^[a-zA-Z\s]*$/, 'Location must contain only letters'),
  petImage: Yup.mixed()
    .required('Required')
    .test(
      'fileSize',
      'Image size is too large',
      value => value && value.size <= 3 * 1024 * 1024
    ),
  comments: Yup.string(),
});

export { yourPetSchema, sellSchema, lostFoundSchema };
