import MainContainer from 'components/mainContainer/MainContainer.styled';
import PictureContainer from 'components/pictureContainer/PictureContainer.styled';
import variables from 'settings/variables';

export default function MainPage() {
  return (
    <>
      <MainContainer>
        <PictureContainer.RelativeContainer>
          <PictureContainer.PawContainer>
            <div
              style={{
                width: '100vw',
                height: '100vh',
                // display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 40,
                color: `${variables.colors.text}`,
              }}
            >
              Take good care of your small pets
            </div>
          </PictureContainer.PawContainer>
        </PictureContainer.RelativeContainer>
      </MainContainer>
    </>
  );
}
