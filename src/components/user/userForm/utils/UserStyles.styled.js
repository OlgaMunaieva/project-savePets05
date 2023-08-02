import styled from 'styled-components';
import variables from '../../../../settings/variables';

const {
  colors: { simpleWhite, cardBgColor, text },
  shadow: { shadowDefault },
} = variables;

export const UserPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 46px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 137px;
  ${variables.breakPoints.mobile} {
    width: 280px;
  }

  ${variables.breakPoints.tablet} {
    width: 768px;
    gap: 40px;
    padding-top: 60px;
    padding-bottom: 121px;
  }
  ${variables.breakPoints.desktop} {
    width: 1248px;
    flex-direction: row;
    gap: 32px;
    padding-top: 62px;
    padding-bottom: 121px;
  }
`;

export const UserTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: ${text};
  margin-bottom: 18px;

  ${variables.breakPoints.tablet} {
    font-size: 28px;
    letter-spacing: 0em;
    margin-bottom: 24px;
    color: ${simpleWhite};
  }
  ${variables.breakPoints.desktop} {
  }
`;

export const UserContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25px;

  width: 280px;
  /* height: 517px; */
  padding-top: 20px;
  padding-right: 8px;
  padding-bottom: 25px;
  padding-left: 8px;
  border-radius: 20px;
  background-color: ${cardBgColor};
  box-shadow: ${shadowDefault};
  ${variables.breakPoints.tablet} {
    width: 704px;
    padding-right: 76px;
    padding-bottom: 21px;
    padding-left: 20px;
    border-radius: 40px;
    gap: 15px;
  }
  ${variables.breakPoints.desktop} {
    width: 395px;
    padding-right: 24px;
    padding-bottom: 20px;
    padding-left: 16px;
    gap: 23px;
  }
`;
