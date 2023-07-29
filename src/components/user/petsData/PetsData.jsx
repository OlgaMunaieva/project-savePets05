import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

export default function PetsData() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    console.log('bibi');
    navigate('/add-pet');
  };

  return (
    <>
      <p>PetsData</p>
      <Button
        type="button"
        $content="Add Pet"
        $darkType
        onClick={handleNavigate}
      />
    </>
  );
}
