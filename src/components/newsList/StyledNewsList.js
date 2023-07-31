import { styled } from 'styled-components';
import variables from 'settings/variables';
const StyledList= styled.ul`
    padding: 80px 0 ;
    display:grid;
    grid-template-columns: 280px;
    gap:31px;

    ${variables.breakPoints.tablet} {
      grid-template-columns: 336px 336px;
    }
  
    ${variables.breakPoints.desktop} {
      grid-template-columns: 395px 395px 395px;
    }
  `

  export default StyledList;