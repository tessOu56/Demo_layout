import React from "react";
import styled from "styled-components";
import { QUERY_MD , QUERY_MAX_W } from '../../../../constants/Style';
import Card from './Card';

const Wrapper = styled.div`  
    width:100%;  
    padding: 0 0 30px;
    background-color: white;
`;

const ContentWrap = styled.div`
    width: 100%;
    max-width: ${ QUERY_MAX_W };
    margin: 20px auto 90px;
    text-align: center;
    color: var(--font-primary-color);
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
    padding: 10px 10px 30px;
    margin-bottom: 20px;
    letter-spacing:2px;
    color: var(--font-primary-color);
`;

const ItemGrid = styled.ul`
    width: 100%;
    padding: 0 10px;
    display:grid;
    grid-template-columns: repeat( 3 ,1fr);
    grid-gap: 30px;
    ${ QUERY_MD } {
        grid-template-columns: 100%;
    }
`;

export default ({ data=[] }) => {

    return (

        <Wrapper>
            <ContentWrap>
                <Title>
                    {'Our Services'.toUpperCase()}
                </Title>
                <Slogan>
                    Look Our Best Services
                </Slogan>
                <ItemGrid>
                {
                    data.map( ({ id , ...item }) => ( <Card key={ id } data={ item }/> ))
                }
                </ItemGrid>
            </ContentWrap>
        </Wrapper>

    )
}