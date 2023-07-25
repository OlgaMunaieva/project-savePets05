import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import variables from '../../../settings/variables';

const {
  colors: { cardBgColor, buttonsHoverBg, simpleWhite },
  shadow: { shadowDefault },
} = variables;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-right: 24px;
  padding-bottom: 20px;
  padding-left: 16px;
  width: 395px;
  border-radius: 40px;
  background-color: ${cardBgColor};
  box-shadow: ${shadowDefault};
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
`;

export const StyledInput = styled(Field)`
  padding: 4px 12px;
  width: 255px;
  border: 1px solid ${buttonsHoverBg};
  border-radius: 20px;
  font-family: inherit;
  font-size: 16px;
  color: ${simpleWhite};
`;

export const StyledLabel = styled.label`
  font-family: inherit;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.39;
  letter-spacing: 0.04em;
  color: ${simpleWhite};
`;
