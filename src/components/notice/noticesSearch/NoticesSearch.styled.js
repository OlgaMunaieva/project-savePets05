import variables from 'settings/variables';
import { styled } from 'styled-components';

import { ReactComponent as Search } from 'images/icons/search.svg';
import { ReactComponent as Cross } from 'images/icons/cross-small.svg';

export const BtnSerch = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0 0;
  margin-left: 10px;
`;

export const Form = styled.form`
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BtnDel = styled(BtnSerch)`
  stroke: ${variables.colors.accentHeaderButton};
`;
export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding-left: 20px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  min-width: 280px;
  color: #888888;
  background: ${variables.colors.cardBgColor};
  outline: none;
  border-radius: 20px;
  border: transparent;
  box-shadow: ${variables.shadow.shadowDefault};
  transition: all 0.25 ease;
  &:hover,
  &:focus {
    box-shadow: ${variables.shadow.transitionShadow};
  }

  @media screen and (min-width: 768px) {
    width: 608px;
    font-size: 20px;
    line-height: 24px;
  }
`;

export const FormContainer = styled.div`
  position: relative;
`;

export const IconX = styled(Cross)`
  transition: transform 0.25s ease;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
export const IconSearch = styled(Search)``;

export const BtnWrap = styled.div`  border: 'none',
  background-color: inherit;
  position: absolute;
  right: 20px;
  top: 9px;
  display: flex;
  align-items: center;
  justify-content: center;

  
  `;
