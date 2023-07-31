import styled from 'styled-components';
import variables from '../../../settings/variables';

const {
  colors: { simpleWhite },
} = variables;

export const PetsTitle = styled.p`
  font-size: 28px;
  font-weight: 500;
  color: ${simpleWhite};
  line-height: 1.36;
  letter-spacing: 0em;
  margin-bottom: 24px;
`;

export const PetsHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
`;

export const PetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
