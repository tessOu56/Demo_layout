import React from "react";
import styled from "styled-components";
import { QUERY_MD , QUERY_MAX_W } from '../../../../constants/Style';
import BannerContent from './BannerContent';
import Card from './Card';

const Wrapper = styled.div`  
    width:100%;  
    padding: 60px 0;
`;

const ContentBox = styled.div`
    width: 100%;
    max-width: ${ QUERY_MAX_W }; 
    margin:auto;
    text-align: left;
    color:white;
    display:grid;
    grid-template-rows: auto auto ;
`;

const CardList = styled.div`
    width: 100%;
    padding: 30px 0;
    display:grid;
    grid-template-columns: repeat( 4 , 1fr ) ;
    ${ QUERY_MD }{
        grid-template-columns: minmax( auto , 100% ) ;
    }
`;

export default ( { data={} } ) => {
    return (

        <Wrapper>
            <ContentBox>
                <BannerContent data={ data.content } />
                <CardList>
                { data.list.map( ({ id , ...data }) => ( <Card key={ id } data={ data } /> ))}
                </CardList>

            </ContentBox>
        </Wrapper>

    )
}