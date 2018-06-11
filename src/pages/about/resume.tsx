/*
@meta
layout: about
*/
// const fs = require('fs');
import * as React from 'react'
import styled from 'styled-components';
import Helmet from 'react-helmet';

import LeftResumeColumn from '../../components/Resume/LeftColumn';
import RightResumeColumn from '../../components/Resume/RightColumn';


class ResumePage extends React.Component {
    private resumeData: string = require('../../../data/resume.json');

    public render() {
        console.log(this.resumeData);
        return (
            <Div>
                <Helmet>
                <title>Tyler Collins Resume</title>
                </Helmet>
                    <div className="resume-content">
                        <LeftResumeColumn data={this.resumeData} />
                        <RightResumeColumn data={this.resumeData} />
                    </div>
            </Div>
        );
    }
}

export default ResumePage;

const Div = styled.div`
    @font-face {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 300;
    src: local('Josefin Sans Light'), local('JosefinSans-Light'), url(https://fonts.gstatic.com/s/josefinsans/v12/Qw3FZQNVED7rKGKxtqIqX5Ecpl5te10k.ttf) format('truetype');
    }
    @font-face {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Josefin Sans Regular'), local('JosefinSans-Regular'), url(https://fonts.gstatic.com/s/josefinsans/v12/Qw3aZQNVED7rKGKxtqIqX5EUDXx9.ttf) format('truetype');
    }
    @font-face {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 700;
    src: local('Josefin Sans Bold'), local('JosefinSans-Bold'), url(https://fonts.gstatic.com/s/josefinsans/v12/Qw3FZQNVED7rKGKxtqIqX5Ectllte10k.ttf) format('truetype');
    }
    @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 300;
    src: local('Lato Light Italic'), local('Lato-LightItalic'), url(https://fonts.gstatic.com/s/lato/v14/S6u_w4BMUTPHjxsI9w2_Gwfo.ttf) format('truetype');
    }
    @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 400;
    src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v14/S6u8w4BMUTPHjxsAXC-v.ttf) format('truetype');
    }
    @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 700;
    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v14/S6u_w4BMUTPHjxsI5wq_Gwfo.ttf) format('truetype');
    }
    @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    src: local('Lato Light'), local('Lato-Light'), url(https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh7USSwiPHA.ttf) format('truetype');
    }
    @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wWw.ttf) format('truetype');
    }
    @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh6UVSwiPHA.ttf) format('truetype');
    }

    .bold {
    font-weight: 700; }

    .light {
    font-weight: 300; }

    html {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 14px;
    background: #f8f8f8;
    margin: 50px 0 100px;
    letter-spacing: .3px;
    color: #39424B; }

    h1, h2, h3, h4, h5, h6 {
    margin: 0; }

    a {
    color: inherit;
    text-decoration: inherit; }
    a:hover {
        color: #2895F1; }
    a .fa-external-link {
        font-size: 10px;
        vertical-align: text-top; }

    p,
    li {
    font-size: 0.75rem; }

    blockquote {
    font-size: 0.75rem;
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-style: italic;
    margin: 10px 25px; }

    em {
    color: #999; }

    ul {
    margin: 10px 0 0;
    -webkit-padding-start: 25px; }
    ul li {
        padding-left: 10px; }
    ul.minimal {
        list-style: none;
        padding: 0; }
        ul.minimal li {
        margin-bottom: 3px;
        padding-left: 0; }
    ul.two-column {
        -webkit-column-count: 2;
        -webkit-column-gap: 28px;
        column-count: 2;
        column-gap: 28px; }
        ul.two-column li {
        padding-left: 0; }

    @page {
    size: A4; }

    .container {
    padding-top: 20px; }

    .keyline {
    width: 100px;
    margin: 5px 0 10px;
    border-top: 1px solid #3a6478; }

    .pull-left {
    float: left; }

    .pull-right {
    float: right; }

    .clearfix:after {
    content: "";
    display: table;
    clear: both; }

    .profile-pic {
    margin-top: -5px;
    margin-right: 18px; }
    .profile-pic img {
        height: 52px;
        width: 52px;
        border-radius: 50%;
        border: 2px solid #3a6478; }

    .summary {
    margin: 5px 0 5px; }

    /* Layouts */
    .page {
    background: white;
    width: 612px;
    min-height: 792px;
    display: block;
    margin: 0 auto;
    border-top: 10px solid #3a6478;
    padding: 36px 22px 30px 34px;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5); }
    .page:after {
        content: "";
        display: table;
        clear: both; }

    .left-column {
    float: left;
    width: 160px;
    margin-right: 20px;
    word-wrap: break-word; }

    .right-column {
    width: auto;
    overflow: hidden; }

    .item {
    margin-bottom: 15px; }
    .item:last-child {
        margin-bottom: 0; }

    @media print {
    body {
        margin: 0; }
    .page {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 36px 0 30px;
        box-shadow: none; }
        .page .resume-header,
        .page .resume-content {
        padding: 0 22px 0 34px; }
    .container {
        page-break-inside: avoid; }
    .work-container .item, .project-container .item {
        page-break-inside: avoid; }
    .fa-external-link {
        display: none; } }

    /* Components */
    .contact-info {
    max-width: 100%; }

    .contact-info__icon {
    margin-right: 5px;
    width: 15px; }

    .contact-info__item {
    font-size: 1rem;
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: 300;
    align-items: center;
    display: flex;
    flex-direction: row;
    line-height: 1.25;
    margin-bottom: 5px; }

    .contact-info__text {
    max-width: 100%; }

    .education-container .location {
    padding-bottom: 6px;
    font-weight: 400; }

    .education-container .specialization {
    text-transform: none;
    font-style: italic; }

    .education__item {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px; }

    .education__item__location {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 1rem;
    margin-left: 15px; }

    .education__item__specialization {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 0.75rem; }

    .education__item__type-area {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 1rem; }

    .education__item__gpa {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 1rem; }

    .education__item__courses {
    list-style: none; }

    .info-tag-container {
    margin-bottom: 5px; }
    .info-tag-container .fa {
        font-size: 0.875rem;
        width: 12px;
        margin-right: 5px;
        text-align: center;
        vertical-align: middle; }
        .info-tag-container .fa.fa-map-marker {
        font-size: 1rem; }
        .info-tag-container .fa.fa-mobile {
        font-size: 1.125rem; }
        .info-tag-container .fa.fa-envelope-o {
        font-size: 0.75rem; }
        .info-tag-container .fa.fa-desktop {
        font-size: 0.6875rem; }
        .info-tag-container .fa.fa-external-link {
        width: auto;
        font-size: inherit;
        vertical-align: text-top; }
    .info-tag-container .info-text {
        font-size: 0.5625rem;
        display: inline-block;
        vertical-align: middle;
        width: 139px; }

    .interests__item__keyword-list {
    list-style: none;
    padding: 0px;
    padding-left: 5px;
    margin-top: 5px; }

    .interests__item__keyword-list__item {
    padding: inherit;
    font-size: 0.75rem; }

    .job__company {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 1rem; }

    .job__highlights__item {
    margin-bottom: 5px; }

    .languages__list {
    list-style: none;
    padding: 0; }

    .languages__list__item {
    padding: inherit;
    font-size: 0.75rem; }

    .project__keywords {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 0.75rem;
    list-style: none;
    display: flex;
    flex-direction: row;
    padding-left: 5px;
    margin: 0px; }

    .project__role {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 1rem;
    margin: 0; }

    .references-container .fa {
    font-size: 0.875rem; }

    .resume-title {
    display: flex;
    flex-direction: column;
    text-transform: uppercase; }

    .resume-title__name {
    font-family: "Josefin Sans", Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 2.5rem;
    letter-spacing: 1px; }

    .resume-title__label {
    font-family: "Josefin Sans", Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 1.25rem;
    letter-spacing: .5px; }

    .section-header__title {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 1.25rem; }

    .section-header__date {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 1rem;
    text-transform: uppercase; }

    .skill {
    padding-top: 5px;
    padding-bottom: 5px; }

    .skill__title {
    font-family: "Josefin Sans", Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 1px; }

    .skill__level {
    font-family: "Josefin Sans", Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 0.75rem;
    letter-spacing: .5px;
    text-transform: uppercase; }

    .skill__list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; }

    .skill__list__item {
    margin-right: 5px; }

    .title {
    text-transform: uppercase;
    line-height: 1;
    margin: 0; }

    .title__text {
    font-family: "Josefin Sans", Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 1.25rem;
    line-height: inherit;
    margin: inherit; 
    }
`;
