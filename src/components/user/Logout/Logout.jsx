import { StyledButton } from './Logout.styled';
import spriteImage from '../../../images/sprite.svg';

export default function Logout() {
  return (
    <>
      <StyledButton>
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <use href={spriteImage + '#icon-logout'} />
        </svg>
        <p>Log Out</p>
      </StyledButton>
    </>
  );
}
