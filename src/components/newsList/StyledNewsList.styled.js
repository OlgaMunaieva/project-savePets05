import { styled } from 'styled-components';
import variables from 'settings/variables';
const StyledList= styled.ul`
    padding: 80px 0 ;
    display:grid;
    grid-template-columns: 280px;
    justify-content: center;
    column-gap:31px;
    row-gap: 44px;
    
    ${variables.breakPoints.tablet} {
      grid-template-columns: 336px 336px;
      column-gap:31px;
      row-gap: 46px;
    }
  
    ${variables.breakPoints.desktop} {
      grid-template-columns: 395px 395px 395px;
      column-gap:32px;
      row-gap: 46px;
    }
  `

  export default StyledList;