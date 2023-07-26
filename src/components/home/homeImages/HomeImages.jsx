import React from 'react';
import BigDog from '../../../images/homeImages/mobile/big-dog-mobile.png';
import BigDog2x from '../../../images/homeImages/mobile/big-dog-mobile@2x.png';
import BigDogTablet from '../../../images/homeImages/tablet/big-dog-tablet.png';
import BigDogTablet2x from '../../../images/homeImages/tablet/big-dog-tablet@2x.png';
import BigDogDesktop from '../../../images/homeImages/desktop/big-dog-desktop.png';
import BigDogDesktop2x from '../../../images/homeImages/desktop/big-dog-desktop@2x.png';
// import spriteImage from '../../../images/sprite.svg';
// import BigDogDesktop3 from '../../../images/homeImages/23aab0bf-039c-48f9-a1b4-b12103fca523 1.jpg';
// import BigDogDesktop3x from '../../../images/homeImages/23aab0bf-039c-48f9-a1b4-b12103fca523 1 (1).jpg';

const HomeImages = () => {
  return (
    <div>
      {/* <div
        style={{
          background: `url(${spriteImage + '#icon-big-dog'}) no-repeat`,
          width: '390px',
          height: '390px',
          // Додайте інші стилі за необхідністю
        }}
      >
        <img
          src={BigDogDesktop3}
          srcSet={`${BigDogDesktop3x} 2x`}
          alt="Big dog"
          width="390"
          height="390"
        />
      </div>
      <svg width="390" height="390" fill="currentColor" viewBox="0 0 24 24">
        <use href={spriteImage + '#icon-big-dog'} />
      </svg> */}
      <picture>
        <source
          srcSet={`${BigDogDesktop} 1x, ${BigDogDesktop2x} 2x`}
          media="(min-width: 1280px)"
          type="image/jpeg"
          width="532"
          height="537"
        />
        <source
          srcSet={`${BigDogTablet} 1x, ${BigDogTablet2x} 2x`}
          media="(min-width: 768px)"
          type="image/jpeg"
          width="532"
          height="537"
        />
        <source
          srcSet={`${BigDog} 1x, ${BigDog2x} 2x`}
          media="(max-width: 767px)"
          type="image/jpeg"
          width="256"
          height="258"
        />
        <img
          src={BigDogDesktop}
          srcSet={`${BigDogDesktop2x} 2x`}
          alt="Big dog"
          width="532"
          height="537"
        />
      </picture>
    </div>
  );
};

export default HomeImages;
