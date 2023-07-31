import variables from 'settings/variables';
import { styled } from 'styled-components';
export const BtnSerch = styled.button`
  width: 32px;
  height: 32px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
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

  color: #888888;
  background: ${variables.colors.cardBgColor};
  outline: none;
  border-radius: 20px;
  border: transparent;
  box-shadow: ${variables.shadow.shadowDefault};
  transition: all 0.25 ease;
  &:hover, &:focus{
     box-shadow: ${variables.shadow.transitionShadow};
      
  }
  
  @media screen and (min-width: 480px) {
    width: 380px;
  }

  @media screen and (min-width: 768px) {
    width: 608px;
    font-size: 20px;
    line-height: 24px;
  }
 
}
`;

export const FormContainer = styled.div`
  position: relative;
`;

export const IconX = styled.svg`
  transition: transform 0.25s ease;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
export const Icon = styled(IconX)``;
export const BtnWrap = styled.div`  border: 'none',
  background-color: inherit;
  position: absolute;
  right: 20px;
  top: 6px;
  display: flex;
  align-items: center;

  
  `;
