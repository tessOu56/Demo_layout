import React from "react";
import styled from "styled-components";
import { QUERY_MD , QUERY_LG } from '../../constants/Style';

const StyledLink = styled.a`
    color:${ props => props.selected? 'var(--secondary-color)':'white'};
    width:120px;
    height:fit-content;
    padding:20px 20px 20px 12px ;
    font-size:14px;
    font-weight: 500;
    letter-spacing:2px;
    text-transform:uppercase;
    &:hover{
        cursor:pointer;
        color:var(--secondary-color);
    }
    ${ QUERY_LG }{
        width:fit-content;
        padding:20px 20px 20px 12px ;
    }
    ${ QUERY_MD }{
        width:100%;
    }
`;

export default ({ name , desc , selected , handleSelect= f => f }) => {
    return (
        <StyledLink onClick={ (e) => { e.preventDefault(); handleSelect(name); } } selected={selected}> { desc } </StyledLink>
    )

}