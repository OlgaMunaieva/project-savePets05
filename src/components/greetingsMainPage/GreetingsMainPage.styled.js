import variables from 'settings/variables';
import styled from 'styled-components';

const GreetingsMainPage = styled.div`
  /* max-width: 280px; */
  /* height: 88px; */
  margin-top: 108px;
  margin-left: 20px;
  font-family: Manrope;
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: left;
  color: ${variables.colors.text};

  ${variables.breakPoints.mobile} {
    font-size: 68px;
    font-weight: 700;
    line-height: 100px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export default GreetingsMainPage;
