import React from "react";
import styled from "styled-components";

const IconWrap = styled.div( props => ({
    width:'fit-content',
    height:'fit-content',
    margin: props.margin ? props.margin : '10px 0' ,
    backgroundColor: props.color ? props.color : 'white',
    mask: `url( ${ props.mask } ) no-repeat center center`,
    '&:hover': {
        cursor: props.hover ? 'pointer' : 'inherit' , 
        backgroundColor: props.transColor ? props.transColor : props.color  ,
    }
}));
const IconBox = styled.img`
    width: ${ props => props.size ? props.size : 50 }px;
    opacity:0;
`;

export default ({ size=50 , ...props }) => {

    return (
        <IconWrap { ...props } >
            <IconBox src={ props.mask } size={ size } />
        </IconWrap>

    )
}