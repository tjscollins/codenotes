/*
@meta
layout: about
*/
import * as React from 'react'
import styled from 'styled-components';
import Helmet from 'react-helmet';

import DefaultResume from '@tjscollins/jsonresume-react-components';
import resume from '@tjscollins/resume';

class ResumePage extends React.Component {
    // private resumeData = require('../../../data/resume.json');

    public render() {
        return (
            <Div>
                <Helmet>
                    <title>Tyler Collins Resume</title>
                    <link
                        href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,300i,400,600|Josefin+Slab:300,400,600"
                        rel="stylesheet"
                    />
                </Helmet>
                <DefaultResume resumeData={resume} />
            </Div>
        );
    }
}

const Div = styled.div`
    font-family: 'JoseFin sans', sans-serif;

    h2 {
        margin-bottom: 0.5rem;
    }

    .resume {
        margin-top: 50px;
    }

    .resume__content {
        display: flex;
        flex-direction: row;
        margin-top: 35px;

        & > .left-column {
            margin-right: 10px;
        }
    }

    .resume__header__name {
        margin: 0;
        margin-bottom: 5px;
    }

    .resume__header__label {
        font-size: 1.3rem;
        font-weight: 300;
    }

    section.about {
        margin-bottom: 15px;

        .about__info {
            display: flex;
            flex-direction: row;
            margin-bottom: 0.25rem;

            & > svg {
                width: 20px;
                margin-right: 10px;
            }
        }
    }

    section.skills {
        h2 {
            margin-top: 1.5rem;
        }

        .skills__item__header__title {
            font-size: 1.15rem;
            margin: 0px;
            margin-bottom: 0.5rem;
        }

        .skills__item__keyword-list {
            font-weight: 300;
            font-size: 0.85rem;
            margin-left: 0.5rem;
            list-style: none !important;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }

        .skills__item__keyword-list__item {
            margin-right: 0.25rem;
            margin-bottom: 0.25rem;

        }
    }

    section.languages {
        h2 {
            margin-top: 1.5rem;
        }

        .languages__list {
            list-style: none;
            margin-left: 10px;
        }

        .languages__list__item {
            margin: 0;
            font-size: 0.85rem;
        }
    }

    section.interests {

        h2 {
            margin-top: 1.5rem;
        }

        .interests__item {
            margin-left: 0.5rem;
        }

        .interests__item__keyword-list {
            list-style: none;
            margin-top: 0;
            margin-left: 10px;
        }

        .interests__item__keyword-list__item {
            margin: 0;
            font-size: 0.85rem;
        }
    }

    section.summary {
        .summary__text {
            font-family: 'JoseFin slab', serif;
            font-size: 1rem;
            line-height: 1.5rem;
        }
    }

    section.work {

        h2 {
            &:after {
                display: block;
                width: 100%;
                height: 2px;
                background-color: #ddd;
                content: "";
                margin-bottom: 1.5rem;
            }
        }

        .work__job__header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 0;

            .work__job__header__title {
                margin-bottom: 0.75rem;
                font-weight: 300;
            }

            .work__job__header__date {
                font-weight: 300;
                font-size: 1.25rem;
                text-transform: uppercase;
            }
        }

        .work__job__company {
            font-size: 1.2rem;
            font-weight: 300;
            color: inherit;
            text-decoration: none;
        }

        .work__job__summary {
            margin-top: 0.5rem;
            line-height: 1.5rem;
            font-family: 'JoseFin slab', serif;
        }

        .work__job__highlights {
            font-family: 'JoseFin slab', serif;
            font-size: 0.85rem;
            list-style: none;

            li {
                margin-bottom: 0.5rem;
            }
        }
    }

    section.projects {

        h2 {
            &:after {
                display: block;
                width: 100%;
                height: 2px;
                background-color: #ddd;
                content: "";
                margin-bottom: 1.5rem;
            }
        }

        .projects__item__header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 0;

            .projects__item__header__title {
                margin-bottom: 0.75rem;
                font-weight: 400;
                color: black;
            }

            .projects__item__header__date {
                font-weight: 300;
                font-size: 1.25rem;
                text-transform: uppercase;
            }
        }

        .projects__item__keywords {
            list-style: none;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            font-weight: 300;
            margin-bottom: 0.5rem;

            li {
                margin-left: 0.5rem;
            }
        }

        .projects__item__summary {
            font-family: 'JoseFin slab', serif;
            line-height: 1.5rem;
            margin-bottom: 0.5rem;
        }

        .projects__item__highlights {
            font-family: 'JoseFin slab', serif;
            font-size: 0.85rem;
            list-style: none;

            li {
                margin-bottom: 0.5rem;
            }
        }
    }

    section.volunteering {

        h2 {
            &:after {
                display: block;
                width: 100%;
                height: 2px;
                background-color: #ddd;
                content: "";
                margin-bottom: 1.5rem;
            }
        }

        .volunteering__item__header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 0;

            .volunteering__item__header__title {
                margin-bottom: 0.75rem;
                font-weight: 400;
                color: black;
            }

            .volunteering__item__header__date {
                font-weight: 300;
                font-size: 1.25rem;
                text-transform: uppercase;
            }
        }

        .volunteering__item__role {
            font-weight: 300;
            line-height: 1.5rem;
        }

        .volunteering__item__summary {
            font-family: 'JoseFin slab', serif;
            line-height: 1.5rem;
            margin-bottom: 0.5rem;
        }

        .volunteering__item__highlights {
            font-family: 'JoseFin slab', serif;
            font-size: 0.85rem;
            list-style: none;

            li {
                margin-bottom: 0.5rem;
            }
        }
    }

    section.education {

        h2 {
            &:after {
                display: block;
                width: 100%;
                height: 2px;
                background-color: #ddd;
                content: "";
                margin-bottom: 1.5rem;
            }
        }

        .education__item {
            margin-bottom: 1rem;
        }

        .education__item__header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .education__item__header__title {
            margin-bottom: 0.05rem;
            font-weight: 400;
            font-size: 1.25rem;
            color: black;

        }

        .education__item__specialization {
            font-weight: 300;
            margin-left: 0.5rem;
        }

        .education__item__header__date {
            font-weight: 300;
            font-size: 1.25rem;
            text-transform: uppercase;
        }

        .education__item__details {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .education__item__courses {
            margin: 0;
        }
    }

    section.publications {
        h2 {
            &:after {
                display: block;
                width: 100%;
                height: 2px;
                background-color: #ddd;
                content: "";
                margin-bottom: 1.5rem;
            }
        }

        .publications__item__header__title {
            margin-bottom: 0.5rem;
            font-weight: 400;
            font-size: 1.25rem;
            color: black;
        }

        .publications__item__summary {
            font-family: 'JoseFin slab', serif;
        }
    }
`;

export default ResumePage;
