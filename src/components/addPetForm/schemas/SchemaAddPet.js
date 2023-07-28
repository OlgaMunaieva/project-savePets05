import * as Yup from 'yup';

const yourPetSchema = Yup.object().shape({
  petName: Yup.string()
    .trim()
    .required('Required')
    .matches(/^[a-zA-Z ]*$/, 'Only letters and spaces are allowed')
    .min(2, `Pet's Name must be at least 2 characters`)
    .max(16, `Pet's Name must be at most 16 characters`),
  petBirthDate: Yup.string()
    .trim()
    .required('Required')
    .matches(
      /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/,
      'Date of Birth must be in the format DD-MM-YYYY'
    ),
  petType: Yup.string()
    .trim()
    .required('Required')
    .matches(/^[a-zA-Z ]*$/, 'Only letters and spaces are allowed')
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
    .matches(/^[a-zA-Z ]*$/, 'Only letters and spaces are allowed')
    .min(2, `Pet's Name must be at least 2 characters`)
    .max(16, `Pet's Name must be at most 16 characters`),
  petBirthDate: Yup.string()
    .trim()
    .required('Required')
    .matches(
      /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/,
      'Date of Birth must be in the format DD-MM-YYYY'
    ),
  petType: Yup.string()
    .trim()
    .required('Required')
    .matches(/^[a-zA-Z ]*$/, 'Only letters and spaces are allowed')
    .min(2, `Pet's Name must be at least 2 characters`)
    .max(16, `Pet's Name must be at most 16 characters`),
  addTitle: Yup.string().required('Required').trim(),
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
  comments: Yup.string().trim(),
  price: Yup.number()
    .typeError('Price must be a number')
    .required('Required')
    .positive('Price must be greater than 0'),
});

const lostFoundSchema = Yup.object().shape({
  petSex: Yup.string().required('Required'),
  petName: Yup.string()
    .trim()
    .required('Required')
    .matches(/^[a-zA-Z ]*$/, 'Only letters and spaces are allowed')
    .min(2, `Pet's Name must be at least 2 characters`)
    .max(16, `Pet's Name must be at most 16 characters`),
  petBirthDate: Yup.string()
    .trim()
    .required('Required')
    .matches(
      /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/,
      'Date of Birth must be in the format DD-MM-YYYY'
    ),
  petType: Yup.string()
    .trim()
    .required('Required')
    .matches(/^[a-zA-Z ]*$/, 'Only letters and spaces are allowed')
    .min(2, `Pet's Name must be at least 2 characters`)
    .max(16, `Pet's Name must be at most 16 characters`),
  addTitle: Yup.string().required('Required').trim(),
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
