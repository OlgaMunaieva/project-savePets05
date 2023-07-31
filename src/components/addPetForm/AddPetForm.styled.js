// AddPet.styled.js
import styled from 'styled-components';
import { ErrorMessage, Field } from 'formik';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  margin: 0 auto;
  padding: 20px 8px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  background: var(--unnamed, #fff);
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BackButton = styled.button`
  background-color: #fff;
  padding: 8px 28px;
  display: flex;
  width: 94px;
  margin: 0 auto;
  padding: 8px 28px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  border-radius: 40px;
  border: none;
  color: #54adff;
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
`;

export const NextButton = styled.button`
  background-color: #90ee90;
  padding: 8px 28px;
  display: flex;
  width: 248px;
  padding: 8px 28px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 40px;
  background: var(--unnamed, #54adff);
  border: none;
  color: var(--unnamed, #fef9f9);
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
  img {
    filter: brightness(0) invert(1);
  }
`;

export const StepIndicatorContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 12px;
`;

export const StepIndicator = styled.div`
  flex-shrink: 0;
  height: 8px;
  width: 80px;
  border-radius: 8px;

  background-color: ${props =>
    props.active === 'true'
      ? '#54ADFF'
      : props.completed === 'true'
      ? '#00C3AD'
      : '#CCE4FB'};
  position: relative;
`;
export const StepText = styled.span`
  font-family: 'Manrope', sans-serif;
  position: absolute;
  top: -25px;
  left: 0;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${props =>
    props.active === 'true'
      ? '#54ADFF'
      : props.completed === 'true'
      ? '#00C3AD'
      : '#888'};
`;

export const ErrorMessageText = styled(ErrorMessage)`
  color: #f43f5e;
  font-family: Manrope, sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
  bottom: -15px;
`;

export const ErrorText = styled.span`
  color: #f43f5e;
  font-family: Manrope, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 5px;
  position: absolute;
  bottom: -30px;
`;

export const StepTitle = styled.h2`
  margin-bottom: 50px;
  margin-left: 12px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-family: 'Manrope', sans-serif;
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 91px;
`;

export const RadioLabel = styled.label`
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
  input[type='radio'] {
    display: none;
  }
  cursor: pointer;
  span {
    color: #54adff;
    padding: 8px 16px;
    border-radius: 40px;
    background-color: #cce4fb;
  }
  input[type='radio']:checked + span {
    color: #fef9f9;
    background-color: #54adff;
  }
`;

export const RadioLabelSex = styled.label`
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height:24px
  letter-spacing: 0.64px;
  input[type='radio'] {
    display: none;
  }
  span {
    color: #888;
    padding: 8px 12px;
    border-radius: 40px;
    background-color: #fff;
    &:hover {
      color: #fef9f9;
      background-color: #54adff;
    }
    &:active {
      color: #fef9f9;
      background-color: #54adff;
    }
  }
  cursor: pointer;
  input[type='radio']:checked + span {
    color: #fef9f9;
    background-color: #54adff;
  }
  
`;

export const Input = styled(Field)`
  display: flex;
  width: 264px;
  height: 40px;
  padding: 8px 16px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 1px solid #54adff;
  margin-top: 4px;
  &::placeholder {
    color: #888;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    letter-spacing: 0.56px;
  }
  &:focus {
    outline: none;
  }
`;

export const BigInput = styled.textarea`
  overflow: hidden;
  font-family: Manrope, sans-serif;
  text-overflow: ellipsis;
  display: flex;
  width: 264px;
  height: 92px;
  padding: 8px 16px;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid var(--unnamed, #54adff);
  &::placeholder {
    color: #888;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.56px;
  }
  &:focus {
    outline: none;
  }
`;

export const Step2Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 44px;
  margin-top: 20px;
`;
export const Step2Label = styled.label`
  margin-bottom: 4px;
  display: block;
  color: #111);
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const InputBlock = styled.div`
  position: relative;
`;

export const FlexContainer = styled.div`
  display: flex;

  align-items: center;
`;

export const SexBlock = styled.div`
  position: relative;
  margin-bottom: 16px;
`;
