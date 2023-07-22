import { Link } from 'react-router-dom';
import logo from '../../../images/icons/logo.svg';
import { Logo } from './Logo.styled';

const LogoComponent = () => {
  return (
    <Link to="/">
      <Logo src={logo} alt="Logo" />
    </Link>
  );
};

export default LogoComponent;
