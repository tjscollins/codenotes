import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components';

import { Row, Column } from '../components/Grid';
import ToContents from '../components/TableOfContents';
import './index.css';

const TemplateWrapper = styled(({ children, data }) => (
  <div>
    <Helmet
      title = {data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <FlexContainer>
      <ToContents pages={data.allMarkdownRemark.edges}/>
      <Article>
        {children()}
      </Article>
    </FlexContainer>
  </div>
))`
  display: flex;
  flex-direction: row;
`

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1440px;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }
`

const Article = styled.div`
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
              }
              fields {
                slug
              }
          }
      }
    }
  }
`;