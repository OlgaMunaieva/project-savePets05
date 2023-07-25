import React from 'react';
import { Field } from 'formik';
import { ErrorMessageText } from './AddPetForm.styled';

const Step1 = ({ handleChange }) => (
  <div>
    <label>
      <input
        type="radio"
        name="adType"
        value="yourPet"
        onChange={handleChange}
      />
      your pet
    </label>
    <br />
    <label>
      <input type="radio" name="adType" value="sell" onChange={handleChange} />
      sell
    </label>
    <br />
    <label>
      <input
        type="radio"
        name="adType"
        value="lostFound"
        onChange={handleChange}
      />
      lost/found
    </label>
    <br />
    <label>
      <input
        type="radio"
        name="adType"
        value="inGoodHands"
        onChange={handleChange}
      />
      in good hands
    </label>
  </div>
);

const Step2 = ({ handleChange, petName, petBirthDate, petType }) => (
  <div>
    <label>Pet's Name:</label>
    <Field type="text" name="petName" value={petName} onChange={handleChange} />
    <ErrorMessageText component="label" name="petName" />
    <br />
    <label>Date of Birth:</label>
    <Field
      type="text"
      name="petBirthDate"
      value={petBirthDate}
      onChange={handleChange}
    />
    <ErrorMessageText component="label" name="petBirthDate" />
    <br />
    <label>Type of Pet:</label>
    <Field type="text" name="petType" value={petType} onChange={handleChange} />
    <ErrorMessageText component="label" name="petType" />
  </div>
);

const Step3 = ({ handleChange, petImage, comments }) => {
  return (
    <div>
      <label htmlFor="petImage">Load the pet's image:</label>
      <Field
        type="file"
        id="petImage"
        name="petImage"
        accept="image/*"
        onChange={handleChange}
        value={petImage}
      />
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
