/// <reference path="../typings/global.d.ts" />

import Helmet from 'react-helmet'
import * as React from 'react'
import styled, { ThemeProvider, ThemeProps } from 'styled-components';
import { createStore } from 'redux';
import { connect, Provider, Store } from 'react-redux';

import reducer from '../redux/reducers';

import HeaderBar from '../components/HeaderBar';
// import NavManager from '../components/NavManager';
import ToContents from '../components/TableOfContents';

import theme from '../styles/theme';
type SiteTheme = typeof theme;


import { sidebarWidth } from '../util';

declare interface TemplateProps {
    data: any
    theme: SiteTheme
    children: any
}


import './index.css';
import 'prismjs/themes/prism-okaidia.css';

const store: Store<ReduxState> = createStore(reducer);

const TemplateWrapper: React.SFC<TemplateProps> = ({ children, data }) => (
  <div>
    <Helmet
      title = {data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <div>
                <HeaderBar />
                <ToContents
                    pages={data.allMarkdownRemark.edges}
                    title={data.site.siteMetadata.title}
                />
                <FlexContainer>
                    <Main>
                        {children()}
                    </Main>
                </FlexContainer>
            </div>
        </ThemeProvider>
    </Provider>
  </div>
);

export default TemplateWrapper;

const connectToStore = connect((state: ReduxState) => ({expanded: state.sidebarExpanded}));

const FlexContainer = connectToStore(styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1600px;
  padding-left: ${sidebarWidth};

  transition: padding-left ${({theme}: ThemeProps<SiteTheme>) => theme.sidebar.hideTransition};

  @media only screen and (max-width: ${({theme}: ThemeProps<SiteTheme>) => theme.breakpoints.mobileLimit}) {
    display: block;
  }
`)

const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.1rem 1.45rem;
  padding-top: 0;

  blockquote {
      background-color: ${({theme}) => theme.colors.blockquoteColor} !important;
      padding: 10px;

      blockquote {
          // Nested blockquote for quote attribution
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          padding-bottom: 0px
      }
  }
`

export const pageQuery = graphql`
  query MetaDataQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
          node {
              frontmatter {
                title
                chapter
                date
                tags
              }
              fields {
                slug
              }
          }
      }
    }
  }
`;
