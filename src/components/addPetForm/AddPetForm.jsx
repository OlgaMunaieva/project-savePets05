import React, { useState } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { Step1, Step2, Step3 } from './Steps';
import * as Yup from 'yup';

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
} from './AddPetForm.styled';

const AddPet = () => {
  const [step, setStep] = useState(1);

  const initialValues = {
    adType: '',
    petName: '',
    petBirthDate: '',
    petType: '',
    petImage: '',
    comments: '',
    addType: '',
    location: '',
    price: '',
    sex: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    //сабміт форми
    console.log(values);
    setSubmitting(false);
  };

  const handleNext = values => {
    if (step === 1) {
      if (!values.adType) {
        return;
      }
    } else if (step === 2) {
      // Перевіряємо наявність обов'язкових полів на другому кроці
      if (values.adType === 'yourPet') {
        if (!values.petName || !values.petBirthDate || !values.petType) {
          return;
        }
      } else if (values.adType === 'sell') {
        if (!values.addType) {
          return;
        }
      } else if (
        values.adType === 'lostFound' ||
        values.adType === 'inGoodHands'
      ) {
        // Додаємо перевірку для опції "lost/found"
        if (
          !values.petName ||
          !values.petBirthDate ||
          !values.petType ||
          !values.addType
        ) {
          return;
        }
      }
    } else if (step === 3) {
      // Перевіряємо наявність обов'язкових полів на третьому кроці
      if (values.adType === 'yourPet') {
        if (!values.petImage || !values.comments) {
          return;
        }
      } else if (values.adType === 'sell') {
        if (!values.location || !values.price) {
          return;
        }
      } else if (
        values.adType === 'lostFound' ||
        values.adType === 'inGoodHands'
      ) {
        // Додаємо перевірку для опції "lost/found та in good hands"
        if (!values.location) {
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

  // Оголошуємо основну схему валідації з використанням Yup
  const validationSchema = Yup.object().shape({
    adType: Yup.string().required('Required'),
    petName: Yup.string().when('adType', {
      is: 'yourPet',
      then: Yup.string().required('Required'),
    }),
    petBirthDate: Yup.string().when('adType', {
      is: 'yourPet',
      then: Yup.string().required('Required'),
    }),
    petType: Yup.string().when('adType', {
      is: 'yourPet',
      then: Yup.string().required('Required'),
    }),
    petImage: Yup.string().when('adType', {
      is: 'yourPet',
      then: Yup.string().required('Required'),
    }),
    comments: Yup.string().when('adType', {
      is: 'yourPet',
      then: Yup.string().required('Required'),
    }),
    addType: Yup.string().when('adType', {
      is: 'sell',
      then: Yup.string().required('Required'),
    }),
    location: Yup.string().when('adType', {
      is: 'yourPet',
      then: Yup.string().required('Required'),
    }),
    price: Yup.string().when('adType', {
      is: 'yourPet',
      then: Yup.string().required('Required'),
    }),
  });

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, isValid }) => (
          <Form>
            <StepIndicatorContainer>
              <StepIndicator active={step === 1} completed={step > 1}>
                <StepText active={step === 1}>Choose option</StepText>
              </StepIndicator>
              <StepIndicator active={step === 2} completed={step > 2}>
                <StepText active={step === 2}>Personal details</StepText>
              </StepIndicator>
              <StepIndicator active={step === 3} completed={step > 3}>
                <StepText active={step === 3}>More info</StepText>
              </StepIndicator>
            </StepIndicatorContainer>
            {step === 1 && <Step1 handleChange={handleChange} />}
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
                    <label>Type of ad:</label>
                    <Field
                      type="text"
                      name="addType"
                      value={values.addType}
                      onChange={handleChange}
                    />
                    <ErrorMessageText component="label" name="addType" />
                  </div>
                )}
              </>
            )}
            {step === 3 && (
              <>
                {values.adType === 'yourPet' ? (
                  <Step3 handleChange={handleChange} sex={values.sex} />
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
                        name="sex"
                        value="male"
                        checked={values.sex === 'male'}
                        onChange={handleChange}
                      />{' '}
                      Male
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="sex"
                        value="female"
                        checked={values.sex === 'female'}
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
                    <label>Comments:</label>
                    <Field
                      name="comments"
                      value={values.comments}
                      onChange={handleChange}
                    />
                    <ErrorMessageText component="label" name="comments" />
                    <label>Upload a File:</label>
                    <Field
                      type="file"
                      name="petImage"
                      onChange={event => {
                        handleChange({
                          target: {
                            name: 'petImage',
                            value: event.currentTarget.files[0],
                          },
                        });
                      }}
                    />
                    <ErrorMessageText component="label" name="petImage" />
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
                <NextButton
                  type="button"
                  onClick={() => handleNext(values)}
                  disabled={!isValid}
                >
                  Next
                </NextButton>
              ) : null}
              {step === 3 && (
                <SubmitButton type="submit" disabled={!isValid}>
                  Done
                </SubmitButton>
              )}
            </ButtonContainer>
            {step === 1 && <ErrorMessage name="adType" component="div" />}
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default AddPet;
