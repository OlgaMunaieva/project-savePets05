import variables from 'settings/variables';
import { styled } from 'styled-components';
import { BtnLearn } from '../noticeCategoryItem/NoticeCategoryItem.styled';

export const ExitButton = styled.button`
  position: absolute;
  border: none;
  padding: 0;
  background-color: transparent;
  top: 12px;
  right: 12px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  z-index: 100;
  transition: ${variables.transition.transitionShadow};
  &:hover,
  &:focus {
    box-shadow: ${variables.shadow.shadowHover};
    border-radius: 50%;
  }

  ${variables.breakPoints.tablet} {
    top: 23px;
    right: 26px;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 280px;
  /* min-height: 786px; */
  padding-top: 44px;
  padding-left: 20px;
  padding-right: 20px;
  width: fit-content;
  background-color: white;
  border-radius: 20px;
  /* max-height: 90vh; */
  /* overflow-y: auto; */
  ${variables.breakPoints.tablet} {
    min-width: 681px;
    min-height: 540px;
    padding-top: 32px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const ImgWrapper = styled.div`
  margin: 0 auto;
  height: 240px;
  width: 240px;
  border-radius: 0px 0px 40px 40px;
  /* margin-bottom: 20px; */
  position: relative;
  ${variables.breakPoints.tablet} {
    margin: 0;
    width: 262px;
    height: 298px;
  }
`;

export const Img = styled.img`
  border-radius: 0px 0px 40px 40px;
  width: 240px;
  height: 240px;
  object-fit: cover;
  ${variables.breakPoints.tablet} {
    width: 262px;
    height: 298px;
  }
`;

export const Wrapper = styled.div`
  ${variables.breakPoints.tablet} {
    display: flex;
    gap: 24px;
    margin-bottom: 28px;
  }
`;

export const Status = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export const StatusText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 17px;
  width: 126px;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: ${variables.colors.simpleWhite};
  background-color: ${variables.colors.cardsButtonBg};
  border-radius: 0px 16px 16px 0px;
`;

export const MainDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 70vh;
  overflow-y: auto;
  margin-bottom: 5px;
  margin-top: 5px;
  /* padding-top: 12px; */
  ${variables.breakPoints.tablet} {
    flex-direction: column;
    margin-bottom: 70px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* padding-top: 12px; */
`;

export const Title = styled.p`
  word-wrap: break-word;
  width: 231px;
  margin-bottom: 20px;
  max-height: 66px;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const InformationWrapper = styled.div``;
export const DataWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 8px;
`;
export const Data = styled.div`
  width: 70px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: 0px;
`;
export const Details = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 0px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  text-align: left;
`;

export const DescriptionWrapper = styled.div`
  margin-top: 5px;
  margin-bottom: 12px;
  min-height: 30px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.35;
  letter-spacing: 0.04em;
  text-align: left;
`;

export const ButtonsWrapper = styled.div`
  ${variables.breakPoints.tablet} {
    display: flex;
    flex-direction: row-reverse;
    gap: 17px;
    justify-content: end;
  }
`;

export const ContactBtn = styled(BtnLearn)`
  margin-bottom: 8px;
  ${variables.breakPoints.tablet} {
    margin: 0;
    width: 129px;
    height: 40px;
  }
`;

export const FavoriteBtn = styled(ContactBtn)`
  margin-bottom: 16px;
  ${variables.breakPoints.tablet} {
    margin: 0;
    width: 129px;
    height: 40px;
    padding: 0;
  }
`;
