import React, { useState } from 'react';
import { Field } from 'formik';
import { ErrorMessageText, Input } from './AddPetForm.styled';

const Step1 = ({ handleChange, setAdType }) => (
  <div>
    <label>
      <Field
        type="radio"
        name="adType"
        value="yourPet"
        onChange={e => {
          handleChange(e);
          setAdType(e.target.value);
        }}
      />
      your pet
    </label>
    <br />
    <label>
      <Field
        type="radio"
        name="adType"
        value="sell"
        onChange={e => {
          handleChange(e);
          setAdType(e.target.value);
        }}
      />
      sell
    </label>
    <br />
    <label>
      <Field
        type="radio"
        name="adType"
        value="lostFound"
        onChange={e => {
          handleChange(e);
          setAdType(e.target.value);
        }}
      />
      lost/found
    </label>
    <br />
    <label>
      <Field
        type="radio"
        name="adType"
        value="inGoodHands"
        onChange={e => {
          handleChange(e);
          setAdType(e.target.value);
        }}
      />
      in good hands
    </label>
  </div>
);

const Step2 = ({ handleChange, petName, petBirthDate, petType }) => (
  <div>
    <label>Pet's Name:</label>
    <Input type="text" name="petName" value={petName} onChange={handleChange} />
    <ErrorMessageText component="label" name="petName" />
    <br />
    <label>Date of Birth:</label>
    <Input
      type="text"
      name="petBirthDate"
      value={petBirthDate}
      onChange={handleChange}
    />
    <ErrorMessageText component="label" name="petBirthDate" />
    <br />
    <label>Type of Pet:</label>
    <Input type="text" name="petType" value={petType} onChange={handleChange} />
    <ErrorMessageText component="label" name="petType" />
  </div>
);

const Step3 = ({ handleChange, petImage, comments }) => {
  const [selectedImage, setSelectedImage] = useState(petImage || null);

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
    <div>
      <label htmlFor="petImage">Load the pet's image:</label>
      <input
        type="file"
        id="petImage"
        name="petImage"
        accept="image/*"
        onChange={handleImageChange}
      />
      {selectedImage && (
        <img src={URL.createObjectURL(selectedImage)} alt="Selected Pet" />
      )}
      <ErrorMessageText component="label" name="petImage" />
      <br />
      <label htmlFor="comments">Comments:</label>
      <Field
        type="text"
        id="comments"
        name="comments"
        onChange={handleChange}
        value={comments}
      />
      <ErrorMessageText component="label" name="comments" />
    </div>
  );
};

export { Step1, Step2, Step3 };
