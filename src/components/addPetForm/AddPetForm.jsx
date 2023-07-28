import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Step1, Step2, Step3 } from './Steps';
import sendData from './helpers/sendData';
import * as Yup from 'yup';
import {
  yourPetSchema,
  sellSchema,
  lostFoundSchema,
} from './schemas/SchemaAddPet';

import {
  Container,
  ButtonContainer,
  BackButton,
  NextButton,
  SubmitButton,
  StepIndicatorContainer,
  StepIndicator,
  StepText,
  ErrorMessageText,
  ErrorText,
} from './AddPetForm.styled';

const AddPet = () => {
  const [step, setStep] = useState(1);
  const [adType, setAdType] = useState('');
  const [touched, setTouched] = useState(false);

  const initialValues = {
    adType: '',
    petName: '',
    petBirthDate: '',
    petType: '',
    petImage: null,
    comments: '',
    addTitle: '',
    location: '',
    price: '',
    petSex: '',
  };

  const getValidationSchema = adType => {
    switch (adType) {
      case 'yourPet':
        return yourPetSchema;
      case 'sell':
        return sellSchema;
      case 'lostFound':
      case 'inGoodHands':
        return lostFoundSchema;
      default:
        return Yup.object().shape({});
    }
  };

  const handleSubmit = async values => {
    try {
      const formData = new FormData();
      const validationSchema = getValidationSchema(values.adType);
      const schemaKeys = Object.keys(validationSchema.fields);
      // Додаємо до formData тільки ті поля, які є в schemaKeys
      schemaKeys.forEach(key => {
        formData.append(key, values[key]);
      });
      console.log([...formData.entries()]);
      // Викликаємо функцію для надсилання даних на бекенд
      await sendData(formData);
      console.log('Form submitted successfully');
    } catch (error) {
      // В разі помилки при надсиланні даних на сервер, можна перехопити помилку тут і обробити її
      console.error('Error submitting form:', error.message);
    }
  };

  const handleNext = values => {
    if (step === 1) {
      if (!values.adType) {
        setTouched(true);
        return;
      }
    } else if (step === 2) {
      // Перевіряємо наявність обов'язкових полів на другому кроці
      if (values.adType === 'yourPet') {
        if (
          !values.petName.trim() ||
          !values.petBirthDate.trim() ||
          !values.petType.trim()
        ) {
          return;
        }
      } else if (
        values.adType === 'sell' ||
        values.adType === 'inGoodHands' ||
        values.adType === 'lostFound'
      ) {
        if (
          !values.addTitle.trim() ||
          !values.petName.trim() ||
          !values.petBirthDate.trim() ||
          !values.petType.trim()
        ) {
          return;
        }
      }
    } else if (step === 3) {
      // Перевіряємо наявність обов'язкових полів на третьому кроці
      if (values.adType === 'yourPet') {
        if (!values.petImage) {
          return;
        }
      } else if (values.adType === 'sell') {
        if (
          !values.location.trim() ||
          !values.price.trim() ||
          !values.petImage ||
          !values.petSex
        ) {
          return;
        }
      } else if (
        values.adType === 'lostFound' ||
        values.adType === 'inGoodHands'
      ) {
        // Додаємо перевірку для опції "lost/found та in good hands"
        if (!values.location.trim() || !values.petImage || !values.petSex) {
          return;
        }
      }
    }
    setStep(prevStep => prevStep + 1);
  };

  const handleBack = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleCancel = () => {
    window.history.back(); // Переходимо на попередню сторінку
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={getValidationSchema(adType)}
      >
        {({ values, handleChange }) => (
          <Form>
            <StepIndicatorContainer>
              <StepIndicator
                active={step === 1 ? 'true' : 'false'}
                completed={step > 1 ? 'true' : 'false'}
              >
                <StepText
                  active={step === 1 ? 'true' : 'false'}
                  completed={step > 1 ? 'true' : 'false'}
                >
                  Choose option
                </StepText>
              </StepIndicator>
              <StepIndicator
                active={step === 2 ? 'true' : 'false'}
                completed={step > 2 ? 'true' : 'false'}
              >
                <StepText
                  active={step === 2 ? 'true' : 'false'}
                  completed={step > 2 ? 'true' : 'false'}
                >
                  Personal details
                </StepText>
              </StepIndicator>
              <StepIndicator
                active={step === 3 ? 'true' : 'false'}
                completed={step > 3 ? 'true' : 'false'}
              >
                <StepText
                  active={step === 3 ? 'true' : 'false'}
                  completed={step > 3 ? 'true' : 'false'}
                >
                  More info
                </StepText>
              </StepIndicator>
            </StepIndicatorContainer>
            {step === 1 && (
              <Step1 handleChange={handleChange} setAdType={setAdType} />
            )}
            {step === 2 && (
              <>
                <Step2
                  handleChange={handleChange}
                  petName={values.petName}
                  petBirthDate={values.petBirthDate}
                  petType={values.petType}
                />
                {(values.adType === 'sell' ||
                  values.adType === 'lostFound' ||
                  values.adType === 'inGoodHands') && (
                  <div>
                    {/* Додати поле для типу оголошення на другому кроці при обраній опції "sell" */}
                    <label>Title of add:</label>
                    <Field
                      type="text"
                      name="addTitle"
                      value={values.addTitle}
                      onChange={handleChange}
                    />
                    <ErrorMessageText component="label" name="addTitle" />
                  </div>
                )}
              </>
            )}
            {step === 3 && (
              <>
                {values.adType === 'yourPet' ? (
                  <Step3
                    handleChange={handleChange}
                    comments={values.comments}
                    petImage={values.petImage}
                  />
                ) : null}
                {(values.adType === 'sell' ||
                  values.adType === 'lostFound' ||
                  values.adType === 'inGoodHands') && (
                  <div>
                    {/* Додати радіокнопки "Male" та "Female" на третьому кроці при обраній опції "sell" */}
                    <h2>The Sex</h2>
                    <label>
                      <Field
                        type="radio"
                        name="petSex"
                        value="male"
                        checked={values.petSex === 'male'}
                        onChange={handleChange}
                      />{' '}
                      Male
                    </label>
                    <ErrorMessageText component="label" name="petSex" />
                    <label>
                      <Field
                        type="radio"
                        name="petSex"
                        value="female"
                        checked={values.petSex === 'female'}
                        onChange={handleChange}
                      />{' '}
                      Female
                    </label>

                    <label>Location:</label>
                    <Field
                      type="text"
                      name="location"
                      value={values.location}
                      onChange={handleChange}
                    />
                    <ErrorMessageText component="label" name="location" />
                    {values.adType === 'sell' && (
                      <div>
                        <label>Price:</label>
                        <Field
                          type="text"
                          name="price"
                          value={values.price}
                          onChange={handleChange}
                        />
                        <ErrorMessageText component="label" name="price" />
                      </div>
                    )}
                    <Step3
                      handleChange={handleChange}
                      petSex={values.petSex}
                      comments={values.comments}
                      petImage={values.petImage}
                    />
                  </div>
                )}
              </>
            )}

            <ButtonContainer>
              {step === 1 ? (
                <BackButton type="button" onClick={handleCancel}>
                  Cancel
                </BackButton>
              ) : (
                <BackButton type="button" onClick={handleBack}>
                  Back
                </BackButton>
              )}
              {step === 1 || step === 2 ? (
                <NextButton type="button" onClick={() => handleNext(values)}>
                  Next
                </NextButton>
              ) : null}
              {step === 3 && <SubmitButton type="submit">Done</SubmitButton>}
            </ButtonContainer>
            {touched && !values.adType && (
              <ErrorText>Please select one of the options</ErrorText>
            )}
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default AddPet;
