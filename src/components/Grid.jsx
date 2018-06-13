import React from 'react';
import styled from 'styled-components';

const TOTAL_COL = 12;
const BREAKPOINTS = {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xlg: '1200px',
};

export const Row = styled.div`
    &::after {
        content: "";
        clear: both;
        display: table;
    }
`

export const Column = styled.div`
    float: left;
    ${({xs}) => (xs ? getWidth(xs) : "width: 100%")};

    @media only screen and (min-width: ${props => BREAKPOINTS.sm}) {
        ${({sm}) => sm && getWidth(sm)};
    }

    @media only screen and (min-width: ${props => BREAKPOINTS.md}) {
        ${({md}) => md && getWidth(md)};
    }

    @media only screen and (min-width: ${props => BREAKPOINTS.lg}) {
        ${({lg}) => lg && getWidth(lg)};
    }

    @media only screen and (min-width: ${props => BREAKPOINTS.xlg}) {
        ${({xlg}) => xlg && getWidth(xlg)};
    }

`;

function getWidth(numCol) {
    if (!numCol) return '';

    let width = numCol / TOTAL_COL * 100;
    return `width: ${width}%`;
}