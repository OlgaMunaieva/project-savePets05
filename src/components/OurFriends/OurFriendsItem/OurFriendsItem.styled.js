import styled from 'styled-components';
import variables from 'settings/variables';

export const FriendCard = styled.li`
  border-radius: 40px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  background-color: #ffffff;
  max-width: 280px;
  height: auto;
  padding: 16px 31px;
  /* transition: ${variables.transition.transitionColor}; */
  transition: 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);

  ${variables.breakPoints.tablet} {
    min-width: 336px;
  }

  ${variables.breakPoints.desktop} {
    min-width: 394px;
  }

  &:hover,
  &:focus {
    transform: scale(1.02);
    box-shadow: 3px 8px 14px rgba(116, 177, 232, 0.55);
  }

  cursor: pointer;
`;

export const FriendTitle = styled.a`
  display: block;
  color: ${variables.colors.buttonsHoverBg};
  text-align: center;
  margin-bottom: 16px;
  font-size: 20px;
`;

export const FriendImg = styled.img`
  width: 100px;
  height: 68px;

  ${variables.breakPoints.tablet} {
    width: 124px;
    height: 88px;
  }

  ${variables.breakPoints.desktop} {
    width: 146px;
    height: 104px;
  }
`;

export const FriendWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FriendThumb = styled.div`
  display: flex;
  gap: 12px;
`;

export const FriendInfoThumb = styled.div`
  display: flex;
  flex-direction: column;

  &:hover,
  &:focus {
    color: ${variables.colors.buttonsHoverBg};
  }
`;

export const FriendInfoTitle = styled.p`
  font-size: 12px;
  font-weight: medium;

  ${variables.breakPoints.tablet} {
    font-size: 14px;
  }

  ${variables.breakPoints.desktop} {
    font-size: 16px;
  }
`;

export const FriendInfoData = styled.p`
  font-size: 12px;
  font-weight: normal;

  ${variables.breakPoints.tablet} {
    font-size: 14px;
  }

  ${variables.breakPoints.desktop} {
    font-size: 16px;
  }
`;
