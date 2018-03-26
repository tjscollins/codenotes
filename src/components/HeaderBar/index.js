import React from 'react';
import styled from 'styled-components';


class HeaderBar extends React.Component {

    render () {
        const { collapse, expanded } = this.props;
        return (
            <Bar>
                <a role="button"
                    href="#"
                    aria-controls="#sidebar"
                    aria-expanded={expanded}
                    onClick={collapse}>
                    <Arrow className={expanded ? "fas fa-arrow-left" : "fas fa-arrow-right"} />
                </a>
            </Bar>
        );
    }
}

export default HeaderBar;

const Bar = styled.div`
  padding-left: 360px;
  width: 100%;
  height: 35px;
  background-color: ${({theme}) => theme.sidebar.colors.backgroundColor};
  display: flex;
  flexDirection: row;
  align-items: center;

  @media only screen and (max-width: ${({theme}) => theme.breakpoints.mobileLimit}) {
      padding-left: 10px;
  }
`;

const Arrow = styled.i`
    color: ${props => props.theme.sidebar.colors.textColor};
`;
