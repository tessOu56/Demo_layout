import React from "react";
import styled from "styled-components";

const Wrapper = styled.li`  
    width:100%;  
    padding: 20px;
    text-align:center;
`;


const Desc= styled.p`
    color: var(--primary-color);
    font-size: 72px ;
    font-weight: 400;
    line-height: 1.8em ;
`;

const Title = styled.div`
    color: var(--font-primary-color);
    font-size: 18px ;
    font-weight: 400;
    line-height: 1.4em ;
    letter-spacing: 5px ;
    text-transform: uppercase;
`;


export default ( { data } ) => {
    
    return (

        <Wrapper>
            <Desc> { data.desc } </Desc>
            <Title> { data.name } </Title>
        </Wrapper>

    )
}