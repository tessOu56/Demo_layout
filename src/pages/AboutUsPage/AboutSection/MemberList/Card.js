import React from "react";
import styled from "styled-components";

const Wrapper = styled.li`
    width: 100%;
    padding: 15px ;
`;

const ImgBox = styled.img` width:100%; `; 

const Content = styled.div` width:100%; `;

const Title = styled.p`
    padding: 30px 0 5px;
    font-size: 18px;
    letter-spacing:5px;
    font-weight:500;
    line-height:1.4em;
    color: var(--font-primary-color);
    text-transform: uppercase;
`;

const Desc = styled(Title)`
    padding: 10px 0;
    margin: 0 auto ;
    font-size: 14px;
    font-weight:300;
    line-height:1.8em;
    letter-spacing:1px;
    text-transform: capitalize;
`;

export default ({ data = {} }) => {
    const { name , desc , job , img } = data ;

    return (

        <Wrapper>
            <ImgBox src={ img } />
            <Content>
                <Title> { name } </Title>
                <Desc> { job } </Desc>
                <Desc> { desc } </Desc>
            </Content>
        </Wrapper>

    )
}