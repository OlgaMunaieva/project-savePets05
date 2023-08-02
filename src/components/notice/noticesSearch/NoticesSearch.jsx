import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  BtnDel,
  BtnSerch,
  BtnWrap,
  Form,
  FormContainer,
  IconSearch,
  IconX,
  Input,
} from './NoticesSearch.styled';

const NoticesSearch = ({ setQvery, clean }) => {
  const [search, setSearch] = useState('');

  const handelInputChange = event => {
    const qvery = event.currentTarget.value;
    if (qvery === '') {
      clean('');
    }
    setSearch(event.currentTarget.value.toLowerCase().trim());
  };

  const handelSubmit = event => {
    event.preventDefault();
    setQvery(search);
  };
  const cleanInput = () => {
    setSearch('');
    clean('');
  };
  return (
    <>
      <AnimatePresence>
        <Form onSubmit={handelSubmit}>
          <FormContainer>
            <Input
              type="text"
              placeholder="Search"
              onChange={handelInputChange}
              value={search}
              autoComplete="off"
              autoFocus
            />
            <BtnWrap>
              <BtnSerch type="submit">
                <IconSearch />
              </BtnSerch>
              {search.length > 0 && (
                <motion.div
                  initial={{ opacity: 0.5, scale: 0.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.5, scale: 0.2 }}
                  transition={{ duration: 0.4 }}
                >
                  <BtnDel onClick={() => cleanInput()}>
                    <IconX />
                  </BtnDel>
                </motion.div>
              )}
            </BtnWrap>
          </FormContainer>
        </Form>
      </AnimatePresence>
    </>
  );
};

export default NoticesSearch;
