import { StyledButton } from './Button.styled';

export default function Button({ type, $content, $darkType, style = {} }) {
  return (
    <StyledButton type={type} $darkType={$darkType} style={style}>
      {$content}
    </StyledButton>
  );
}
