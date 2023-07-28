import { Link } from 'react-router-dom';
import styled from 'styled-components';
import variables from 'settings/variables';

export const MainPageLink = styled(Link)`
  width: 248px;
  height: 40px;
  margin: 60px auto;
  border-radius: 40px;
  display: flex;
  padding: 8px 28px 8px 28px;
  gap: 12px;
  align-items: center;
  justify-content: center;
  color: ${variables.colors.secondaryText};
  font-weight: 700;
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  background-color: ${variables.colors.buttonsHoverBg};
  transition: all 0.25s ease;
  &:hover,
  &:focus {
    box-shadow: ${variables.shadow.shadowHover};
  }
  ${variables.breakPoints.tablet} {
    margin-top: 70px;
  }
  ${variables.breakPoints.desktop} {
    margin-top: 18px;
  }
`;
