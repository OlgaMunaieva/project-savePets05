import React from 'react';
import { Link, List, ListItems, NavTag } from './Nav.styled';
import { useEffect, useState } from 'react';

const Nav = () => {
  const [size, setSize] = useState(null);
  const resizeHandler = () => {
    const clientWidth = window.innerWidth;
    setSize(clientWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <NavTag>
      <List>
        <ListItems>
          <Link to="/news">News</Link>
        </ListItems>
        <ListItems>
          <Link to="/notices">Find pet</Link>
        </ListItems>
        <ListItems>
          <Link to="/friends">Our friends</Link>
        </ListItems>
      </List>
    </NavTag>
  );
};

export default Nav;
