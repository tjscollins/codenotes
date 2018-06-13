/*
@meta
layout: about
*/

import * as React from 'react'

interface Props {
    data: {
        markdownRemark: MarkdownRemarkObject
    }
    children: any
}

class AboutPage extends React.Component<Props> {

    public render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.props.data.markdownRemark.html}} />
        );
    }
}

export default AboutPage;

export const pageQuery = graphql`
  query AboutQuery {
    markdownRemark(frontmatter: { path: { eq: "about" }}) {
        html
      }
  }
`;
