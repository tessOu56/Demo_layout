import React from "react";
import styled from "styled-components";
import { QUERY_MD , QUERY_LG } from '../../../constants/Style';
import { StyleButton } from '../../../components';

const Wrapper = styled.div`    
    padding-top: 250px;
    min-height: 800px;
    background-image: url(${ props => props.bg });
    background-color: var(--font-primary-color);
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: top;
    ${ QUERY_LG }{
        padding-top: 300px;
        min-height: initial;
    }
    ${ QUERY_MD }{
        padding-top: 330px;
    }
`;

const ContentBox = styled.div`
    width: 100%;
    text-align: center;
    color:white;
    padding-bottom: 150px;
    ${ QUERY_MD }{
        padding-bottom: 50px;
    }
`;

const Title = styled.p`
    font-size: 30px;
    font-weight:400;
    padding: 10px;
    margin:auto;
    letter-spacing:9px;
    ${ QUERY_LG }{
        font-size: 20px;
    }
`;

const Slogan = styled(Title)`
    font-size: 100px;
    font-weight:500;
    letter-spacing:3px;
    ${ QUERY_LG }{
        font-size: 60px;
    }
`;

const Description = styled(Title)`
    max-width:500px;
    font-size: 18px;
    letter-spacing:2px;
    line-height:1.8em;
`;

export default ({ data , handleSelect= f => f }) => {

    return (

        <Wrapper bg={ data.bg }>
            <ContentBox>
                <Title> { data.title } </Title>
                <Slogan> { data.slogan } </Slogan>
                <Description> { data.desc } </Description>
                <StyleButton name={ data.direct.name } onClick={ e => {
                    e.preventDefault();
                    handleSelect(`${ data.direct.target }`);
                }}></StyleButton>
            </ContentBox>
        </Wrapper>

    )
}