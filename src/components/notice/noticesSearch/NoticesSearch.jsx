import React, { useState } from 'react';
import {
  BtnDel,
  BtnSerch,
  BtnWrap,
  Form,
  FormContainer,
  Icon,
  IconX,
  Input,
} from './NoticesSearch.styled';
import icons from '../../../images/sprite.svg';

const NoticesSearch = () => {
  const [search, setSearch] = useState('');

  const handelInputChange = event => {
    setSearch(event.currentTarget.value.toLowerCase().trim());
  };

  const cleanInput = () => {
    setSearch('');
  };
  return (
    <>
      <Form>
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
              <Icon width={24} height={24}>
                <use href={icons + '#icon-search'}></use>
              </Icon>
            </BtnSerch>
            {search.length > 0 && (
              <BtnDel onClick={() => cleanInput()}>
                <IconX width={24} height={24}>
                  <use href={icons + '#icon-cross'}></use>
                </IconX>
              </BtnDel>
            )}
          </BtnWrap>
        </FormContainer>
      </Form>
    </>
  );
};

export default NoticesSearch;
