// AddPet.styled.js
import styled, { css } from 'styled-components';
import { ErrorMessage, Field } from 'formik';

export const containerStyles = css`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 8px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  background: var(--unnamed, #fff);
  @media (min-width: 767px) {
    max-width: 458px;
    margin-top: 48px;
  }
  @media (min-width: 1279px) {
    max-width: 458px;
    margin-top: 48px;
  }
`;
export const Container = styled.div`
  ${containerStyles}

  ${({ step, adType }) =>
    step === 3 &&
    (adType === 'sell' || adType === 'inGoodHands' || adType === 'lostFound') &&
    css`
      @media (min-width: 767px) {
        max-width: 704px;
      }
      @media (min-width: 1279px) {
        max-width: 822px;
      }
    `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 767px) {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 32px;
  }
  @media (min-width: 1279px) {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 32px;
  }
`;

export const BackButton = styled.button`
  background-color: #fff;
  padding: 8px 28px;
  display: flex;

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
  &:hover {
    box-shadow: 7px 13px 14px 0px #74b1e83d;
    transition: box-shadow 0.25s ease-in-out;
  }
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
  &:hover {
    box-shadow: 7px -13px 14px #74b1e83d;
    transition: box-shadow 0.25s ease-in-out;
  }
  @media (min-width: 767px) {
    &:hover {
      box-shadow: 7px 13px 14px 0px #74b1e83d;
      transition: box-shadow 0.25s ease-in-out;
    }
  }
  @media (min-width: 1279px) {
    &:hover {
      box-shadow: 7px 13px 14px 0px #74b1e83d;
      transition: box-shadow 0.25s ease-in-out;
    }
  }
`;

export const StepIndicatorContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 12px;
  @media (min-width: 767px) {
    justify-content: center;
    gap: 16px;
    margin-bottom: 40px;
  }
  @media (min-width: 1279px) {
    justify-content: center;
    gap: 16px;
    margin-bottom: 40px;
  }
`;

export const StepIndicator = styled.div`
  flex-shrink: 0;
  height: 8px;
  width: 80px;
  border-radius: 8px;
  @media (min-width: 767px) {
    width: 120px;
  }
  @media (min-width: 1279px) {
    width: 120px;
  }

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
  @media (min-width: 767px) {
    top: -30px;
  }
  @media (min-width: 1279px) {
    top: -30px;
  }
  top: -25px;
  left: 0;
  font-size: 10px;
  @media (min-width: 767px) {
    font-size: 16px;
  }
  @media (min-width: 1279px) {
    font-size: 16px;
  }
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

export const Text = styled.span`
  color: #f43f5e;
  font-family: Manrope, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 5px;
  position: absolute;
  bottom: 45px;
`;

export const stepTitleStyles = css`
  margin-bottom: 50px;
  margin-left: 12px;
  font-size: 20px;
  @media (min-width: 767px) {
    font-size: 28px;
  }
  @media (min-width: 1279px) {
    font-size: 28px;
  }
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-family: 'Manrope', sans-serif;
`;

export const StepTitle = styled.div`
  ${stepTitleStyles}

  ${({ step, adType }) =>
    step === 3 &&
    (adType === 'sell' || adType === 'inGoodHands' || adType === 'lostFound') &&
    css`
      @media (min-width: 767px) {
        text-align: center;
      }
      @media (min-width: 1279px) {
        text-align: center;
      }
    `}
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 91px;
  @media (min-width: 767px) {
    margin-bottom: 137px;
    margin-left: 32px;
  }
  @media (min-width: 1279px) {
    margin-bottom: 137px;
    margin-left: 32px;
  }
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
    &:hover {
      box-shadow: 7px 7px 8px 0px #74b1e83d;
      transition: box-shadow 0.25s ease-in-out;
    }
  }
  input[type='radio']:checked + span {
    color: #fef9f9;
    background-color: #54adff;
    &: hover {
      box-shadow: 0px 0px 0px 0px #74b1e83d;
    }
  }
`;

export const RadioLabelSex = styled.label`
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.64px;
  input[type='radio'] {
    display: none;
    &:checked + span {
      color: #fef9f9;
      background-color: #54adff;
    }
    &:checked + span img {
      filter: brightness(0) invert(1); /* Застосовуємо інверсію кольорів */
    }
  }
  span {
    color: #888;
    padding: 8px 12px;
    border-radius: 40px;
    background-color: #fff;
    &:hover {
      color: #fef9f9;
      background-color: #54adff;
      transition: background-color 0.25s ease-in-out;
    }
    &:hover img {
      filter: brightness(0) invert(1);
      transition: filter 0.25s ease-in-out;
    }
  }
  cursor: pointer;
`;

export const Input = styled(Field)`
  display: flex;
  width: 264px;
  height: 40px;
  @media (min-width: 767px) {
    width: 394px;
    height: 48px;
  }
  @media (min-width: 1279px) {
    width: 394px;
    height: 48px;
  }
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
    @media (min-width: 767px) {
      font-size: 16px;
    }
    @media (min-width: 1279px) {
      font-size: 16px;
    }
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    letter-spacing: 0.56px;
  }
  &:focus {
    outline: none;
  }
  ${props =>
    props.touched &&
    css`
      &.error {
        border: 1px solid #f43f5e;
      }
    `}
`;

