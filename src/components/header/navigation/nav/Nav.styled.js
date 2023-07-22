import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import colors from 'settings/variables';

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 40px;
  margin: 0px;
  padding: 0px;
`;

export const ListItems = styled.li``;
export const NavTag = styled.nav``;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${colors.colors.simpleWhite};
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;
  transition: ${colors.transition.transitionColor};
  &: hover, &: active, &: focus{
    color: ${colors.colors.accentHeaderButton};
  }

`;
