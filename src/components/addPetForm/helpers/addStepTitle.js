import { StepTitle } from '../AddPetForm.styled';

const AddStepTitle = ({ adType }) => {
  let title = 'Add pet';

  if (adType === 'sell') {
    title = 'Add pet for sell';
  } else if (adType === 'lostFound') {
    title = 'Add lost pet';
  } else if (adType === 'inGoodHands') {
    title = 'Add pet for good hands';
  }

  return <StepTitle>{title}</StepTitle>;
};

export default AddStepTitle;
