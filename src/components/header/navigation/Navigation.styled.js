import variables from 'settings/variables';
import styled from 'styled-components';

export const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1279px) and (min-width: 767px) {
    padding-right: ${props => (props['data-islogin'] ? '10px' : '60px')};
  }
`;

export const TitleModal = styled.h2`
  margin-bottom: 14px;
  font-weight: 500;
  font-size: 24x;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.04em;
  ${variables.breakPoints.tablet} {
    margin-bottom: 48px;
    font-size: 36px;
    line-height: 49px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  ${variables.breakPoints.tablet} {
    flex-direction: row;
    gap: 17px;
  }
`;

export const CancelBtn = styled.button`
  width: 100%;
  position: relative;
  padding: 9px 20px;
  border: 2px solid ${variables.colors.buttonsHoverBg};
  border-radius: 40px;
  background-color: transparent;
  color: ${variables.colors.buttonsHoverBg};

  transition: color 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12),
    border-color 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12),
    transform 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);

  ${variables.breakPoints.tablet} {
    width: 129px;
    padding: 9px 34px;
  }

  &:hover,
  &:focus {
    color: ${variables.colors.secondaryText};
    border-color: transparent;
    transform: scale(1.1);

    &::before {
      opacity: 1;
    }
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: inherit;

    position: absolute;
    top: 0;
    left: 0;

    background: ${variables.colors.buttonsGr};
    opacity: 0;

    transition: opacity 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);
  }

  & span {
    position: relative;
    z-index: 5;
    font-weight: 700;
    font-size: 16px;
  }
`;

export const DelBtn = styled.button`
  width: 100%;
  position: relative;
  padding: 9px 20px;
  border-radius: 40px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${variables.colors.buttonsHoverBg};
  color: transparent;

  transition: background-color 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12),
    transform 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);

  ${variables.breakPoints.tablet} {
    width: 129px;
    padding: 9px 34px;
  }

  &:hover,
  &:focus {
    background-color: transparent;
    transform: scale(1.1);

    &::before {
      opacity: 1;
    }
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: inherit;

    position: absolute;
    top: 0;
    left: 0;

    background: ${variables.colors.buttonsGr};
    opacity: 0;

    transition: opacity 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);
  }

  & span {
    position: relative;
    z-index: 5;
    font-weight: 700;
    font-size: 16px;
  }

  & svg {
    position: relative;
    z-index: 5;
    stroke: ${variables.colors.secondaryText};
  }
`;
export const TitleDelBtn = styled.span`
  margin-right: 8px;
  color: ${variables.colors.secondaryText};
`;
export const ModalWraperr = styled.div`
  max-width: 280px;
  padding-top: 60px;
  padding-bottom: 60px;

  ${variables.breakPoints.tablet} {
    padding-top: 108px;
    padding-bottom: 108px;
    min-width: 608px;
  }
`;
