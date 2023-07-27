import { MainPageLink } from './NotFoundBtn.styled';
import { ReactComponent as Footprint } from 'images/icons/footprint.svg';

const ErrorPageBtn = () => {
  return (
    <MainPageLink to="/main">
      <span>To main page</span>
      <Footprint />
    </MainPageLink>
  );
};

export default ErrorPageBtn;
