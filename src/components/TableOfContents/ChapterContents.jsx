import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid/v4';
import Link from 'gatsby-link';

import { MATCH_TYPE } from '../../constants';


class ChapterContents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: true,
        };
    }
    
    render () {
        const { title, contents, search } = this.props;
        const { expanded } = this.state;

        let articleCount = contents
            .filter(({display}) => display >= MATCH_TYPE.noSearchText)
            .length;

        return (
            <StyledChapter>
                <FlexRow 
                    role='button'
                    tabIndex="0"
                    aria-controls={`${title}-list`}
                    aria-expanded={expanded} 
                    onClick={toggleChapter.bind(this)}
                    onKeyPress={toggleChapter.bind(this)}>
                    {title}
                    <div>
                        <NumArticles>
                            {articleCount}
                            {search ? ' matching ' : ' '} 
                            article{articleCount > 1 ? 's' : ''}
                        </NumArticles>
                        <span style={{ display: expanded ? '' : 'none' }}>
                            <i className="fas fa-caret-down" />
                        </span>
                        <span style={{ display: expanded ? 'none' : '' }}>
                            <i className="fas fa-caret-right" />
                        </span>
                    </div>
                </FlexRow>
                <CollapsingList 
                    id={`${title}-list`}
                    aria-live="off" 
                    style = {expanded ? {} : {
                        height: '0px'
                    }}>
                    {contents.map(({ node, display }, ind) => {
                        return (
                            <StyledNote 
                                key={`${title}${ind}`}
                                display={display}>
                                <Link to={node.fields.slug}>
                                    {node.frontmatter.title}
                                </Link>
                            </StyledNote>
                        );
                    })}
                    
                </CollapsingList>
            </StyledChapter>
        );
    }
}

export default ChapterContents;

function toggleChapter(list) {
    console.log('Clicked Chapter Button', list);
    this.setState({
        expanded: !this.state.expanded
    });
}

const NumArticles = styled.span`
    padding-right: 30px;
`

const FlexRow = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 25px;
    cursor: pointer;
`;

const CollapsingList = styled.ul`
    transition-property: height;
    transition-duration: 100s;
    transition-timing-function: ease; 
    overflow: hidden;
    &>li {
        overflow: hidden;
    }
`;

const StyledChapter = styled.li`
    list-style: none;
    line-height: 1rem;
`;

export const StyledNote = styled.li`
    list-style: none;
    color: ${({ display, theme: { sidebar: { colors } } }) => 
        display === MATCH_TYPE.matched ? colors.hilight : colors.textColor
    };
    line-height: 1rem;

    &:hover,
    &:focus, 
    a:hover,
    a:focus {
        color: ${({theme}) => theme.sidebar.colors.focusColor};
        text-decoration: underline;
    }
`;