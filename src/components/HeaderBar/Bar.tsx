/// <reference path="../../typings/global.d.ts" />

import * as React from 'react';
import styled, { ThemeProps } from 'styled-components';

import { media } from '../../styles/mixins';
import { arrowPos } from '../../util';

interface BarProps {
    expanded: boolean
}

const Div: React.SFC<BarProps> = ({ expanded, ...props }) => (<div {...props} />);

const Bar = styled(Div)`
    transition: margin-left ${({theme}: ThemeProps<SiteTheme>) => theme.sidebar.hideTransition},
                width ${({theme}: ThemeProps<SiteTheme>) => theme.sidebar.hideTransition};

    height: 35px;
    background-color: ${({theme}: ThemeProps<SiteTheme>) => theme.sidebar.colors.backgroundColor};
    display: flex;
    flexDirection: row;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    z-index: 1;

    // media.xs
    position: fixed;
    top: 0;
    right: 0;
    margin-left: ${({expanded, theme}) => expanded ? '95vw' : theme.sidebar.width.hidden}
    width: ${({expanded}) => expanded ? '25px' : '100%'};

    @media (min-width: ${({theme}) => theme.breakpoints.sm}) {
        position: relative;
        margin-left: ${arrowPos};
        width: 100%;
        justify-content: flex-start;
    }
`;

export default Bar;
