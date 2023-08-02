import styled from 'styled-components';
import variables from '../../../settings/variables';

const {
  colors: { simpleWhite, text },
} = variables;

export const PetsTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: ${text};
  ${variables.breakPoints.tablet} {
    font-size: 28px;
    letter-spacing: 0em;
    color: ${simpleWhite};
  }
  ${variables.breakPoints.desktop} {
  }
`;

export const PetsHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${variables.breakPoints.tablet} {
  }
  ${variables.breakPoints.desktop} {
  }
`;

export const PetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 280px;
  ${variables.breakPoints.tablet} {
    width: 704px;
    gap: 20px;
  }
  ${variables.breakPoints.desktop} {
    width: 821px;
    gap: 24px;
  }
`;
