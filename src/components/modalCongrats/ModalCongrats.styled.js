import styled from 'styled-components';
import variables from '../../settings/variables';

const {
  colors: { simpleWhite, buttonsHoverBg },
} = variables;

export const StyledTitle = styled.h2`
  font-size: 36px;
  font-weight: 500;
  line-height: 1.36;
  color: ${simpleWhite};
  text-align: center;
  margin-bottom: 52px;
`;

export const StyledContainer = styled.div`
  padding: 30px 100px;
  text-align: center;
`;

export const StyledText = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.36;
  margin-bottom: 60px;
`;

export const StyledButton = styled.button`
  margin: 0 auto;
  padding: 9px 54.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
  color: #fef9f9;
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  background-color: ${buttonsHoverBg};
  border-radius: 40px;
  border: transparent;
  cursor: pointer;
`;
