import React from 'react';
import BigDog from '../../../images/homeImages/mobile/big-dog-mobile.png';
import BigDog2x from '../../../images/homeImages/mobile/big-dog-mobile@2x.png';
import SmallDog from '../../../images/homeImages/mobile/small-dog-mobile.png';
import SmallDog2x from '../../../images/homeImages/mobile/small-dog-mobile@2x.png';
import Cat from '../../../images/homeImages/mobile/cat-mobile.png';
import Cat2x from '../../../images/homeImages/mobile/cat-mobile@2x.png';
import BigDogTablet from '../../../images/homeImages/tablet/big-dog-tablet.png';
import BigDogTablet2x from '../../../images/homeImages/tablet/big-dog-tablet@2x.png';
import BigDogDesktop from '../../../images/homeImages/desktop/big-dog-desktop.png';
import BigDogDesktop2x from '../../../images/homeImages/desktop/big-dog-desktop@2x.png';
import Pictures from './HomeImages.styled';
// import spriteImage from '../../../images/sprite.svg';
// import BigDogDesktop3 from '../../../images/homeImages/23aab0bf-039c-48f9-a1b4-b12103fca523 1.jpg';
// import BigDogDesktop3x from '../../../images/homeImages/23aab0bf-039c-48f9-a1b4-b12103fca523 1 (1).jpg';

const HomeImages = () => {
  return (
    <Pictures.MainPageContainer>
      <Pictures.BigDogContainer>
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
        <Pictures.BigDogImg
          src={BigDogDesktop}
          srcSet={`${BigDogDesktop2x} 2x`}
          alt="Big dog"
          width="532"
          height="537"
        />
      </Pictures.BigDogContainer>
      <Pictures.SmallDogContainer>
        {/* <source
          srcSet={`${BigDogDesktop} 1x, ${BigDogDesktop2x} 2x`}
          media="(min-width: 1280px)"
          type="image/jpeg"
          width="532"
          height="537"
        /> */}
        {/* <source
          srcSet={`${BigDogTablet} 1x, ${BigDogTablet2x} 2x`}
          media="(min-width: 768px)"
          type="image/jpeg"
          width="532"
          height="537"
        /> */}
        <source
          srcSet={`${SmallDog} 1x, ${SmallDog2x} 2x`}
          media="(max-width: 767px)"
          type="image/jpeg"
          width="205"
          height="201"
        />
        <Pictures.SmallDogImg
          src={SmallDog}
          srcSet={`${SmallDog2x} 2x`}
          alt="Big dog"
          width="205"
          height="201"
        />
      </Pictures.SmallDogContainer>
      <Pictures.CatContainer>
        {/* <source
          srcSet={`${BigDogDesktop} 1x, ${BigDogDesktop2x} 2x`}
          media="(min-width: 1280px)"
          type="image/jpeg"
          width="532"
          height="537"
        /> */}
        {/* <source
          srcSet={`${BigDogTablet} 1x, ${BigDogTablet2x} 2x`}
          media="(min-width: 768px)"
          type="image/jpeg"
          width="532"
          height="537"
        /> */}
        <source
          srcSet={`${Cat} 1x, ${Cat2x} 2x`}
          media="(max-width: 767px)"
          type="image/jpeg"
          width="256"
          height="258"
        />
        <Pictures.CatImg
          src={Cat}
          srcSet={`${Cat2x} 2x`}
          alt="Big dog"
          width="532"
          height="537"
        />
      </Pictures.CatContainer>
    </Pictures.MainPageContainer>
  );
};

export default HomeImages;
