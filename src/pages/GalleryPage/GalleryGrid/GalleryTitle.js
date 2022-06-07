
import React from "react";
import styled from "styled-components";

const Item = styled.li`
    width: fit-content;
    padding: 10px 30px;
    margin: 10px 20px;
    border-radius: 30px;
    border: 1px solid var(--border-color);
    color: ${ props => props.selected ? 'var(--primary-color)' : 'var(--font-primary-color)'};
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    &:hover {
        cursor: pointer;
        color: var(--primary-color);
    }
`;

export default ({ data  , handleSelect }) => {
    const { name , selected , index } = data ;
    
    return (

        <Item 
            selected={ selected } 
            onClick={ e => {
                e.preventDefault();
                handleSelect(index);
        }}> { name } </Item>

    )
}