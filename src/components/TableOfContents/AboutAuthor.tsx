import * as React from 'react';
import styled from 'styled-components';

const AboutAuthor: React.SFC = () => (
    <Container>
        <a href="/about">
            About the Author
        </a>
    </Container>
);

export default AboutAuthor

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
