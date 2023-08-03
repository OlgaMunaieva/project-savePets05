import styled from 'styled-components';
import variables from '../../settings/variables';

const {
  colors: { simpleWhite, buttonsHoverBg, accentHeaderButton },
} = variables;

export const StyledTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.36;
  color: ${simpleWhite};
  text-align: center;
  margin-bottom: 24px;

  @media (min-width: 767px) {
    font-size: 36px;
    margin-bottom: 52px;
    min-width: 350px;
  }
`;

export const StyledContainer = styled.div`
  text-align: center;
  padding: 60px 16px;

  @media (min-width: 767px) {
    padding: 60px 130px;
  }
`;

export const StyledText = styled.p`
  font-weight: 500;
  line-height: 1.36;
  margin-bottom: 40px;

  @media (min-width: 767px) {
    font-size: 24px;
    margin-bottom: 60px;
  }
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
  width: 250px;
  cursor: pointer;

  transition: all 0.5s ease;

  &:hover {
    background-color: ${accentHeaderButton};
    box-shadow: 5px 10px 20px 0px rgba(0, 0, 0, 0.2);
  }
`;
