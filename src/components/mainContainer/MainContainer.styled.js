import { styled } from 'styled-components';
import variables from 'settings/variables';
import pawprintMobile1 from '../../images/pawprint/pawprint-mobile-1.png';
import pawprintTablet1 from '../../images/pawprint/pawprint-tablet-1.png';
import pawprintDesktop1 from '../../images/pawprint/pawprint-desktop-1.png';
import pawprintMobile2 from '../../images/pawprint/pawprint-mobile-2.png';
import pawprintTablet2 from '../../images/pawprint/pawprint-tablet-2.png';
import pawprintDesktop2 from '../../images/pawprint/pawprint-desktop-2.png';
import pawprintMobile3 from '../../images/pawprint/pawprint-mobile-3.png';
import pawprintTablet3 from '../../images/pawprint/pawprint-tablet-3.png';
import pawprintDesktop3 from '../../images/pawprint/pawprint-desktop-3.png';
import pawprintMobile4 from '../../images/pawprint/pawprint-mobile-4.png';
import pawprintTablet4 from '../../images/pawprint/pawprint-tablet-4.png';
import pawprintDesktop4 from '../../images/pawprint/pawprint-desktop-4.png';
import pawprintMobile5 from '../../images/pawprint/pawprint-mobile-5.png';
import pawprintTablet5 from '../../images/pawprint/pawprint-tablet-5.png';
import pawprintDesktop5 from '../../images/pawprint/pawprint-desktop-5.png';
import pawprintMobile6 from '../../images/pawprint/pawprint-mobile-6.png';
import pawprintTablet6 from '../../images/pawprint/pawprint-tablet-6.png';
import pawprintDesktop6 from '../../images/pawprint/pawprint-desktop-6.png';
import pawprintMobile7 from '../../images/pawprint/pawprint-mobile-7.png';
import pawprintTablet7 from '../../images/pawprint/pawprint-tablet-7.png';
import pawprintDesktop7 from '../../images/pawprint/pawprint-desktop-7.png';
import pawprintMobile8 from '../../images/pawprint/pawprint-mobile-8.png';
import pawprintTablet8 from '../../images/pawprint/pawprint-tablet-8.png';

const MainContainer = styled.div`
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  min-width: 320px;
  overflow: hidden;
  ${variables.breakPoints.mobile} {
    width: 480px;
  }
  ${variables.breakPoints.tablet} {
    padding-top: 24px;
    padding-left: 32px;
    padding-right: 32px;
    width: 768px;
  }
  ${variables.breakPoints.desktop} {
    padding-top: 20px;
    padding-left: 16px;
    padding-right: 16px;
    width: 1280px;
  }
`;

