/// <reference path="../../typings/global.d.ts" />

import * as React from 'react';
import Link from 'gatsby-link';
import { connect } from 'react-redux';
import styled, { ThemeProps } from 'styled-components';

import Bar from './Bar';

import theme from '../../styles/theme';
import { customTransition } from '../../styles/mixins';

interface HeaderProps {
    theme: SiteTheme
    data: {
        site: {
            siteMetadata: SiteMetadata
        }
    }
}


class HeaderBar extends React.Component<HeaderProps> {

    public render () {
        const { data: { site: { siteMetadata }} } = this.props;
        return (
            <Bar expanded={false}>
                <Container>
                    <div>
                        <a href={siteMetadata.links.github}>
                            <Icon className="fab fa-github" />
                        </a>
                        <a href={siteMetadata.links.linkedin}>
                            <Icon className="fab fa-linkedin-in" />
                        </a>
                    </div>
                    <LinkList>
                        <li><Link to="/about/resume">Resume</Link></li>
                    </LinkList>
                </Container>
            </Bar>
        );
    }
}

const mapStateToProps = (state: ReduxState) => ({});
const mapDispatchToProps = (dispatch: DispatchFn) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);

const LinkList = styled.ul`
    display: flex;
    flex-direction: row;
    margin: 0;
    margin-right: 25px;
    list-style: none;
    align-items: center;

    font-family: sans-serif;

    li {
        margin 0;
    }
`;

const Icon = styled.i`
    margin-left: 15px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    width: 100%;
    height: 100%;
    margin: 0px;

    a {
        color: white;
        text-decoration: none;

        ${customTransition(`color 0.5s`)}

        &:hover,
        &:focus {
            color: ${theme.colors.hilight};
        }
    }
`;
