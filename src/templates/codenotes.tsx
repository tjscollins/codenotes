/// <reference path="../typings/global.d.ts" />
/// <reference path="../typings/graphql.d.ts" />

import * as React from "react";
import styled from 'styled-components';

import Warning from '../components/Warning';

declare interface codenotesPostProps {
    data: {
        markdownRemark: markdownRemarkObject
    } 
}

declare interface codenotesPostState {
    noMathJax: boolean
}

class codenotesPost extends React.Component<codenotesPostProps, codenotesPostState> {

    constructor(props: codenotesPostProps) {
        super(props);
        this.state = {
            noMathJax: false,
        };
    }

    private mathJaxWarning = "Warning: MathJax has failed to load correctly.  Mathematical content may not be displayed correctly.  You can try reloading the page.";

    componentDidMount() {
        const MathJax = window.MathJax;
        if (MathJax) {
            MathJax.Hub.Config({
                tex2jax: {
                    inlineMath: [ ['$','$'], ["\\(","\\)"] ],
                    displayMath: [ ['$$','$$'], ["\[","\]"] ],
                    processEscapes: true
                }
            });
            setTimeout(
                () => MathJax.Hub.Queue(["Typeset", MathJax.Hub]), 
                100
            );
        } else {
            this.setState({noMathJax: true});
        }
    }
    
    render() {
        const { data } = this.props;
        const { noMathJax } = this.state;
        const post = data.markdownRemark;
        console.log(post);
        return (
          <Article>
            <h1>{post.frontmatter.title}</h1>
            <Warning if={noMathJax} text={this.mathJaxWarning} />
            <Body dangerouslySetInnerHTML={{ __html: post.html }} />
          </Article>
        );
    }
}

export default codenotesPost;

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