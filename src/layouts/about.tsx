/// <reference path="../typings/global.d.ts" />

import Helmet from 'react-helmet'
import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../redux/reducers';

import HeaderBar from '../components/HeaderBar/aboutPage';

import theme from '../styles/theme';

import './index.css';
import 'prismjs/themes/prism-okaidia.css';

const store = createStore(reducer);

interface Props {
    data: {
        site: {
            siteMetadata: SiteMetadata
        }
        allMarkdownRemark: {
            edges: MarkdownRemarkEdge[]
        }
    }
    children: any
}

const TemplateWrapper = ({ children, data }: Props) => (
  <div>
    <Helmet
      title = {data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords }
      ]}
    />
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <div>
                <HeaderBar theme={theme} data={data} path={window.location.pathname}/>
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

export default TemplateWrapper

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1600px;
  transition: padding-left ${({theme}) => theme.sidebar.hideTransition};
  margin-top: 2rem;

  @media only screen and (max-width: ${({theme}) => theme.breakpoints.mobileLimit}) {
    display: block;
  }

  img {
      width: 45%;
      float: right;
      margin-left: 1rem;
  }

  p {
      font-size: 1rem;
      font-family: ${({theme}) => theme.fonts.pFontFamily};
      line-height: 1.5rem;
    }
`;

const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.1rem 1.45rem;
  padding-top: 0;
`

export const pageQuery = graphql`
  query AboutPageQuery {
    site {
      siteMetadata {
        title
        links {
            github
            linkedin
        }
      }
    }
    allMarkdownRemark {
        edges {
            node {
                frontmatter {
                    title
                    path
                }
            }
        }
    }
    file(name: {eq: "resume"}) {
        id
        absolutePath
    }
  }
`;
