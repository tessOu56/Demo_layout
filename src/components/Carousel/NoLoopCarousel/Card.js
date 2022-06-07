import React from "react";
import styled from "styled-components";

const Wrapper = styled.li`
    width:calc( 100% / ${ props => props.length } );
    padding:20px 25px;
    transform: translateX(${ props => props.transX ? `-${props.transX*100}%` : 0 });
`

const Description = styled.p`
    padding: 10px 0;
    margin:auto;
    color: var(--font-primary-color);
    font-size: 16px;
    font-weight:300;
    letter-spacing:2px;
    line-height:1.8em;
`;

const ImgBox = styled.img`
    width: 107px;
    height: 107px;
    border-radius: 50%;
    margin: 10px auto 5px;
`;

const Title = styled.p`
    padding: 10px 0 0;
    margin:auto;
    color: var(--primary-color);
    font-size: 20px;
    font-weight:300;
    letter-spacing:4px;
    line-height:1.8em;
`;
const SubTitle = styled(Description)`
    font-size: 16px;
    font-weight:300;
    letter-spacing:1px;
    line-height:1.8em;
`;


export default ({ data , length }) => {
    const { name="" , job , desc , img , transX } = data ;

    return (
        <Wrapper transX={ transX } length={ length } >
            <Description> { desc } </Description>
            <ImgBox src={ img} />
            <Title> { name.toUpperCase() } </Title>
            <SubTitle> { job } </SubTitle>
        </Wrapper>

    )
}