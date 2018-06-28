/// <reference path="../../typings/graphql.d.ts" />

import * as React from 'react';
import styled from 'styled-components';
const uuid = require('uuid/v4');
import Link from 'gatsby-link';
import { connect } from 'react-redux';

import { MATCH_TYPE } from '../../constants';
import { toggleSideBar } from '../../redux/actions';

interface ChapterContentsProps {
    title: string
    contents: Array<{
        node: MarkdownRemarkObject
        display?: number
    }>
    search: boolean
}

interface ChapterContentsState {
    expanded: boolean
}

class ChapterContents extends React.Component<ChapterContentsProps, ChapterContentsState> {
    constructor(props: ChapterContentsProps) {
        super(props);
        this.state = {
            expanded: true
        };

        this.toggleChapter = this.toggleChapter.bind(this);
    }

    public render () {
        const { title, contents, search } = this.props;
        const { expanded } = this.state;

        const articleCount = contents
            .filter(({display}) => display !== undefined)
            .filter(({display}) => (display as number) >= MATCH_TYPE.noSearchText)
            .length;

        return (
            <StyledChapter>
                <FlexRow
                    role="button"
                    tabIndex={0}
                    aria-controls={`${title}-list`}
                    aria-expanded={expanded}
                    onClick={this.toggleChapter}
                    onKeyPress={this.toggleChapter}
                >
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
                    }}
                >
                    {contents.map(({ node, display }) => {
                        return (
                            <ArticleLink
                                key={uuid()}
                                display={display}
                                node={node}
                            />
                        );
                    })}
                </CollapsingList>
            </StyledChapter>
        );
    }

    private toggleChapter() {
        this.setState({
            expanded: !this.state.expanded
        });
    }
}

export default ChapterContents;

export const ArticleLink = connect()(({ dispatch, display, node }) => (
    <StyledNote
        display={(display as number)}
        onClick={() => { 
                if (window.innerWidth <= 576) {
                    dispatch(toggleSideBar())
                }
            }
        }
    >
        <Link
            to={node.fields.slug}
        >
            {node.frontmatter.title}
        </Link>
    </StyledNote>
));




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

interface NoteProps {
    display: number
}

const customLi: React.SFC<NoteProps> = (props) => (<li {...props} />)

export const StyledNote = styled(customLi)`
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
