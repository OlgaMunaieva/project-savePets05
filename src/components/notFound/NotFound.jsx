import ErrorCat from '../../images/homeImages/mobile/error-cat-mobile.png';
import ErrorCat2x from '../../images/homeImages/mobile/error-cat-mobile@2x.png';
import ErrorCatTablet from '../../images/homeImages/tablet/error-cat-tablet.png';
import ErrorCatTablet2x from '../../images/homeImages/tablet/error-cat-tablet@2x.png';
import ErrorCatDesktop from '../../images/homeImages/desktop/error-cat-desktop.png';
import ErrorCatDesktop2x from '../../images/homeImages/desktop/error-cat-desktop@2x.png';
import { NotFoundContainer, Picture } from './NotFound.styled';
import ErrorPageBtn from './notFoundBtn/NotFoundBtn';

const NotFound = () => {
  return (
    <>
      <NotFoundContainer>
        <source
          srcSet={`${ErrorCatDesktop} 1x, ${ErrorCatDesktop2x} 2x`}
          media="(min-width: 1280px)"
          type="image/jpeg"
          width="822"
          height="360"
        />
        <source
          srcSet={`${ErrorCatTablet} 1x, ${ErrorCatTablet2x} 2x`}
          media="(min-width: 768px)"
          type="image/jpeg"
          width="704"
          height="308"
        />
        <source
          srcSet={`${ErrorCat} 1x, ${ErrorCat2x} 2x`}
          media="(max-width: 767px)"
          type="image/jpeg"
          width="280"
          height="123"
        />
        <Picture
          src={ErrorCatDesktop}
          srcSet={`${ErrorCatDesktop2x} 2x`}
          alt="Big dog"
          width="822"
          height="360"
        />
      </NotFoundContainer>
      <ErrorPageBtn />
    </>
  );
};

export default NotFound;