const PawContainer = styled.div`
  position: relative;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  background-image: url(${pawprintMobile1}), url(${pawprintMobile2}),
    url(${pawprintMobile3}), url(${pawprintMobile4}), url(${pawprintMobile5}),
    url(${pawprintMobile6}), url(${pawprintMobile7}), url(${pawprintMobile8}), url(${pawprintMobile1}), url(${pawprintMobile2}),
    url(${pawprintMobile3}), url(${pawprintMobile4}), url(${pawprintMobile5}),
    url(${pawprintMobile6}), url(${pawprintMobile7}), url(${pawprintMobile8}), url(${pawprintMobile1}), url(${pawprintMobile2}),
    url(${pawprintMobile3}), url(${pawprintMobile4}), url(${pawprintMobile5}),
    url(${pawprintMobile6}), url(${pawprintMobile7}), url(${pawprintMobile8});
  background-size: 79px, 79px, 79px, 29px, 29px, 28px, 28px, 28px, 79px, 79px, 79px, 29px, 29px, 28px, 28px, 28px, 79px, 79px, 79px, 29px, 29px, 28px, 28px, 28px, cover;
  background-repeat: no-repeat;
  background-position: top 338px left 98px, top 519px left 289px,
    top 314px left 326px, top 89px left 332px, top 143px left 12px,
    top 378px left 12px, top 208px left 213px, top 508px left 60px, top 338px left 438px, top 519px left 629px,
    top 314px left 666px, top 89px left 672px, top 143px left 352px,
    top 378px left 352px, top 208px left 553px, top 508px left 400px, top 898px left 98px, top 1079px left 289px,
    top 874px left 326px, top 649px left 332px, top 703px left 12px,
    top 938px left 12px, top 768px left 213px, top 1068px left 60px, center;

  ${variables.breakPoints.tablet} {
    padding-top: 24px;
    padding-left: 32px;
    padding-right: 32px;
    background-image: url(${pawprintTablet1}), url(${pawprintTablet2}),
      url(${pawprintTablet3}), url(${pawprintTablet4}), url(${pawprintTablet5}),
      url(${pawprintTablet6}), url(${pawprintTablet7}), url(${pawprintTablet8}), url(${pawprintTablet1}), url(${pawprintTablet2}),
      url(${pawprintTablet3}), url(${pawprintTablet4}), url(${pawprintTablet5}),
      url(${pawprintTablet6}), url(${pawprintTablet7}), url(${pawprintTablet8}), url(${pawprintTablet1}), url(${pawprintTablet2}),
      url(${pawprintTablet3}), url(${pawprintTablet4}), url(${pawprintTablet5}),
      url(${pawprintTablet6}), url(${pawprintTablet7}), url(${pawprintTablet8});
    background-size: 157px, 157px, 157px, 58px, 58px, 56px, 56px, 56px, 157px, 157px, 157px, 58px, 58px, 56px, 56px, 56px, 157px, 157px, 157px, 58px, 58px, 56px, 56px, 56px, cover;
    /* background-repeat: no-repeat; */
    background-position: top 671px left 235px, top 1032px left 613px,
      top 624px left 688px, top 178px left 699px, top 285px left 64px,
      top 750px left 64px, top 413px left 464px, top 1009px left 160px, top 671px left 1035px, top 1032px left 1413px,
      top 624px left 1488px, top 178px left 1499px, top 285px left 864px,
      top 750px left 864px, top 413px left 1264px, top 1009px left 960px,  top 1671px left 235px, top 2032px left 613px,
      top 1624px left 688px, top 1178px left 699px, top 1285px left 64px,
      top 1750px left 64px, top 1413px left 464px, top 2009px left 160px, left;
  }
  ${variables.breakPoints.desktop} {
    padding-top: 20px;
    padding-left: 16px;
    padding-right: 16px;
    background-image: url(${pawprintDesktop1}), url(${pawprintDesktop2}),
      url(${pawprintDesktop3}), url(${pawprintDesktop4}),
      url(${pawprintDesktop5}), url(${pawprintDesktop6}),
      url(${pawprintDesktop7}), url(${pawprintDesktop1}), url(${pawprintDesktop2}),
      url(${pawprintDesktop3}), url(${pawprintDesktop4}),
      url(${pawprintDesktop5}), url(${pawprintDesktop6}),
      url(${pawprintDesktop7}), url(${pawprintDesktop1}), url(${pawprintDesktop2}),
      url(${pawprintDesktop3}), url(${pawprintDesktop4}),
      url(${pawprintDesktop5}), url(${pawprintDesktop6}),
      url(${pawprintDesktop7});
      background-size: 157px, 157px, 157px, 58px, 58px, 56px, 56px, 157px, 157px, 157px, 58px, 58px, 56px, 56px, 157px, 157px, 157px, 58px, 58px, 56px, 56px, cover;
    background-position: top 671px left 235px, top 515px left 1268px,
      top 114px left 1213px, top 178px left 699px, top 285px left 64px,
      top 750px left 64px, top 413px left 464px, top 671px left 1535px, top 515px left 2568px,
      top 114px left 2513px, top 178px left 1999px, top 285px left 1364px,
      top 2050px left 64px, top 1713px left 464px, top 1371px left 235px, top 1215px left 1268px,
      top 814px left 1213px, top 878px left 699px, top 985px left 64px,
      top 1450px left 64px, top 1113px left 464px, center;
  }
`;

const Container = {
  MainContainer,
  PawContainer,
};

export default Container;
