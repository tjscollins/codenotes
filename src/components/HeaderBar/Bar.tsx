/// <reference path="../../typings/global.d.ts" />

import * as React from 'react';
import styled, { ThemeProps } from 'styled-components';

import { sidebarWidth } from '../../util';

interface BarProps {
    expanded: boolean
}

const Div: React.SFC<BarProps> = ({ expanded, ...props }) => (<div {...props} />);

const Bar = styled(Div)`
    padding-left: ${sidebarWidth};
    transition: padding-left ${({theme}: ThemeProps<SiteTheme>) => theme.sidebar.hideTransition};
    width: 100%;
    height: 35px;
    background-color: ${({theme}: ThemeProps<SiteTheme>) => theme.sidebar.colors.backgroundColor};
    display: flex;
    flexDirection: row;
    align-items: center;
`;

export default Bar;
