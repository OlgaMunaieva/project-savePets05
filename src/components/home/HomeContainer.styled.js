import variables from "settings/variables";
import { styled } from "styled-components";

export const HomePageContainer = styled.div`
margin: 0 auto;
max-width: 280px;
height: 100%;
    position: relative;
${variables.breakPoints.tablet} {
max-width: 704px;
}
${variables.breakPoints.desktop} {
max-width: 1248px;
position: relative;
    /* min-width: 704px; */
    /* top: 34px;
    left: 540px; */
}

`
