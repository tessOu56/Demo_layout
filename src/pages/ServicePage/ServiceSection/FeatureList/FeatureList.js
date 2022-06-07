import React from "react";
import styled from "styled-components";
import { QUERY_SM , QUERY_MD , QUERY_LG , QUERY_MAX_W } from '../../../../constants/Style';
import { StyleButton } from '../../../../components';
import Card from './Card';

const Wrapper = styled.div`  
    width:100%;  
    padding: 100px 0 ;
    background-image: url(${ props => props.bg });
    background-color: var(--font-primary-color);
    background-size: cover;
    background-repeat: no-repeat;
    ${ QUERY_MD }{
        padding: 50px 0 ;
    }
`;

const ContentWrap = styled.div`
    width: 100%;
    max-width: ${ QUERY_MAX_W } ;
    padding: 0 10px;
    margin:auto;
    text-align: left;
    color:white;
    display:grid;
    grid-template-columns: minmax( auto , 45% )  minmax( auto , 55% ) ;
    grid-gap: 50px;
    ${ QUERY_LG }{
        grid-gap: 30px;
    }
    ${ QUERY_MD }{
        grid-template-columns: 100% ;
        text-align: center;
        grid-gap: 10px;
    }
`;

const ContentBox = styled.div`
    width: 100%;
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

const Slogan = styled(Title)`
    font-size: 32px;
    font-weight:500;
    letter-spacing:2px;
    text-transform: initial;
`;

const Description = styled(Title)`
    font-size: 14px;
    letter-spacing:2px;
    font-weight:400;
    line-height:1.8em;
    text-transform: initial;
`;

const StyledButton = styled(StyleButton)`
    margin: 30px 10px;
    ${ QUERY_MD }{
        margin: 30px auto;
    }
`;


const ContentList = styled.ul`
    width: 100%;
`;

export default ({ data = [] , bg , handleSelect = f => f }) => {

    return (

        <Wrapper bg={ bg }>
            <ContentWrap>
                <ContentBox>
                    <Title> our features </Title>
                    <Slogan>
                        We Are Here To increase Your Productivity.
                    </Slogan>
                    <Description>
                        We are a workplace community of entrepreneurs, startups, freelancers, and innovative companies seeking flexible office space in creative environments. We provide the platform – offices, desks, conference rooms, networking opportunities, internet, coffee, etc. – so that you can focus on the success of your business.                
                    </Description>
                    <StyledButton name="about" handleSelect={ () => handleSelect('about') }/>
                </ContentBox>

                <ContentBox>
                    <ContentList>
                        {
                            data.map( ({ id , ...item }) => ( <Card key={ id } data={ item } /> ))
                        }
                    </ContentList>
                </ContentBox>
            </ContentWrap>
        </Wrapper>

    )
}