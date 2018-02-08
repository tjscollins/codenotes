import React from 'react';
import Link from 'gatsby-link';
import uuid from 'uuid/v4';
import styled from 'styled-components';

import ChapterContents, { StyledNote } from './ChapterContents';
import SearchField from './Search';

import { MATCH_TYPE } from '../../constants';

class TOC extends React.Component {
    constructor(props) {
        super(props);
        const { pages } = props;
        this.state = {
            pages: pages.map((page) => ({ display: MATCH_TYPE.noSearchText, ...page })),
            search: false,
        };
    }

    createTableEntries({chapterTitle, list}) {
        console.log(this.state);
        return (
                <ChapterContents 
                    key={uuid()}
                    title={chapterTitle}
                    contents={list}  
                    search={this.state.search} />
        );
    }
    
    createTableOfContents() {
        let toc= this.state.pages
            .filter(({ node }) => node.frontmatter.chapter !== null)
            .filter(({display}) => display >= MATCH_TYPE.noSearchText)
            .sort(compareNotes)
            .reduce(combineChapters, [])
            .map(this.createTableEntries.bind(this));

        return toc.length > 0 ? toc : 'No matching posts';
    }

    filterPages(searchText) {
        
        if (searchText.length === 0) {
            this.setState({
                pages: this.state.pages.map((page) => ({ 
                    ...page,
                    display: MATCH_TYPE.noSearchText, 
                })),
                search: false,
            });
            setTimeout(() => console.log(this.state), 1000);
            return;
        }
        
        const re = new RegExp(searchText, 'i');

        const pages = this.state.pages.map((page) => {
            const {node: {frontmatter: { title }}} = page;
            return {
                ...page,
                display: re.test(title) ? MATCH_TYPE.matched : MATCH_TYPE.notMatched,
            };
        }); 
        
        this.setState({
            ...this.state,
            pages,
            search: true,
        });
    }

    getRecentPosts() {
        const { pages } = this.state;
        const { title } = this.props;
        const recent = pages
            .filter(({ display }) => display >= MATCH_TYPE.noSearchText)
            .sort(byDate)
            .slice(-5)
            .reverse();
        
        if (recent.length === 0) {
            return <p>No matching posts</p>;
        }

        return recent.map(({ node, display }, ind) => {
            return (
                <StyledNote 
                    key={`${title}${ind}`}
                    display={display}>
                    <Link to={node.fields.slug}>
                        {node.frontmatter.title}
                    </Link>
                </StyledNote>
            );
        })
    }
    
    search(event) {
        event.preventDefault();
        const { target } = event;
        this.filterPages(target.value);
    }

    render() {
        const { pages } = this.state;
        const { title } = this.props;

        return (
        <TocDiv>
            <TocTitle>
                <Link to='/'>
                    {title}
                </Link>
            </TocTitle>
            <SearchField onSearch={this.search.bind(this)} />
            <TopicsHeader>
                Recent:
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
        </TocDiv>
        );
    }
}

export default TOC;

const TopicsHeader = styled.h2`
    font-size: 1rem;
    line-height: 1;
    margin: 10px 0px;    
`

const TocDiv = styled.div`
    width: 360px;
    height: 100vh;
    background-color: ${({theme}) => theme.sidebar.backgroundColor};
    color: ${({theme}) => theme.sidebar.textColor};
    padding: 0px 10px;

    a {
        color: inherit;
        text-decoration: inherit;
    }
`;

const TocTitle = styled.h1`
    font-size: 1.2rem;
    margin: -25px auto 15px auto;
    width: 100%;
    text-align: center;
`

function byDate(a,b) {
    let { node: { frontmatter: { date: aDate }}} = a;
    let { node: { frontmatter: { date: bDate }}} = b;

    if (aDate < bDate) {
        return -1;
    } else if (aDate > bDate) {
        return 1;
    } else {
        return 0; 
    }
}

function compareNotes(a, b) {
    let { 
        node: { frontmatter: { chapter: aChapter, order: aOrder} }
    } = a;
    let { 
        node: { frontmatter: { chapter: bChapter, order: bOrder} }
    } = b;

    if (aChapter < bChapter) {
        return -1;
    } else if (aChapter > bChapter) {
        return 1;
    } else if (aOrder < bOrder) {
        return -1;
    } else if (aOrder > bOrder) {
        return 1;
    } else {
        return 0;
    }
}

function combineChapters(chapterList, nextNote) {
    let currentChapter = chapterList.slice(-1)[0];

    if(currentChapter) {
        if(currentChapter.chapterTitle === nextNote.node.frontmatter.chapter) {
            currentChapter.list.push(nextNote);
            return [...chapterList.slice(0, -1), currentChapter];
        }
    }
    chapterList.push({
        chapterTitle: nextNote.node.frontmatter.chapter,
        list: [nextNote]
    });
    return chapterList;
}