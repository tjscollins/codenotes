import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from "../redux/reducers";


import HeaderBar from '../components/HeaderBar';
import NavManager from '../components/NavManager';
import ToContents from '../components/TableOfContents';

import theme from '../styles/theme';

import './index.css';

let store = createStore(reducer);

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title = {data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <div>
                <HeaderBar />
                <FlexContainer>
                <ToContents 
                    pages={data.allMarkdownRemark.edges}
                    title={data.site.siteMetadata.title} />
                <Main>
                    {children()}
                </Main>
                </FlexContainer>
            </div>
        </ThemeProvider>
    </Provider>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1600px;

  @media only screen and (max-width: ${({theme}) => theme.breakpoints.mobileLimit}) {
    display: block;
  }
`

const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.1rem 1.45rem;
  padding-top: 0;
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