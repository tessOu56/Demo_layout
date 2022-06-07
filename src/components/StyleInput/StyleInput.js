
import React , { useState , useEffect } from "react";
import styled from "styled-components";
import { QUERY_MD } from '../../constants/Style';

const Wrapper = styled.div`
    width: 100%;
    ${ QUERY_MD }{
        padding: 0 10px;
    }
`;

const StyleInput = styled.input.attrs( props => ({ 
    type: props.type ? props.type : 'text' ,
    value:  props.value ? props.value : '' 
}))`
    color: white;
    background-color: transparent;
    padding: 20px 0 ;
    margin: 30px 0;
    border-bottom: 1px solid white;
    outline: ${ props => props.error ? '1px solid red' : 'none'};
    &:placehoder {
        color: white ;
        opacity: 1;
    }
`;


// ( props => ({
//     fontSize: props.size ? props.size : 14,
//     color: props.color ? props.color : 'var(--primary-color)' , 
//     '&:hover':{
//         cursor: 'text' , 
//         color: props.transColor ? props.transColor : 'var(--secondary-color)' 
//     }
// }));

export default ({ name , label , handleChange = f => f , ...props }) => {


    return (
        <Wrapper>
            <StyleInput  
                placeholder={ `${label ? label : name}${ props.required? '*' : '' }` }
                name={ name }
                value={ props.value }
                error={ props.error } 
                onChange={
                    e => {
                        e.preventDefault();
                        props.handleChange( name , e.target.value );
                    }
                }
            />
        </Wrapper>
    )
    
}