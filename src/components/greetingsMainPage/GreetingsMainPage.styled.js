import variables from 'settings/variables';
import styled from 'styled-components';

const GreetingsMainPage = styled.div`
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: left;

  // width: '100%',
  height: 100vh;
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  // fontSize: 40,
  color: ${variables.colors.text};

  ${variables.breakPoints.desktop} {
    width: 501px;
    height: 264px;
    padding-top: 256px;
    padding-left: 16px;
    font-size: 68px;
    font-weight: 800;
    line-height: 88px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export default GreetingsMainPage;
