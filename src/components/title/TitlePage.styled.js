import styled from 'styled-components';
import variables from 'settings/variables';

export const TitleContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 24px;

  ${variables.breakPoints.tablet} {
    margin-top: 80px;
    margin-bottom: 40px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;

  ${variables.breakPoints.tablet} {
    font-size: 48px;
    line-height: 1.35;
  }
`;
