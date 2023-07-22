import MainContainer from 'components/mainContainer/MainContainer.styled';
import variables from 'settings/variables';

export default function MainPage() {
  return (
    <>
      <MainContainer>
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: `${variables.colors.text}`,
            border: 2,
          }}
        >
          Take good care of your small pets
        </div>
      </MainContainer>
    </>
  );
}
