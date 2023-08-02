import styled from 'styled-components';
import variables from 'settings/variables';

export const ModalWrapper = styled.div`
  width: 280px;
  padding-top: 80px;
  padding-right: 12px;
  padding-left: 12px;
  padding-bottom: 60px;
  border-radius: 40px;

  ${variables.breakPoints.tablet} {
    padding: 60px;
    width: 608px;
  }
  //   ${variables.breakPoints.desktop} {
  //     width: 288px;
  //   }
`;

export const TitleModal = styled.h2`
  margin-bottom: 14px;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.04em;
  ${variables.breakPoints.tablet} {
    margin-bottom: 48px;
    font-size: 36px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  ${variables.breakPoints.tablet} {
    flex-direction: row;
    gap: 17px;
  }
`;
export const Description = styled.p`
  margin-bottom: 44px;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  letter-spacing: -0.01em;

  ${variables.breakPoints.tablet} {
    font-size: 20px;
  }

  & span {
    font-weight: 700;
  }
`;