export const bigInputStyles = css`
  overflow: hidden;
  font-family: Manrope, sans-serif;
  text-overflow: ellipsis;
  display: flex;
  width: 264px;
  height: 92px;
  @media (min-width: 767px) {
    width: 393px;
    height: 79px;
  }
  @media (min-width: 1279px) {
    width: 393px;
    height: 79px;
  }
  padding: 8px 16px;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid var(--unnamed, #54adff);
  &::placeholder {
    color: #888;
    font-size: 14px;
    @media (min-width: 767px) {
      font-size: 16px;
    }
    @media (min-width: 1279px) {
      font-size: 16px;
    }
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.56px;
  }
  &:focus {
    outline: none;
  }
`;

export const BigInput = styled.textarea`
  ${bigInputStyles}
  ${({ step, adType }) =>
    step === 3 &&
    (adType === 'inGoodHands' || adType === 'lostFound') &&
    css`
      @media (min-width: 767px) {
        height: 182px;
      }
      @media (min-width: 1279px) {
        height: 182px;
      }
    `}
`;

export const BigInputBlock = styled.div`
  position: relative;
  @media (min-width: 767px) {
    margin-left: 25px;
  }
  @media (min-width: 1279px) {
    margin-left: 25px;
  }
`;

export const Step2Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 44px;
  align-items: center;
`;
export const Step2Label = styled.label`
  margin-bottom: 4px;
    @media (min-width: 767px) {
      margin-bottom: 8px;
    }
    @media (min-width: 1279px) {
      margin-bottom: 8px;
    }
  display: block;
  color: #111);
  font-family: Manrope, sans-serif;
  font-size: 14px;
   @media (min-width: 767px) {
   font-size: 20px;
  }
  @media (min-width: 1279px) {
   font-size: 20px;
  }
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const step3LabelStyles = css`
margin-bottom: 4px;
    @media (min-width: 767px) {
      margin-bottom: 8px;
      width:114px;
    }
    @media (min-width: 1279px) {
      margin-bottom: 8px;
      width:114px;
    }
    width:81px;
  display: block;
  color: #111);
  font-family: Manrope, sans-serif;
  font-size: 14px;
   @media (min-width: 767px) {
   font-size: 20px;
  }
  @media (min-width: 1279px) {
   font-size: 20px;
  }
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Step3Label = styled.label`
  ${step3LabelStyles}

  ${({ step, adType }) =>
    step === 3 &&
    (adType === 'sell' || adType === 'inGoodHands' || adType === 'lostFound') &&
    css`
      @media (min-width: 767px) {
        width: 200px;
      }
      @media (min-width: 1279px) {
        width: 200px;
      }
    `}
`;

export const InputBlock = styled.div`
  position: relative;
`;

export const InputBlockTitle = styled.div`
  position: relative;
  margin-bottom: 20px;
  @media (min-width: 767px) {
    margin-left: 25px;
  }
  @media (min-width: 1279px) {
    margin-left: 25px;
  }
`;

export const flexContainerStyles = css`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const FlexContainer = styled.div`
  ${flexContainerStyles}

  ${({ step, adType }) =>
    step === 3 &&
    (adType === 'sell' || adType === 'inGoodHands' || adType === 'lostFound') &&
    css`
      @media (min-width: 767px) {
        flex-direction: column;
      }
      @media (min-width: 1279px) {
        flex-direction: column;
      }
    `}
`;

export const flex3ContainerStyles = css`
  display: flex;
  align-items: center;
  gap: 14px;
  @media (min-width: 767px) {
    margin-left: 32px;
  }
  @media (min-width: 1279px) {
    margin-left: 32px;
  }
`;

export const Flex3Container = styled.div`
  ${flex3ContainerStyles}
  ${({ step, adType }) =>
    step === 3 &&
    (adType === 'sell' || adType === 'inGoodHands' || adType === 'lostFound') &&
    css`
      @media (min-width: 767px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0;
        margin-left: 0;
      }
      @media (min-width: 1279px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0;
        margin-left: 0;
      }
    `}
`;

export const SexBlock = styled.div`
  position: relative;
  margin-bottom: 16px;
  @media (min-width: 767px) {
    margin-bottom: 0;
  }
  @media (min-width: 1279px) {
    margin-bottom: 0;
  }
`;

export const UploadImg = styled.img`
  width: 112px;
  height: 112px;
  @media (min-width: 767px) {
    width: 182px;
    height: 182px;
  }
  @media (min-width: 1279px) {
    width: 182px;
    height: 182px;
  }
`;

export const FlexBlock = styled.div`
  @media (min-width: 767px) {
    gap: 48px;
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 1279px) {
    gap: 48px;
    display: flex;
    flex-direction: column;
  }
`;

export const Flex2Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 767px) {
    flex-direction: row;
    gap: 45px;
    justify-content: center;
  }
  @media (min-width: 1279px) {
    gap: 45px;
    flex-direction: row;
    justify-content: center;
  }
`;

export const SexSpan = styled.span`
  display: flex;
`;

export const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;
