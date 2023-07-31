import { styled } from 'styled-components';
import variables from 'settings/variables';
export const StyledItem = styled.li`
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  background: var(--unnamed, #fff);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  position: relative;
  padding-bottom: 12px;

  ${variables.breakPoints.tablet} {
    width: 336px;
  }

  ${variables.breakPoints.desktop} {
    width: 395px;
  }

  &::before{
    content:'',
    width: 395px;
    height: 8px;
    background: #111;
  }

`;

export const NewsTitle = styled.h3`
  margin-top: 16px;
  color: #111;
  font-family: 'Manrope';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.24px;
  padding: 0 12px;
`;

export const NewsText = styled.p`
  margin-top: 16px;
  color: var(--unnamed, #111);
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0 12px;
`;

export const Datebox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  padding: 0 12px;
`;

export const NewsMedia = styled.img`
  width: 395px;
  height: 252px;
  border-radius: 20px;
`;
