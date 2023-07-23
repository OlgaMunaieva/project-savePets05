// import MainContainer from 'components/mainContainer/MainContainer.styled';
import PictureContainer from 'components/pictureContainer/PictureContainer.styled';
import variables from 'settings/variables';

export default function MainPage() {
  return (
    <>
      {/* <PictureContainer.RelativeContainer> */}
      <PictureContainer.PawContainer>
        {/* <MainContainer> */}
        <div
          style={{
            fontSize: '32px',
            fontWeight: 700,
            lineHeight: '44px',
            letterSpacing: '0em',
            textAlign: 'left',

            // width: '100%',
            height: '100vh',
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            // fontSize: 40,
            color: `${variables.colors.text}`,
          }}
        >
          Take good care of your small pets
        </div>
        {/* </MainContainer> */}
      </PictureContainer.PawContainer>
      {/* </PictureContainer.RelativeContainer> */}
    </>
  );
}
