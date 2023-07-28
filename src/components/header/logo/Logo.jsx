import logo from '../../../images/icons/logo.svg';
import logoMob from '../../../images/icons/logo-mob.svg';
import { LinkLogo, Logo } from './Logo.styled';

const LogoComponent = ({ itsMobile, toggle }) => {
  return (
    <LinkLogo to="/main" onClick={() => toggle()}>
      {itsMobile ? (
        <Logo src={logoMob} alt="Logo" />
      ) : (
        <Logo src={logo} alt="Logo" />
      )}
    </LinkLogo>
  );
};

export default LogoComponent;
