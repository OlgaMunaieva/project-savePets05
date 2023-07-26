import variables from 'settings/variables';
import styled from 'styled-components';

const GreetingsMainPage = styled.div`
  padding-left: 20px;
  padding-top: 108px;
  max-width: 280px;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.375;
  letter-spacing: 0em;
  text-align: left;
  height: 100vh;
  color: ${variables.colors.text};

  ${variables.breakPoints.tablet} {
    padding-top: 148px;
    padding-left: 32px;
    font-size: 68px;
    line-height: 1.47;
  }

  ${variables.breakPoints.desktop} {
    padding-top: 256px;
    padding-left: 16px;
    max-width: 510px; // по макету 501, но текст не располагается как нужно
    min-height: 264px;
    font-size: 68px;
    font-weight: 800;
    line-height: 1.3;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export default GreetingsMainPage;
