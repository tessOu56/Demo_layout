import React from "react";
import styled from "styled-components";
import Banner from '../../../statics/img2.png';
import { QUERY_MD , QUERY_LG , QUERY_MAX_W } from '../../../constants/Style';

const Wrapper = styled.div`  
    width:100%;  
    padding: 150px 0 200px;
    // max-height: 700px;
    background-image: url(${Banner});
    background-color: var(--font-primary-color);
    background-size: cover;
    background-repeat: no-repeat;
    ${ QUERY_LG }{
        padding: 50px 10px ;
    }
`;

const ContentBox = styled.div`
    width: 100%;
    max-width: ${ QUERY_MAX_W };
    margin:auto;
    text-align: left;
    color:white;
    display:grid;
    grid-template-row: 20px auto ;
`;

const Title = styled.p`
    font-size: 12px;
    font-weight:600;
    padding: 10px 10px;
    margin: auto;
    letter-spacing:3px;
    line-height:1.2em;
    text-transform: uppercase;
`;

const ParagraphList = styled.div`
    display:grid;
    grid-template-columns: repeat( 3 , 1fr ) ;
    ${ QUERY_MD }{
        grid-template-columns: repeat( 1 , 1fr ) ;
        grid-template-rows: repeat( 3 , auto ) ;
        gap: 20px;
    }
`;


const Slogan = styled(Title)`
    font-size: 32px;
    font-weight:500;
    letter-spacing:2px;
    text-transform: initial;
`;

const PointWord = styled(Slogan).attrs({
    as: 'span'
})`
    display:inline-block;
    width:fit-content;
    color: var(--secondary-color);
    padding: 0 3px;
`;

const Description = styled(Title)`
    font-size: 14px;
    letter-spacing:2px;
    font-weight:400;
    line-height:1.8em;
    text-transform: initial;
`;

const Paragraph = styled.div`
    width:100%;
`;

export default ( ) => {

    return (

        <Wrapper>
            <ContentBox>
                <Title> who we are </Title>
                <ParagraphList>
                    <Paragraph>
                        <Slogan>
                            We’re Creative Coworking Working Space <PointWord>For Sucsess</PointWord>
                        </Slogan>
                    </Paragraph>
                    <Paragraph>
                        <Description>
                            Coworking is not only about the physical place, but about establishing the coworking community first. Its benefits can already be experienced outside of its places, and it is recommended
                        </Description>
                        <Description>
                            To start with building a coworking community first before considering opening a Coworking place.
                        </Description>
                    </Paragraph>
                    <Paragraph>
                        <Description>
                            However, some coworking places don’t build a community: they just get a part of an existing one by combining their opening with
                        </Description>
                        <Description>
                            An event which attracts their target group. Real-estate centric coworking spaces are about selling desks first, with building community as a secondary goal.
                        </Description>
                    </Paragraph>
                </ParagraphList>
            </ContentBox>
        </Wrapper>

    )
}