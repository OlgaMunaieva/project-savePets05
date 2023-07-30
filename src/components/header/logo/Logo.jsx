import logo from '../../../images/icons/logo.svg';
import logoMob from '../../../images/icons/logo-mob.svg';
import { LinkLogo, Logo } from './Logo.styled';

const LogoComponent = ({ itsMobile }) => {
  return (
    <LinkLogo to="/main">
      <Logo src={itsMobile ? logoMob : logo} alt="Logo" />
    </LinkLogo>
  );
};

export default LogoComponent;
