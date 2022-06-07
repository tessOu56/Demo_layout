import React from "react";
import styled from "styled-components";
import Banner from '../../../statics/img3.png';
import { QUERY_LG , QUERY_MAX_W } from '../../../constants/Style';
import { StyleButton } from '../../../components';

const Wrapper = styled.div`  
    width:100%;  
    padding: 330px 0 100px;
    background-image: url(${Banner});
    background-color: white;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: -1;
    ${ QUERY_LG } {
        padding: 50px 10px ;
        background-image: none;
    }
`;

const ContentWrap = styled.div`
    width: 100%;
    max-width: ${ QUERY_MAX_W };
    margin:auto;
    text-align: left;
    color: var(--font-primary-color);
    display:grid;
    grid-template-columns: repeat( 2 , 1fr );
    ${ QUERY_LG } {
        grid-template-columns: 0 100%;
    }
`;

const ContentBox = styled.div`
    width: 100%;
`;

const Title = styled.p`
    font-size: 12px;
    font-weight:600;
    padding: 10px 10px 20px;
    margin: auto;
    letter-spacing:3px;
    line-height:1.2em;
    text-transform: capitalize;
    color: var(--primary-color);
`;

const Slogan = styled(Title)`
    font-size: 32px;
    font-weight:400;
    padding: 10px 10px 0;
    letter-spacing:2px;
    color: var(--font-primary-color);
`;
const StyledSlogan = styled(Slogan).attrs({
    as: 'span'
})`
    padding: 5px 10px 20px;
`;

const PointWord = styled(Slogan).attrs({
    as: 'span'
})`
    display:inline-block;
    width:fit-content;
    color: var(--secondary-color);
    padding: 0 3px;
    ${ QUERY_LG } {
        padding: 0px;
    }
`;

const Description = styled(Title)`
    text-transform: initial;
    font-size: 14px;
    letter-spacing:3px;
    font-weight:400;
    line-height:1.8em;
    color: var(--font-secondary-color);
`;

const PointDescription = styled(Description).attrs({
    as: 'span'
})`
    display:inline-block;
    width:fit-content;
    font-weight:900;
    padding: 0 3px;
`;

const StyledButton = styled(StyleButton)`
    margin: 20px 0;
`;

export default ({ handleSelect = f => f }) => {

    return (

        <Wrapper>
            <ContentWrap>
                <ContentBox></ContentBox>
                <ContentBox>
                    <Title>
                        {'who we are'.toUpperCase()}
                    </Title>
                    <Slogan>
                        it is modern office,
                    </Slogan>
                    <StyledSlogan>
                        only for <PointWord>good peoples</PointWord>
                    </StyledSlogan>

                    <Description>
                        Coworking is not only about the physical place, but about establishing the coworking community first. Its 
                        <PointDescription> benefits </PointDescription>
                        can already be experienced outside of its places, and it is recommended
                    </Description>
                    <Description>
                        To start with building a  <PointDescription> coworking community </PointDescription> 
                        first before considering opening a Coworking place.                  
                    </Description>
                    <StyledButton name="our services" handleSelect={ () => handleSelect('service') }/>
                </ContentBox>
            </ContentWrap>
        </Wrapper>

    )
}