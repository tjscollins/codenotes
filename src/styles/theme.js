import createTheme from 'styled-components-theme';

const colors = {
    sidebar: {
        backgroundColor: 'hsla(210, 35%, 25%, 1)', // Dark blue gray
        textColor: 'white',
        hilight: 'hsla(51, 65%, 65%, 1)',          // Light gold
    }
};

const fonts = {
    baseFontFamily: "Arial, sans-serif",
    baseFontSize: '14px',
    baseFontWeight: '400',
    boldFontWeight: '600',
};

const article = {
    mainFontFamily: 'serif',

    codeFontFamily: 'Fira Code, mono',
};

const theme = {
    ...colors,
    ...fonts,

    article,
};

export default theme;