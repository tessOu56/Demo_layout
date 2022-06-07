import React from "react";
import styled from "styled-components";
import { QUERY_LM , QUERY_MAX_W } from '../../../../constants/Style';
import Card from './Card';

const Wrapper = styled.div`  
    width:100%;  
    margin-top:-150px;
    z-index:2;
    ${ QUERY_LM }{
        margin-top: 0px;
        margin-bottom: 0px;
    }
`;

const ContentBox = styled.div`
    width: 100%;
    max-width: ${ QUERY_MAX_W } ;
    margin:auto;
    text-align: left;
    color:white;
    display:grid;
    grid-template-rows: auto auto ;
`;

const EmptyBox = styled.div` width: 100% ;`;

const CardList = styled.div`
    width: 100%;
    padding: 70px 0 30px;
    display:grid;
    grid-template-columns: 33% 33% 33% ;
    ${ QUERY_LM } {
        grid-template-columns: 100% ;
    }
`;

const Banner = styled.img`
    width:100%;
`;


export default ( { data=[] , banner } ) => {
    return (

        <Wrapper>
            <ContentBox>

                { banner ? <Banner src={ banner } /> : <EmptyBox /> }

                <CardList>
                { data.map( ({ id , ...item }) => ( <Card key={ id } data={ item } /> ))}
                </CardList>

            </ContentBox>
        </Wrapper>

    )
}