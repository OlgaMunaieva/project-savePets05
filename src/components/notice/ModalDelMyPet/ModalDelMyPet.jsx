import icons from '../../../images/icons/icons-card.svg';
import { Icon } from '../noticeCategoryItem/NoticeCategoryItem.styled';
import {
  BtnWrapper,
  CancelBtn,
  DelBtn,
  Description,
  ModalWrapper,
  TitleDelBtn,
  TitleModal,
} from './ModalDelMyPet.styled';
import Modal from '../../../pages/ModalApproveAction';

export const ModalConfirmDelete = ({
  closeModal,
  handleDelete,
  title = 'Delete advertisement?',
  name,
}) => {
  return (
    <Modal closeModal={() => closeModal()}>
      <ModalWrapper>
        <TitleModal>{title}</TitleModal>
        <Description>
          Are you sure you want to delete <span>{name}</span>? You can`t undo
          this action.
        </Description>
        <div>
          <BtnWrapper>
            <CancelBtn onClick={() => closeModal()}>
              <span>Cancel</span>
            </CancelBtn>
            <DelBtn
              onClick={() => {
                handleDelete();
                closeModal();
              }}
            >
              <TitleDelBtn>Yes</TitleDelBtn>
              <Icon width={22} height={22}>
                <use href={icons + '#trash'}></use>
              </Icon>
            </DelBtn>
          </BtnWrapper>
        </div>
      </ModalWrapper>
    </Modal>
  );
};
