/// <reference path="../../typings/global.d.ts" />
/// <reference path="../../typings/graphql.d.ts" />

import * as React from 'react';
import Link from 'gatsby-link';
const uuid = require('uuid/v4');
import styled, { ThemeProps } from 'styled-components';
import { connect } from 'react-redux';

import ChapterContents, { StyledNote } from './ChapterContents';
import SearchField from './Search';
import AboutAuthor from './AboutAuthor';

import { toggleSideBar } from '../../redux/actions';
import { MATCH_TYPE } from '../../constants';
import { sidebarWidth } from '../../util';

interface TocProps {
    pages: any[]
    title: string
    expanded: boolean
}

interface TocState {
    theme: SiteTheme
    pages: any[]
    search: boolean
}

interface Chapter {
    chapterTitle: string,
    list: Array<MarkdownRemarkEdge & { display?: number }>
}

class TOC extends React.Component<TocProps & ThemeProps<SiteTheme>, TocState> {

    private noSearchResultMsg = 'No matching posts';

    constructor(props: TocProps & ThemeProps<SiteTheme>) {
        super(props);
        const { pages, theme } = props;
        this.state = {
            theme,
            pages: pages.map((page) => ({ display: MATCH_TYPE.noSearchText, ...page })),
            search: false
        };

        this.search = this.search.bind(this);
        this.createTableEntries = this.createTableEntries.bind(this)
    }

    public render() {
        const { title, expanded } = this.props;
        return (
        <TocDiv id="sidebar" expanded={expanded} theme={this.props.theme}>
            <TocTitle>
                <Link to="/">
                    {title}
                </Link>
            </TocTitle>
            <SearchField onSearch={this.search} />
            <StyledToc>
                <div>
                    <TopicsHeader>
                        Recent Posts:
                    </TopicsHeader>
                    <ul>
                        {this.getRecentPosts()}
                    </ul>
                    <TopicsHeader>
                        By Topic:
                    </TopicsHeader>
                    <ul>
                        {this.createTableOfContents()}
                    </ul>
                </div>
                <AboutAuthor />
            </StyledToc>
        </TocDiv>
        );
    }

    private createTableEntries({chapterTitle, list}: Chapter) {
        return (
                <ChapterContents
                    key={uuid()}
                    title={chapterTitle}
                    contents={list}
                    search={this.state.search}
                />
        );
    }

    private createTableOfContents() {
        const toc = this.state.pages
            .filter(({ node }) => node.frontmatter.chapter !== null)
            .filter(({display}) => display >= MATCH_TYPE.noSearchText)
            .sort(compareNotes)
            .reduce(combineChapters, [])
            .map(this.createTableEntries);

        return toc.length > 0 ? toc : this.noSearchResultMsg;
    }

    private filterPages(searchText: string) {

        if (searchText.length === 0) {
            this.setState({
                pages: this.state.pages.map((page) => ({
                    ...page,
                    display: MATCH_TYPE.noSearchText
                })),
                search: false
            });
            return;
        }

        const re = new RegExp(searchText, 'i');

        const pages = this.state.pages.map((page) => {
            const {node: {frontmatter: { title = '', tags = [] }}} = page;
            const searchCandidate = `${title} ${tags.join(' ')}`;
            return {
                ...page,
                display: re.test(searchCandidate) ? MATCH_TYPE.matched : MATCH_TYPE.notMatched
            };
        });

        this.setState({
            ...this.state,
            pages,
            search: true
        });
    }

    private getRecentPosts() {
        const { pages } = this.state;

        const recent = pages
            .filter(({ display }) => display >= MATCH_TYPE.noSearchText)
            .sort(byDate)
            .slice(-5)
            .reverse();

        if (recent.length === 0) {
            return <p>No matching posts</p>;
        }

        return recent.map(({ node, display }) => {
            return (
                <StyledNote
                    key={uuid()}
                    display={display}
                >
                    <Link to={node.fields.slug}>
                        {node.frontmatter.title}
                    </Link>
                </StyledNote>
            );
        })
    }

    private search(event: React.ChangeEvent<{ value: string }>) {
        event.preventDefault();
        this.filterPages(event.target.value);
    }
}

const mapStateToProps = (state: ReduxState) => ({expanded: state.sidebarExpanded});
const mapDispatchToProps = (dispatch: DispatchFn) => ({
    collapse: () => dispatch(toggleSideBar())
});


export default connect(mapStateToProps, mapDispatchToProps)(TOC);

const StyledToc = styled.div`
    background-color: ${({theme}) => theme.sidebar.colors.tocColor};
    height: 100%;
    padding: 0px 10px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: auto;
`;

const TopicsHeader = styled.h2`
    font-size: 1rem;
    line-height: 1;
    margin: 10px 0px;
`

const TocDiv = styled.div`
    background-color: ${({theme}) => theme.sidebar.colors.backgroundColor};
    color: ${({theme}) => theme.sidebar.colors.textColor};
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    left: calc(${sidebarWidth} - 360px);
    padding: 35px 0px 0px;
    position: fixed;
    top: 0px;
    transition: left ${({theme}) => theme.sidebar.hideTransition};
    width: 360px;
    z-index: 10000;

    a {
        color: inherit;
        text-decoration: inherit;
        &:hover, &:focus { transition: color 0.5s ease; }
    }
`;

const TocTitle = styled.h1`
    font-size: 1.2rem;
    margin: -25px auto 15px auto;
    width: 100%;
    text-align: center;
`

function byDate(a: MarkdownRemarkEdge, b: MarkdownRemarkEdge) {
    const { node: { frontmatter: { date: aDate }}} = a;
    const { node: { frontmatter: { date: bDate }}} = b;

    if (aDate === undefined && bDate) return -1;
    if (bDate === undefined && aDate) return 1;
    if (aDate === undefined && bDate === undefined) return 0;

    if ((aDate as string) < (bDate as string)) {
        return -1;
    } else if ((aDate as string) > (bDate as string)) {
        return 1;
    } else {
        return 0;
    }
}

function compareNotes(a: MarkdownRemarkEdge, b: MarkdownRemarkEdge) {
    const {
        node: { frontmatter: { chapter: aChapter, order: aOrder} }
    } = a;
    const {
        node: { frontmatter: { chapter: bChapter, order: bOrder} }
    } = b;

    if ((aChapter as string) < (bChapter as string)) {
        return -1;
    } else if ((aChapter as string) > (bChapter as string)) {
        return 1;
    } else if ((aOrder as number) < (bOrder as number)) {
        return -1;
    } else if ((aOrder as number) > (bOrder as number)) {
        return 1;
    } else {
        return 0;
    }
}

function combineChapters(chapterList: Chapter[], nextNote: MarkdownRemarkEdge) {
    const currentChapter = chapterList.slice(-1)[0];

    if (currentChapter) {
        if (currentChapter.chapterTitle === nextNote.node.frontmatter.chapter) {
            currentChapter.list.push(nextNote);
            return [...chapterList.slice(0, -1), currentChapter];
        }
    }
    chapterList.push({
        chapterTitle: (nextNote.node.frontmatter.chapter as string),
        list: [nextNote]
    });
    return chapterList;
}
