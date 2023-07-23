import variables from 'settings/variables';
import styled from 'styled-components';

const GreetingsMainPage = styled.div`
  padding-left: 20px;
  padding-top: 108px;
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: left;
  height: 100vh;
  color: ${variables.colors.text};

  ${variables.breakPoints.tablet} {
    padding-top: 148px;
    padding-left: 32px;
    font-size: 68px;
    line-height: 100px;
  }

  ${variables.breakPoints.desktop} {
    padding-top: 256px;
    padding-left: 16px;
    width: 501px;
    min-height: 264px;
    font-size: 68px;
    font-weight: 800;
    line-height: 88px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export default GreetingsMainPage;
