import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { toggleSideBar } from '../../redux/actions';

import Bar from './Bar';

interface HeaderProps {
    collapse: (...args: any[]) => void
    expanded: boolean
}

class HeaderBar extends React.Component<HeaderProps> {

    public render () {
        const { collapse, expanded } = this.props;

        return (
            <Bar expanded={expanded}>
                <a
                    role="button"
                    href="#"
                    aria-controls="#sidebar"
                    aria-expanded={expanded}
                    onClick={collapse}
                >
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

const mapStateToProps = (state: ReduxState) => ({expanded: state.sidebarExpanded});
const mapDispatchToProps = (dispatch: DispatchFn) => ({
    collapse: () => dispatch(toggleSideBar())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);

const Arrow = styled.i`
    color: ${props => props.theme.sidebar.colors.textColor};
`;

