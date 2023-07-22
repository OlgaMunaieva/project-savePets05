import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Footprint } from '../../../../images/icons/footprint.svg';
import variables from 'settings/variables';

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const ListItem = styled.li``;
export const LinkLogin = styled(Link)`
  border-radius: 40px;
  display: flex;
  align-items: center;
  padding: 8px 41px;
  color: ${variables.colors.secondaryText};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  background-color: ${variables.colors.accentHeaderButton};
  transition: all 0.25s ease;
  &:hover,
  &:focus {
    box-shadow: ${variables.shadow.shadowHover};
  }
`;

export const LinkReg = styled(LinkLogin)`
  font-weight: 600;
  padding: 6px 20px;
  background-color: transparent;
  color: ${variables.colors.accentHeaderButton};
  border: 2px solid ${variables.colors.accentHeaderButton};
`;

export const Text = styled.span``;
export const Icon = styled(Footprint)`
  margin-left: 8px;
`;
