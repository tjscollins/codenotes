import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components';

import { Row, Column } from '../components/Grid';
import ToContents from '../components/TableOfContents';
import theme from '../styles/theme';

import './index.css';


const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title = {data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <ThemeProvider theme={theme}>
      <div>
        <HeaderBar />
        <FlexContainer>
          <ToContents 
            pages={data.allMarkdownRemark.edges}
            title={data.site.siteMetadata.title} />
          <div>
            <Main>
              {children()}
            </Main>
          </div>
        </FlexContainer>
      </div>
    </ThemeProvider>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

const HeaderBar = styled.div`
  padding-left: 360px;
  width: 100%;
  height: 35px;
  background-color: ${props => props.theme.sidebar.backgroundColor}
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1440px;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
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
              }
              fields {
                slug
              }
          }
      }
    }
  }
`;