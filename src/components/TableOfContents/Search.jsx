import React from 'react';
import styled from 'styled-components';

class SearchField extends React.Component {

    render() {
        return (
            <StyledForm>
                <StyledInput type="search" id="toc-search" onChange={this.props.onSearch} placeholder="Search"/>
            </StyledForm>
        );
    }
}

export default SearchField;

const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const StyledInput = styled.input`
    margin: 0 auto;
    border: none;
    border-radius: 15px;
    text-align: center;
`