import React from 'react';
import BigDog from '../../../images/homeImages/mobile/big-dog.jpg';
import BigDog2x from '../../../images/homeImages/mobile/big-dog@2x.jpg';
import BigDogTablet from '../../../images/homeImages/tablet/big-dog.jpg';
import BigDogTablet2x from '../../../images/homeImages/tablet/big-dog@2x.jpg';
import BigDogDesktop from '../../../images/homeImages/desktop/big-dog.jpg';
import BigDogDesktop2x from '../../../images/homeImages/desktop/big-dog@2x.jpg';

const HomeImages = () => {
  return (
    <div>
      <picture>
        <source
          srcset={`${BigDogDesktop} 1x, ${BigDogDesktop2x} 2x`}
          media="(min-width: 1280px)"
          type="image/jpeg"
          width="532"
          height="537"
        />
        <source
          srcset={`${BigDogTablet} 1x, ${BigDogTablet2x} 2x`}
          media="(min-width: 768px)"
          type="image/jpeg"
          width="532"
          height="537"
        />
        <source
          srcset={`${BigDog} 1x, ${BigDog2x} 2x`}
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
