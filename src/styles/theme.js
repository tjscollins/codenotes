import createTheme from 'styled-components-theme';

const colors = {

}

const sidebar = {
    colors: {
        backgroundColor: 'hsla(210, 35%, 25%, 1)', // Dark blue gray
        textColor: 'white',
        hilight: 'hsla(50, 75%, 65%, 1)',          // Light gold
        focusColor: 'hsla(50, 50%, 85%, 1)',
        tocColor: '#272822',
    },
    width: {
        expanded: '360px',
        hidden: '10px',
    },
    hideTransition: '0.75s ease-in-out',
};

const breakpoints= {
    mobileLimit: '1120px'
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
    colors,
    fonts,
    breakpoints,
    
    sidebar,
    article,
};

export default theme;