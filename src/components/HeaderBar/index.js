import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { toggleSideBar } from '../../redux/actions';
import { sidebarWidth } from '../../util';

class HeaderBar extends React.Component {

    render () {
        const { collapse, expanded } = this.props;

        return (
            <Bar expanded={expanded}>
                <a role="button"
                    href="#"
                    aria-controls="#sidebar"
                    aria-expanded={expanded}
                    onClick={collapse}>
                    <div style={expanded ? {} : {display: 'none'}}>
                        <Arrow className="fa fa-arrow-left" />
                    </div>
                    <div style={expanded ? {display: 'none'} : {}} >
                        <Arrow className="fa fa-arrow-right" />
                    </div>
                </a>
            </Bar>
        );
    }
}

const mapStateToProps = state => ({expanded: state.sidebarExpanded});
const mapDispatchToProps = dispatch => ({
    collapse: () => dispatch(toggleSideBar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);

const Bar = styled.div`
  padding-left: ${sidebarWidth};
  transition: padding-left ${({theme}) => theme.sidebar.hideTransition};
  width: 100%;
  height: 35px;
  background-color: ${({theme}) => theme.sidebar.colors.backgroundColor};
  display: flex;
  flexDirection: row;
  align-items: center;
`;

const Arrow = styled.i`
    color: ${props => props.theme.sidebar.colors.textColor};
`;

const ShowArrow = styled.i`
color: ${props => props.theme.sidebar.colors.textColor};
`;

