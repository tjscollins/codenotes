import React from "react";
import styled from 'styled-components';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Article>
      <h1>{post.frontmatter.title}</h1>
      <Body dangerouslySetInnerHTML={{ __html: post.html }} />
    </Article>
  );
};

const Article = styled.article`
  margin-top: 15px;
`;

const Body = styled.div`
  line-height: 1.5;
  font-size: 1rem;
  font-family: ${props => props.theme.article.mainFontFamily};

  pre, code {
    font-family: ${props => props.theme.article.codeFontFamily};
  }
`;

export const query = graphql`
  query CodenotesQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;