import { StyledButton } from './Button.styled';

export default function Button({ type, content, $darkType }) {
  return (
    <StyledButton type={type} $darkType={$darkType}>
      {content}
    </StyledButton>
  );
}
