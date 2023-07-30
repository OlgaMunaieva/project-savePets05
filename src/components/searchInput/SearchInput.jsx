import MainContainer from 'components/mainContainer/MainContainer.styled';
import StyledInput from './SearchInput.styled';

export const SearchInput = ({setInput}) => {
  return <StyledInput onChange={e=>setInput(e.target.value)} />;
};
