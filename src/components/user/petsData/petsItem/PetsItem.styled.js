import styled from 'styled-components';
import variables from '../../../../settings/variables';

const {
  colors: { cardBgColor, shadowDefault },
} = variables;

export const PetsCard = styled.li`
  position: relative;
  display: flex;

  /* flex-direction: column; */
  padding: 20px;
  width: 821px;
  border-radius: 40px;
  background-color: ${cardBgColor};
  box-shadow: ${shadowDefault};
`;

export const PetsImg = styled.img`
  height: 161px;
  width: 161px;
  object-fit: cover;
  border-radius: 40px;
`;

export const PetsInfoContainer = styled.div`
  padding-left: 32px;
`;

export const PetsInfoTitle = styled.span`
  font-weight: 600;
`;

export const PetsInfoText = styled.p`
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.04em;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;
