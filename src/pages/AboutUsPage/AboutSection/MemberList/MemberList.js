import React from "react";
import styled from "styled-components";
import { QUERY_MD , QUERY_MAX_W } from '../../../../constants/Style';
import Card from './Card';

const Wrapper = styled.div` 
    width:100%;  
    padding: 0 0 30px;
    background-color: white;
    ${ QUERY_MD }{
        padding: 0 0 ;
    }
`;

const ContentWrap = styled.div`
    width: 100%;
    max-width: ${ QUERY_MAX_W };
    margin:auto;
    text-align: center;
    color: var(--font-primary-color);
`;

const Title = styled.p`
    padding: 10px 10px 20px;
    margin: auto;
    color: var(--primary-color);
    font-size: 12px;
    font-weight:600;
    letter-spacing:3px;
    line-height:1.2em;
    text-transform: uppercase;
`;

const Slogan = styled(Title)`
    padding: 10px 10px 30px;
    color: var(--font-primary-color);
    font-size: 32px;
    font-weight:400;
    letter-spacing:2px;
    text-transform: capitalize;
`;

const ItemGrid = styled.ul`
    width: 100%;
    display:grid;
    grid-template-columns: repeat( 4 , 1fr);
    ${ QUERY_MD }{
        grid-template-columns: minmax( auto , 100% ) ;
        grid-gap: 40px;
    }
`;

export default ({ data = [] }) => {

    return (

        <Wrapper>
            <ContentWrap>
                <Title> Our Professionals </Title>
                <Slogan> Meet Our Team </Slogan>
                <ItemGrid>
                {
                    data.map( ({ id , ...item }) => ( <Card key={ id } data={ item } /> ))
                }
                </ItemGrid>
            </ContentWrap>
        </Wrapper>

    )
}