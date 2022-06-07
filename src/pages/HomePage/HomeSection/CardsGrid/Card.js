import React from "react";
import styled from "styled-components";

const Wrapper = styled.li`  
    width:100%;
    height:320px;
    background: url(${ props => props.img }) no-repeat;
    background-size: cover;
`;

const Content = styled.div`
    width:100%;
    height:100%;
    padding:110px 45px;
    color: transparent;
    &:hover {
        color:white;
        background-color: var(--bg-deep-color-opacity);
    }
`;

const Title = styled.div`
    font-size: 18px ;
    line-height: 1.4em ;
    letter-spacing: 0.2em ;
    margin: 10px auto;
`;

const Desc= styled.p`
    font-size: 14px ;
    line-height: 1.8em ;
`;

export default ({ name , desc , img }) => { 
    return (
        <Wrapper img={ img }>
            <Content img={ img } >
                <Title> { name.toUpperCase() } </Title>
                <Desc> { desc } </Desc>
            </Content>
        </Wrapper>
    )
}