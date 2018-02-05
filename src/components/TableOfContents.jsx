import React from 'react';
import { Link } from 'gatsby-link';
import uuid from 'uuid/v4';
import styled from 'styled-components';

class TOC extends React.Component {
    render() {
        const { 
            pages,
        } = this.props;
        return (
        <TocDiv>
            <ul>
                {createTableOfContents(pages)}
            </ul>
        </TocDiv>
        );
    }
}

export default TOC;

const TocDiv = styled.div`
    width: 360px;
    height: 100vh;
    border: 1px solid red;
`;

function createTableOfContents(pages) {
    return pages
        .filter(({ node }) => node.frontmatter.chapter !== null)
        .sort(compareNotes)
        .reduce(combineChapters, [])
        .map(createTableEntries);
}

function compareNotes(a, b) {
    if (a.node.frontmatter.chapter < b.frontmatter.chapter) {
        return -1;
    } else if (a.node.frontmatter.chapter > b.frontmatter.chapter) {
        return 1;
    } else if (a.node.frontmatter.order < b.frontmatter.order) {
        return -1;
    } else if (a.node.frontmatter.order > b.frontmatter.order) {
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

function createTableEntries({chapterTitle, list}) {
    return (
        <li key={uuid()}>
            {chapterTitle}
            <ul>
                {list.map(({ node }) => {
                    return (
                        <li key={uuid()}>
                           {node.frontmatter.title}
                        </li>
                    );
                })}
            </ul>
        </li>
    );
}