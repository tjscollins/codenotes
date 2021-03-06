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
    },
}

interface HeaderState {
    path?: string
}

class HeaderBar extends React.Component<HeaderProps, HeaderState> {

    constructor(props: HeaderProps) {
        super(props);
        this.state = {};
        this.updatePath = this.updatePath.bind(this);
    }

    public componentDidMount() {
        this.updatePath();
    }

    public render () {
        const { data: { site: { siteMetadata }} } = this.props;
        const { path } = this.state;
        return (
            <Bar expanded={false}>
                <Container>
                    <LinkList>
                        <li><Link to="/">codenotes Blog</Link></li>
                    </LinkList>
                    <LinkList>
                        { path !== '/about/resume' ?
                        <li onClick={this.updatePath}>
                            <Link to="/about/resume">Resume</Link>
                        </li> :
                        <li onClick={this.updatePath}>
                            <Link to="/about/">About</Link>
                        </li>}
                    </LinkList>
                </Container>
            </Bar>
        );
    }

    private updatePath() {
        const path = window.location.pathname;
        this.setState({path});
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

    font-family: 'Fira Code', Arial, sans-serif;
    font-weight: bold;
    font-size: 1.2rem;

    width: ${({theme}) => theme.sidebar.width.expanded}
    text-align: center;

    li {
        width: 100%;
        margin 0;
        margin-left: 0.5rem;
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
