// AddPet.styled.js
import styled from 'styled-components';
import { ErrorMessage } from 'formik';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 458px;
  margin: 0 auto;
  padding: 20px 32px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  background: var(--unnamed, #fff);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export const BackButton = styled.button`
  background-color: #ffcccb;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const NextButton = styled.button`
  background-color: #90ee90;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  background-color: #4169e1;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
export const StepIndicatorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 240px;
`;

export const StepIndicator = styled.div`
  flex: 1;
  height: 10px;
  width: calc(100% / 3);
  background-color: ${props =>
    props.active
      ? 'blue'
      : props.completed
      ? 'green'
      : 'gray'}; /* Змініть дефолтний колір фону */
  margin: 0 5px;
  position: relative; /* Додайте властивість position: relative; */
`;
export const StepText = styled.div`
  position: absolute; /* Зробіть текст абсолютно позиціонованим */
  top: -20px; /* Змініть відступ вгору за необхідністю */
  left: 0;
  font-family: Manrope;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${props =>
    props.active
      ? 'blue'
      : props.completed
      ? 'green'
      : 'gray'}; /* Колір тексту в залежності від стану кроку */
  font-weight: ${props =>
    props.active ? 'bold' : 'normal'}; /* Зробіть активний текст жирним */
`;

export const ErrorMessageText = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;
