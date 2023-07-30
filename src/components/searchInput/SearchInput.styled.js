import { styled } from 'styled-components';

const StyledInput = styled.input`
  width: 608px;
  height: 44px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  margin: 0 auto;
  border: 0;
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-align: left;

  display: flex;
  &:focus {
    border: 0;
  }
`;

export default StyledInput;
