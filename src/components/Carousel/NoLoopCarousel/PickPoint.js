import React , { useState } from "react";
import styled from "styled-components";


const Picker = styled.button`
    width:10px;
    height:10px;
    background-color: ${ props => props.selected ? 'var(--secondary-color)' : 'var(--bg-light-color)'} ;
    border-radius: 50%;
    margin: 0 5px;
    &:hover {
        cursor: pointer;
        background-color: var(--secondary-color);
    }

`;

export default ({ selected , id , handleSelect }) => {

    return ( <Picker selected={ selected } onClick={ e => { e.preventDefault(); handleSelect(id);} } /> )
}