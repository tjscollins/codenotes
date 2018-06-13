import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet';

class IndexPage extends React.Component {
  render() {
    const { data: {
      allMarkdownRemark: {
        edges: markdownEdges
      }
    } } = this.props;
    return (
      <div>
        {JSON.stringify(markdownEdges)}
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </div>
    );
  }
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          fileAbsolutePath
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`