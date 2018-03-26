import React, {Children} from 'react';
import styled from 'styled-components';

class NavManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navigationMenuVisibile: true,
        };
    }

    hideNavigation() {

    }

    showNavigation() {

    }

    render () {
        return (
            <div>
                {React.Children.map(this.props.children, child => React.cloneElement(child, { expanded: this.state.navigationMenuVisibile}))}
            </div>
        )
    }
}

export default NavManager;