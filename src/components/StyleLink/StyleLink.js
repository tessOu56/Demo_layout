
// import { useState , useEffect } from "react";
import styled from "styled-components";

const StyleLink = styled.a( props => ({
    ...props,
    fontSize: props.fontSize || 14,
    color: props.color || 'var(--primary-color)' , 
    '&:hover':{
        cursor: 'pointer' , 
        color: props.transColor || 'var(--secondary-color)' 
    },
    '&:visited':{
        color: props.transColor || 'var(--secondary-color)' 
    }
}));

export default ({ name="" , child , handleSelected = f => f , ...props }) => {

    return (

        <StyleLink  
            { ...props }
            rel="noreferrer noopenner"
            onClick={
                !props.href ? (
                e => {
                    e.preventDefault();
                    handleSelected();
                }) : null 
        }> { name || child } </StyleLink>
    )
    
}