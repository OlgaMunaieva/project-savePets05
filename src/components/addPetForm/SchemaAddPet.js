import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  adType: Yup.string()
    .oneOf(['yourPet', 'sell', 'lostFound', 'inGoodHands'])
    .required('Required'),
  petName: Yup.string().when('adType', {
    is: value =>
      ['yourPet', 'sell', 'lostFound', 'inGoodHands'].includes(value),
    then: Yup.string()
      .required('Required')
      .matches(/^[a-zA-Z ]*$/, 'Only letters and spaces are allowed')
      .min(2, `Pet's Name must be at least 2 characters`)
      .max(16, `Pet's Name must be at most 16 characters`),
  }),
  petBirthDate: Yup.string().when('adType', {
    is: value =>
      ['yourPet', 'sell', 'lostFound', 'inGoodHands'].includes(value),
    then: Yup.string()
      .required('Required')
      .matches(
        /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/,
        'Date of Birth must be in the format DD-MM-YYYY'
      ),
  }),
  petType: Yup.string().when('adType', {
    is: value =>
      ['yourPet', 'sell', 'lostFound', 'inGoodHands'].includes(value),
    then: Yup.string()
      .required('Required')
      .min(2, `Pet's Name must be at least 2 characters`)
      .max(16, `Pet's Name must be at most 16 characters`),
  }),
  petImage: Yup.string().when('adType', {
    is: value =>
      ['yourPet', 'sell', 'lostFound', 'inGoodHands'].includes(value),
    then: Yup.string()
      .required('Required')
      .test(
        'fileSize',
        'Image size is too large',
        value => value && value.size <= 3 * 1024 * 1024
      ),
  }),
  comments: Yup.string().when('adType', {
    is: value =>
      ['yourPet', 'sell', 'lostFound', 'inGoodHands'].includes(value),
    then: Yup.string().required('Required'),
  }),
  addType: Yup.string().when('adType', {
    is: value => ['sell', 'lostFound', 'inGoodHands'].includes(value),
    then: Yup.string()
      .required('Required')
      .matches(/^[a-zA-Z ]*$/, 'Only letters and spaces are allowed')
      .min(2, `Pet's Name must be at least 2 characters`)
      .max(16, `Pet's Name must be at most 16 characters`),
  }),
  location: Yup.string().when('adType', {
    is: value => ['sell', 'lostFound', 'inGoodHands'].includes(value),
    then: Yup.string()
      .required('Required')
      .matches(/^[a-zA-Z\s]*$/, 'Location must contain only letters and spaces')
      .test('validCity', 'Invalid city format', value =>
        /^[A-Z][a-zA-Z]*(,\s*[A-Z][a-zA-Z]*)*$/.test(value)
      ),
  }),
  price: Yup.string().when('adType', {
    is: 'sell',
    then: Yup.string().required('Required'),
  }),
  petSex: Yup.string().when('adType', {
    is: value => ['sell', 'lostFound', 'inGoodHands'].includes(value),
    then: Yup.string()
      .required('Required')
      .oneOf(['male', 'female'], 'Invalid option'),
  }),
});

export default validationSchema;
