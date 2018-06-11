/*
@meta
layout: about
*/

import * as React from 'react'

class AboutPage extends React.Component {

    public render() {
        console.log('Resume data:', this.props.data);
        return (
            <div>
                <h1>Tyler Collins</h1>
            </div>
        );
    }
}

export default AboutPage;

