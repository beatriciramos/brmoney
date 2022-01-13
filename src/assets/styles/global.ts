import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  
    --red: #E52E4D;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #33CC95;


    --background: #f0f2f5;
    --text-title: #363F5F;
    --text-body:#969CB3;

    --shape: #FFFF;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media(max-widht: 1080px) {
        font-size: 93.75%
    }

    @media(max-widht: 720px) {
        font-size: 87.5%
    }
}

body {
    background:var(--background);
    -webkit-font-smoothing: antialiased; // Fonts mais nitidas 
}
body, input, textarea, button {
    font-family: 'Poppins', sans-serif !importa;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600
}

button { 
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;

}
`;
