import styled from 'styled-components';

export const Container = styled.div`
  width: 618px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  font-family: Manrope, sans-serif;

  @media (max-width: 768px) {
    width: 240px;
    max-height: 476px;
    overflow: scroll;
  }
`;

export const PetMainWrapper = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 262px;
  height: 298px;
  flex-shrink: 0;


  @media (max-width: 768px) {
    width: 240px;
    height: 240px;
  }
`;

export const PetImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 0 0 40px 40px;
`;

export const ImageCaption = styled.p`
  margin: 0;
  position: absolute;
  top: 16px;
  left: 0;
  padding: 12px 11px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 14px;
  background-color: #cce4fb;
  border-radius: 0 50px 50px 0;

  @media (max-width: 768px) {
    padding: 11px;
  }
`;

export const PetDetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 298px;

  @media (max-width: 768px) {
    max-width: 225px;
    height: 220px;
  }
`;

export const PetTitle = styled.p`
  margin: 0;
  color: #000;
  font-family: inherit;
  font-size: 28px;
  font-weight: 700;
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const PetCharacteristicsList = styled.ul`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
`;

export const CharacteristicItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const PetCharacteristicsProperty = styled.span`
  color: #000;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const PetCharacteristicsValue = styled.p`
  margin: 0;
  color: #000;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const PetCharacteristicsValueLink = styled.a`
  color: #ffc107;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  text-decoration-line: underline;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const BottomBlock = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 70px;
  height: 100%;
  justify-content: space-between;
  align-items: flex-end;


  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const CommentsParagraph = styled.p`
  margin: 0;
  align-self: start;

  color: #000;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.64px;
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 17px;

  @media (max-width: 768px) {
    width: 100%;
    gap: 8px;
    flex-direction: column-reverse;
  }
`;

export const ModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  box-sizing: border-box;
  border-radius: 40px;
  border: 2px solid #54adff;
  cursor: pointer;

  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.64px;

  @media (max-width: 768px) {
    font-size: 14px;
    width: 100%;
  }
`;

export const AddToButton = styled(ModalButton)`
  background-color: #54adff;
  color: #fef9f9;
`;

export const StyledHeartIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 8px;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const ContactButton = styled(ModalButton)`
  background-color: transparent;
  color: #54adff;
`;
