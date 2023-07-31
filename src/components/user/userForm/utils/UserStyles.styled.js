import styled from 'styled-components';
import variables from '../../../../settings/variables';

const {
  colors: { simpleWhite },
} = variables;

export const UserPageContainer = styled.div`
  width: 100%;

  margin: 24px auto;
  margin-bottom: 40px;

  ${variables.breakPoints.tablet} {
    width: 768px;
  }
  ${variables.breakPoints.desktop} {
    margin-top: 62px;
    width: 1248px;
    display: flex;
    gap: 32px;
  }
`;
export const UserTitle = styled.p`
  font-size: 28px;
  font-weight: 500;
  color: ${simpleWhite};
  line-height: 1.36;
  letter-spacing: 0em;
  margin-bottom: 24px;
`;
