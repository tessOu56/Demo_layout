import React from "react";
import styled from "styled-components";

const Wrapper = styled.button( props => ({
    width: props.width || '175px' ,
    padding: props.padding || '18px 25px',
    margin: props.margin || '20px auto',
    borderRadius: 30,
    backgroundColor: props.backgroundColor || 'var(--primary-color)',
    color: props.color || 'white',
    fontSize: props.fontSize || '10px',
    fontWeight: 900,
    letterSpacing: 1,
    transition: 'background-color 0.3s 0s linear', 
    '&:hover': {
        cursor: 'pointer',
        color: props.transColor || 'white',
        backgroundColor: props.bgTransColor || 'var(--secondary-color)'
    }
}));

const Content = styled.p`
    width: 100%;
    text-align:center;
`;


export default ({ name , handleSelect= f => f , ...props }) => {

    return (

        <Wrapper { ...props } onClick={ e => {
            console.log('click button');
            e.preventDefault();
            handleSelect();
        }}>
            <Content> { name.toUpperCase() } </Content>
        </Wrapper>

    )
}