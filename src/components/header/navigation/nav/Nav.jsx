import React from 'react';
import { Link, List, ListItems, NavTag } from './Nav.styled';

const Nav = () => {
  return (
    <NavTag>
      <List>
        <ListItems>
          <Link to="/news">News</Link>
        </ListItems>
        <ListItems>
          <Link to="/notices/sell">Find pet</Link>
        </ListItems>
        <ListItems>
          <Link to="/friends">Our friends</Link>
        </ListItems>
      </List>
    </NavTag>
  );
};

export default Nav;
