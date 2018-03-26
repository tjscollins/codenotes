import React from 'react';
import styled from 'styled-components';

export default (props) => (
    <Container>
        <a href="https://tjscollins.me">
            About the Author
        </a>
    </Container>
);

const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    
    a:hover,
    a:focus {
        color: ${({theme}) => theme.sidebar.colors.focusColor};
        text-decoration: underline;
    }
`; 