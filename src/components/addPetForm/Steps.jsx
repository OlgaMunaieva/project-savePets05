import React, { useState, useRef } from 'react';
import { Field } from 'formik';
import uploadImg from 'images/icons/uploadImg.svg';
import {
  ErrorMessageText,
  Input,
  RadioContainer,
  RadioLabel,
  Step2Container,
  Step2Label,
  InputBlock,
  Flex3Container,
  Step3Label,
  UploadImg,
} from './AddPetForm.styled';

const Step1 = ({ handleChange, setAdType, values }) => (
  <RadioContainer>
    <RadioLabel
      className={values.adType === 'yourPet' ? 'checked' : ''}
      onClick={() => setAdType('yourPet')}
    >
      <Field
        type="radio"
        name="adType"
        value="yourPet"
        checked={values.adType === 'yourPet'}
        onChange={e => {
          handleChange(e);
          setAdType(e.target.value);
        }}
      />
      <span>your pet</span>
    </RadioLabel>
    <RadioLabel
      className={values.adType === 'sell' ? 'checked' : ''}
      onClick={() => setAdType('sell')}
    >
      <Field
        type="radio"
        name="adType"
        value="sell"
        checked={values.adType === 'sell'}
        onChange={e => {
          handleChange(e);
          setAdType(e.target.value);
        }}
      />
      <span>sell</span>
    </RadioLabel>
    <RadioLabel
      className={values.adType === 'lostFound' ? 'checked' : ''}
      onClick={() => setAdType('lostFound')}
    >
      <Field
        type="radio"
        name="adType"
        value="lostFound"
        checked={values.adType === 'lostFound'}
        onChange={e => {
          handleChange(e);
          setAdType(e.target.value);
        }}
      />
      <span>lost/found</span>
    </RadioLabel>
    <RadioLabel
      className={values.adType === 'inGoodHands' ? 'checked' : ''}
      onClick={() => setAdType('inGoodHands')}
    >
      <Field
        type="radio"
        name="adType"
        value="inGoodHands"
        checked={values.adType === 'inGoodHands'}
        onChange={e => {
          handleChange(e);
          setAdType(e.target.value);
        }}
      />
      <span>in good hands</span>
    </RadioLabel>
  </RadioContainer>
);

const Step2 = ({
  handleChange,
  petName,
  petBirthDate,
  petType,
  // errors,
  // touched,
}) => (
  <Step2Container>
    <InputBlock>
      <Step2Label>Pet's Name:</Step2Label>
      <Input
        placeholder="Type name pet"
        type="text"
        name="petName"
        value={petName}
        onChange={handleChange}
        // error={errors.petName && touched.petName ? 'true' : 'false'}
        // data-touched={touched.petName}
      />
      <ErrorMessageText component="label" name="petName" />
    </InputBlock>
    <InputBlock>
      <Step2Label>Date of Birth:</Step2Label>
      <Input
        placeholder="Type date of birth"
        type="text"
        name="petBirthDate"
        value={petBirthDate}
        onChange={handleChange}
        // error={errors.petBirthDate && touched.petBirthDate ? 'true' : 'false'}
        // data-touched={touched.petBirthDate}
      />
      <ErrorMessageText component="label" name="petBirthDate" />
    </InputBlock>
    <InputBlock>
      <Step2Label>Type of Pet:</Step2Label>
      <Input
        placeholder="Type of pet"
        type="text"
        name="petType"
        value={petType}
        onChange={handleChange}
        // error={errors.petType && touched.petType ? 'true' : 'false'}
        // data-touched={touched.petType}
      />
      <ErrorMessageText component="label" name="petType" />
    </InputBlock>
  </Step2Container>
);

const Step3 = ({ handleChange, petImage, adType, step }) => {
  const [selectedImage, setSelectedImage] = useState(petImage || null);
  const fileInputRef = useRef(null);
  const handleIconClick = () => {
    // Викликаємо подію кліку на прихований input type="file"
    fileInputRef.current.click();
  };

  const handleImageChange = event => {
    const file = event.currentTarget.files[0];
    setSelectedImage(file);
    if (file) {
      handleChange({
        target: {
          name: 'petImage',
          value: file,
        },
      });
    }
  };
  return (
    <InputBlock style={{ marginBottom: '16px' }}>
      <Flex3Container adType={adType} step={step}>
        <Step3Label
          adType={adType}
          step={step}
          style={{ cursor: 'pointer' }}
          htmlFor="petImage"
        >
          Load the pet's image:
        </Step3Label>
        <input
          type="file"
          id="petImage"
          name="petImage"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
        <div style={{ position: 'relative' }}>
          <UploadImg
            style={{ borderRadius: '20px', cursor: 'pointer' }}
            src={uploadImg}
            alt="upload"
            onClick={handleIconClick}
          />

          {selectedImage && (
            <UploadImg
              src={URL.createObjectURL(selectedImage)}
              onClick={handleIconClick}
              alt="Selected Pet"
              style={{
                borderRadius: '20px',
                position: 'absolute',
                top: 0,
                left: 0,
                objectFit: 'cover',
                cursor: 'pointer',
              }}
            />
          )}
        </div>
      </Flex3Container>
      <ErrorMessageText component="label" name="petImage" />
    </InputBlock>
  );
};

export { Step1, Step2, Step3 };
