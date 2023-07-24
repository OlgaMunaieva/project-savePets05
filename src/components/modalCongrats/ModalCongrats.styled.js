import styled from 'styled-components';
import variables from '../../settings/variables';

const {
  colors: { simpleWhite, buttonsHoverBg },
} = variables;

export const StyledTitle = styled.h2`
  font-size: 36px;
  font-weight: 500;
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
  margin-bottom: 60px;
`;

export const StyledButton = styled.button`
  width: 250px;
  padding: 8px 28px;
  text-align: center;
  color: #fef9f9;
  font-weight: 700;
  background-color: ${buttonsHoverBg};
  border-radius: 40px;
  border: transparent;
  cursor: pointer;
`;
