import * as React from 'react';
import styled from 'styled-components';

declare interface WarningProps {
    if: boolean
    text: string
}

export default class Warning extends React.Component<WarningProps> {

    public render() {
        if (this.props.if) {
            return (
                <Text>
                    {this.props.text}
                </Text>
            );
        } else {
            return (
                <div />
            );
        }
    }
}

const Text = styled.p`
    margin 15px auto;
    width: 50%;
    padding: 15px;
    background-color: hsla(0, 100%, 50%, 0.10);
`
