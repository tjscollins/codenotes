const colors = {
    backgroundColor: 'hsla(210, 35%, 25%, 1)', // Dark blue gray
    textColor: 'white',
    hilight: 'hsla(50, 75%, 65%, 1)',          // Light gold
    focusColor: 'hsla(50, 50%, 85%, 1)',
    tocColor: '#272822',
    blockquoteColor: '#eee'
}

const dimensions = {
    baseFontSize: 14,
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
        hidden: '10px'
    },
    hideTransition: '0.75s ease-in-out'
};

const breakpoints = {
    mobileLimit: '1120px'
};

const fonts = {
    baseFontFamily: 'Arial, sans-serif',
    baseFontSize: '14px',
    baseFontWeight: '400',
    boldFontWeight: '600',
    pFontFamily: "'JoseFin slab', serif"
};

const article = {
    mainFontFamily: 'serif',

    codeFontFamily: 'Fira Code, mono'
};

const theme = {
    colors,
    dimensions,
    fonts,
    breakpoints,

    sidebar,
    article
};

export default theme;

