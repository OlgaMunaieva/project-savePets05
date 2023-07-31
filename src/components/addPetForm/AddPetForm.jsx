import React, { useState } from 'react';

import { Formik, Form, Field } from 'formik';
import { Step1, Step2, Step3 } from './Steps';
import sendData from './helpers/sendData';
import AddStepTitle from './helpers/addStepTitle';
import pawprint from 'images/icons/pawprint.svg';
import arrowLeft from 'images/icons/arrowLeft.svg';
import male from 'images/icons/male.svg';
import female from 'images/icons/female.svg';
import * as Yup from 'yup';
import {
  yourPetSchema,
  sellSchema,
  lostFoundSchema,
} from './schemas/SchemaAddPet';

import {
  StepTitle,
  Container,
  ButtonContainer,
  BackButton,
  NextButton,
  StepIndicatorContainer,
  StepIndicator,
  StepText,
  ErrorMessageText,
  ErrorText,
  Input,
  Step2Label,
  InputBlock,
  RadioLabelSex,
  FlexContainer,
  SexBlock,
  Step2Container,
  BigInput,
  BigInputBlock,
  InputBlockTitle,
  FlexBlock,
  Flex2Container,
} from './AddPetForm.styled';
import { InputContainer } from 'components/authForm/AuthForm.styled';

const AddPet = () => {
  const [step, setStep] = useState(1);
  const [adType, setAdType] = useState('');
  const [isTouched, setTouched] = useState(false);

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
      formData.append('title', values.addTitle);
      formData.append('category', values.adType);
      formData.append('name', values.petName);
      formData.append('birthday', values.petBirthDate);
      formData.append('type', values.petType);
      formData.append('sex', values.petSex);
      formData.append('location', values.location);
      formData.append('price', values.price);
      formData.append('comments', values.comments);
      formData.append('notice', values.petImage);

      console.log([...formData.entries()]);

      await sendData(formData);
      console.log('Form submitted successfully');
    } catch (error) {
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
    <Container step={step} adType={adType}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={getValidationSchema(adType)}
      >
        {({ values, handleChange }) => (
          <Form>
            <>
              {step === 1 && (
                <>
                  <StepTitle>Add pet</StepTitle>
                </>
              )}
              {step === 2 && (
                <>
                  <AddStepTitle adType={adType} />
                </>
              )}
              {step === 3 && (
                <>
                  <AddStepTitle adType={adType} step={step} />
                </>
              )}
            </>
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
              <InputBlock>
                <Step1
                  handleChange={handleChange}
                  setAdType={setAdType}
                  values={values}
                />
                {isTouched && !values.adType && (
                  <ErrorText>Please select one of the options</ErrorText>
                )}
              </InputBlock>
            )}
            {step === 2 && (
              <>
                {(values.adType === 'sell' ||
                  values.adType === 'lostFound' ||
                  values.adType === 'inGoodHands') && (
                  <InputBlockTitle>
                    <Step2Label>Title of add:</Step2Label>
                    <Input
                      placeholder="Type of pet"
                      type="text"
                      name="addTitle"
                      value={values.addTitle}
                      onChange={handleChange}
                    />
                    <ErrorMessageText component="label" name="addTitle" />
                  </InputBlockTitle>
                )}
                <Step2
                  handleChange={handleChange}
                  petName={values.petName}
                  petBirthDate={values.petBirthDate}
                  petType={values.petType}
                  values={values}
                />
              </>
            )}
            {step === 3 && (
              <>
                {values.adType === 'yourPet' ? (
                  <InputContainer style={{ marginBottom: '24px' }}>
                    <Step3
                      handleChange={handleChange}
                      comments={values.comments}
                      petImage={values.petImage}
                    />
                    <BigInputBlock>
                      <Step2Label htmlFor="comments">Comments:</Step2Label>
                      <BigInput
                        placeholder="Type of pet"
                        type="text"
                        id="comments"
                        name="comments"
                        onChange={handleChange}
                        value={values.comments}
                      />
                      <ErrorMessageText component="label" name="comments" />
                    </BigInputBlock>
                  </InputContainer>
                ) : null}
                {(values.adType === 'sell' ||
                  values.adType === 'lostFound' ||
                  values.adType === 'inGoodHands') && (
                  <Flex2Container>
                    <FlexBlock>
                      <SexBlock>
                        <Step2Label>The Sex</Step2Label>
                        <FlexContainer>
                          <RadioLabelSex>
                            <FlexContainer>
                              <Field
                                type="radio"
                                name="petSex"
                                value="female"
                                checked={values.petSex === 'female'}
                                onChange={handleChange}
                              />{' '}
                              <img
                                src={female}
                                alt="female"
                                width={24}
                                height={24}
                              />
                              <span>Female</span>
                            </FlexContainer>
                          </RadioLabelSex>
                          <ErrorMessageText component="label" name="petSex" />
                          <RadioLabelSex>
                            <FlexContainer>
                              <Field
                                type="radio"
                                name="petSex"
                                value="male"
                                checked={values.petSex === 'male'}
                                onChange={handleChange}
                              />{' '}
                              <img
                                src={male}
                                alt="male"
                                width={24}
                                height={24}
                              />
                              <span>Male</span>
                            </FlexContainer>
                          </RadioLabelSex>
                        </FlexContainer>
                      </SexBlock>
                      <Step3
                        handleChange={handleChange}
                        petSex={values.petSex}
                        comments={values.comments}
                        petImage={values.petImage}
                        values={values}
                        adType={adType}
                        step={step}
                      />
                    </FlexBlock>
                    <Step2Container>
                      <InputBlock>
                        <Step2Label>Location:</Step2Label>
                        <Input
                          placeholder="Type location"
                          type="text"
                          name="location"
                          value={values.location}
                          onChange={handleChange}
                        />
                        <ErrorMessageText component="label" name="location" />
                      </InputBlock>
                      {values.adType === 'sell' && (
                        <InputBlock>
                          <Step2Label>Price:</Step2Label>
                          <Input
                            placeholder="Type price"
                            type="text"
                            name="price"
                            value={values.price}
                            onChange={handleChange}
                          />
                          <ErrorMessageText component="label" name="price" />
                        </InputBlock>
                      )}
                      <InputBlock>
                        <Step2Label htmlFor="comments">Comments:</Step2Label>
                        <BigInput
                          placeholder="Type of pet"
                          type="text"
                          id="comments"
                          name="comments"
                          onChange={handleChange}
                          value={values.comments}
                          adType={adType}
                          step={step}
                        />
                        <ErrorMessageText component="label" name="comments" />
                      </InputBlock>
                    </Step2Container>
                  </Flex2Container>
                )}
              </>
            )}

            <ButtonContainer>
              {step === 1 || step === 2 ? (
                <NextButton type="button" onClick={() => handleNext(values)}>
                  Next <img src={pawprint} alt="paw" width={24} height={24} />
                </NextButton>
              ) : null}
              {step === 3 && (
                <NextButton type="submit">
                  Done
                  <img src={pawprint} alt="paw" width={24} height={24} />
                </NextButton>
              )}
              {step === 1 ? (
                <BackButton type="button" onClick={handleCancel}>
                  <img src={arrowLeft} alt="paw" width={24} height={24} />
                  Cancel
                </BackButton>
              ) : (
                <BackButton type="button" onClick={handleBack}>
                  <img src={arrowLeft} alt="arrow" width={24} height={24} />
                  Back
                </BackButton>
              )}
            </ButtonContainer>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default AddPet;
