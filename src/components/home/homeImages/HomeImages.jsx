import React from 'react';
import BigDog from '../../../images/homeImages/mobile/big-dog-mobile.png';
import BigDog2x from '../../../images/homeImages/mobile/big-dog-mobile@2x.png';
import SmallDog from '../../../images/homeImages/mobile/small-dog-mobile.png';
import SmallDog2x from '../../../images/homeImages/mobile/small-dog-mobile@2x.png';
import Cat from '../../../images/homeImages/mobile/cat-mobile.png';
import Cat2x from '../../../images/homeImages/mobile/cat-mobile@2x.png';
import BigDogTablet from '../../../images/homeImages/tablet/big-dog-tablet.png';
import BigDogTablet2x from '../../../images/homeImages/tablet/big-dog-tablet@2x.png';
import SmallDogTablet from '../../../images/homeImages/tablet/small-dog-tablet.png';
import SmallDogTablet2x from '../../../images/homeImages/tablet/small-dog-tablet@2x.png';
import SmallDogWholeTablet from '../../../images/homeImages/tablet/small-dog-whole-tablet.png';
import SmallDogWholeTablet2x from '../../../images/homeImages/tablet/small-dog-whole-tablet@2x.png';
import CatTablet from '../../../images/homeImages/tablet/cat-tablet.png';
import CatTablet2x from '../../../images/homeImages/tablet/cat-tablet@2x.png';
import BigDogDesktop from '../../../images/homeImages/desktop/big-dog-desktop.png';
import BigDogDesktop2x from '../../../images/homeImages/desktop/big-dog-desktop@2x.png';
import SmallDogDesktop from '../../../images/homeImages/desktop/small-dog-desktop.png';
import SmallDogDesktop2x from '../../../images/homeImages/desktop/small-dog-desktop@2x.png';
import CatDesktop from '../../../images/homeImages/desktop/cat-desktop-whole.png';
import CatDesktop2x from '../../../images/homeImages/desktop/cat-desktop-whole@2x.png';
import BigDogWhole from '../../../images/homeImages/tablet/big-dog-whole.png';
import Pictures from './HomeImages.styled';

const HomeImages = () => {
  return (
    <>
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
        <Pictures.BigDogImg
          src={BigDogDesktop}
          srcSet={`${BigDogDesktop2x} 2x`}
          alt="Big dog"
          width="532"
          height="537"
        />
      </picture>
      <picture>
        <Pictures.BigDogImgBg
          src={BigDogWhole}
          alt="Small dog"
          width="426"
          height="417"
        />
      </picture>
      <picture>
        <source
          srcSet={`${SmallDogDesktop} 1x, ${SmallDogDesktop2x} 2x`}
          media="(min-width: 1280px)"
          type="image/jpeg"
          width="426"
          height="417"
        />
        <source
          srcSet={`${SmallDogTablet} 1x, ${SmallDogTablet2x} 2x`}
          media="(min-width: 768px)"
          type="image/jpeg"
          width="426"
          height="417"
        />
        <source
          srcSet={`${SmallDog} 1x, ${SmallDog2x} 2x`}
          media="(max-width: 767px)"
          type="image/jpeg"
          width="205"
          height="201"
        />
        <Pictures.SmallDogImg
          src={SmallDogDesktop}
          srcSet={`${SmallDogDesktop2x} 2x`}
          alt="Small dog"
          width="426"
          height="417"
        />
      </picture>
      <picture>
        <source
          srcSet={`${SmallDogTablet} 1x, ${SmallDogTablet2x} 2x`}
          media="(min-width: 1280px)"
          type="image/jpeg"
          width="426"
          height="417"
        />
        <source
          srcSet={`${SmallDogWholeTablet} 1x, ${SmallDogWholeTablet2x} 2x`}
          media="(min-width: 768px)"
          type="image/jpeg"
          width="426"
          height="417"
        />
        <source
          srcSet={`${SmallDogWholeTablet2x} 1x`}
          media="(max-width: 767px)"
          type="image/jpeg"
          width="205"
          height="201"
        />
        <Pictures.SmallDogImgBg
          src={SmallDogDesktop}
          srcSet={`${SmallDogDesktop2x} 2x`}
          alt="Small dog"
          width="426"
          height="417"
        />
      </picture>
      <picture>
        <source
          srcSet={`${CatDesktop} 1x, ${CatDesktop2x} 2x`}
          media="(min-width: 1280px)"
          type="image/jpeg"
          width="362"
          height="361"
        />
        <source
          srcSet={`${CatTablet} 1x, ${CatTablet2x} 2x`}
          media="(min-width: 768px)"
          type="image/jpeg"
          width="362"
          height="361"
        />
        <source
          srcSet={`${Cat} 1x, ${Cat2x} 2x`}
          media="(max-width: 767px)"
          type="image/jpeg"
          width="174"
          height="174"
        />
        <Pictures.CatImg
          src={CatDesktop}
          srcSet={`${CatDesktop2x} 2x`}
          alt="Cat"
          width="362"
          height="361"
        />
      </picture>
    </>
  );
};

export default HomeImages;
