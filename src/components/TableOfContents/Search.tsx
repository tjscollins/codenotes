import * as React from 'react';
import styled from 'styled-components';

interface SearchProps {
    onSearch: React.EventHandler<React.ChangeEvent<{ value: string }>>
}

class SearchField extends React.Component<SearchProps> {

    public render() {
        return (
            <StyledForm>
                <StyledInput
                    id="toc-search"
                    type="search"
                    placeholder="Search"
                    onChange={this.props.onSearch}
                />
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
