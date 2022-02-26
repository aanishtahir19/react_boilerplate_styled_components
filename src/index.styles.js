import { createGlobalStyle } from 'styled-components';
import MontserratMedium from './Assets/Fonts/Montserrat/Montserrat-Medium.ttf';
import MontserratBold from './Assets/Fonts/Montserrat/Montserrat-Bold.ttf';
import MontserratExtraBold from './Assets/Fonts/Montserrat/Montserrat-ExtraBold.ttf';
import SourceSansProRegular from './Assets/Fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf';
export default createGlobalStyle`
@font-face {
    font-family: 'Montserrat Medium';
    src: url(${MontserratMedium}) format('truetype');
}
@font-face {
    font-family: 'Montserrat Bold';
    src: url(${MontserratBold}) format('truetype');
}
@font-face {
    font-family: 'Montserrat ExtraBold';
    src: url(${MontserratExtraBold}) format('truetype');
}
@font-face {
    font-family: 'Source Sans Pro Regular';
    src: url(${SourceSansProRegular}) format('truetype');
}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size:clamp(16px,calc(16px + (20 - 16) * ((100vw - 300px) / (1600 - 300))), 20px);
    }
    h1{
        font-family: 'Montserrat ExtraBold';
        font-size: 2.5rem;
    }
    h2{
        font-family: 'Montserrat Bold';
        font-size: 2rem;
    }
    h3{
        font-family: 'Montserrat Medium';
        font-size: 1.5rem;
    }
    p{
        font-family: 'Source Sans Pro Regular';
        font-size:1rem;
    }
    
    
`;
