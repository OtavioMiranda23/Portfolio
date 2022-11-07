import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #162426;
    --gray: #3E494B;
    --red: #FF4C2C;
    --dark-red: #AD3019;
    --text-title: #FFF0ED ;
    --text-body: #D1C7C5;
    --shape: #FFFFFF
}
* {
    margin: 0;
    box-sizing: border-box;
}

html{ 
    @media(max-width: 1080px){
        font-size: 93.75%;
    }
    @media(max-width: 720px){
        font-size: 87.5%;
    }
}

body { 
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}
body, textarea, input, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
} 
h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}
`;
