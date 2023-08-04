import styled from 'styled-components';
import variables from 'settings/variables';

export const WrapperFilter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  position: relative;

  ${variables.breakPoints.tablet} {
    margin-top: 43px;
  }
`;
export const WrapperBtn = styled.div`
  display: flex;
  gap: 12px;
  ${variables.breakPoints.tablet} {
  }
`;
