import styled from 'styled-components';
import variables from 'settings/variables';

export const Container = styled.div`
  width: 100%;
  // min-width: 280px;
  margin: 24px auto;
  margin-bottom: 40px;

  ${variables.breakPoints.tablet} {
    width: 768px;
    // margin-top: 40px;
    // margin-bottom: 60px;
  }
  ${variables.breakPoints.desktop} {
    width: 1248px;
    // margin-top: 42px;
    // margin-bottom: 68px;
  }
`;

export const List = styled.ul`
  margin: 0 auto;
  display: flex;
  row-gap: 24px;
  flex-direction: column;
  margin-bottom: 60px;
  width: 100%;
  //   list-style: none;
  align-items: center;

  ${variables.breakPoints.tablet} {
    gap: 32px;
    flex-direction: row;
    flex-wrap: wrap;
    // width: 704px;
  }

  ${variables.breakPoints.desktop} {
    width: 1248px;
  }
`;

export const Notification = styled.div`
  display: flex;
  justify-content: center;
  // font-size: 35px;
  // font-weight: bold;
  color: ${variables.colors.simpleWhite};
  margin: 0 auto;
  padding: 20px 0;
`;
