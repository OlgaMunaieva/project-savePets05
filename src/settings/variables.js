const colors = {
  accentHeaderButton: '#FFC107',
  background: '#FDF7F2',
  text: '#000000',
  secondaryText: '#fef9f9',
  buttonsGr: 'linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)',
  buttonsHoverBg: '#54ADFF',
  cardsButtonBg: '#CCE4FB',
  accentAddPetCard: '#00C3AD',
  accentInputInvalidValue: '#F43F5E',
  simpleBlack: '#111111',
  placeHolderColor: '#888888',
  simpleWhite: '#111111',
  cardBgColor: '#ffffff',
  overlyColor: 'rgba(97, 97, 97, 0.6)',
};

const shadow = {
  shadowDefault: '3px 8px 14px 0px #88C6FD30',
  shadowHover: '7px 13px 14px 0px #74B1E83D',
};

const transition = {
  transitionColor: 'color 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12)',
  transitionShadow: 'box-shadow 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12)',
};

const breakPoints = {
  mobile: '@media screen and (min-width: 480px)',
  tablet: '@media screen and (min-width: 767px)',
  desktop: '@media screen and (min-width: 1280px)',
};

const visualHidden = {
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1,
  height: 1,
  overflow: 'hidden',
  border: 0,
  padding: 0,
  clip: 'rect(0 0 0 0)',
  WebkitClipPath: 'inset(50%)',
  clipPath: 'inset(50%)',
  margin: -1,
};

const variables = {
  colors,
  shadow,
  transition,
  breakPoints,
  visualHidden,
};

export default variables;
