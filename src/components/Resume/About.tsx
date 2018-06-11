/// <reference path="./resume.d.ts" />

import * as React from 'react';
const uuidv4 = require('uuid/v4');

import { concat, formatAddress, emailLink, notEmail, removeProtocol } from './util';

const AboutSection = ({ data: { basics }}) => (
    <section className="container about-container">
        <h2>Contact</h2>
        <Location location={basics.location} />
        <Email email={basics.email} />
        <Phone tel={basics.phone} />
        <Website url={basics.website} />
        <Profiles profiles={basics.profiles} />
    </section>
);

const Profiles = ({ profiles }) => (
    <div>
        {
            profiles.map(profile => <Social key={uuidv4()} profile={profile} />)
        }
    </div>
);

const Social = ({ profile }) => {
    if ( profile.network && profile.username ) {
        if (profile.network.toLowerCase() == 'linkedin') {
            return <InfoTag text={concat('in/', profile.username)} icon='fa-linkedin-square' />
        } else {
            return <InfoTag text={profile.username} icon={`fa-${profile.network.toLowerCase()}`} />
        }
    }   
}

const Website = ({ url }) => <InfoTag text={url} icon="fa-desktop" url={url} />;

const Phone = ({ tel }) => (
    <InfoTag text={tel} icon="fa-mobile fa-2x" />
)

const Email = ({ email }) => (
    <InfoTag text={email} icon="fa-envelope-o" url={emailLink(email)} />
);

const Location = ({ location }) => {
    if ( location ) return (
        <InfoTag text={formatAddress(location)} icon="fa-map-marker" />
    );

    return <div />
}

const InfoTag = ({ text, icon, url }) => (
    <div className="contact-info__item">
        {icon ? <i className={`contact-info__icon fa ${icon}`} /> : '' }
        {url ? 
            <a className="contact-info__text" href={url} target={notEmail(url) ? "_blank" : undefined }>
                    {removeProtocol(text)}
            </a>
        :
            <span className="contact-info__text">{text}</span>
        }
    </div>  
);

export default AboutSection;