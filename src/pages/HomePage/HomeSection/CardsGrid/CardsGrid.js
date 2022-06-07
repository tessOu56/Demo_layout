import React from "react";
import styled from "styled-components";
import { QUERY_MD , QUERY_LG , QUERY_FULL_W } from '../../../../constants/Style';
import Card from './Card';

const Wrapper = styled.div`  
    width:100%; 
    ${ QUERY_MD } {
        margin-top: 0px;
        margin-bottom: 0px;
    }
`;

const ContentBox = styled.div`
    width: 100%;
    max-width: ${ QUERY_FULL_W };
    margin:auto;
    text-align: center;
    display:grid;
    grid-template-columns: repeat( 4 , 1fr ) ;
    grid-template-rows: auto;
    grid-gap: 20px;
    ${ QUERY_LG } {
        grid-template-columns: repeat( 2 , 1fr ) ;
    }
    ${ QUERY_MD } {
        grid-template-columns: 100% ;
    }
`;

export default ({ data=[] }) => { 

    return (
        <Wrapper>
            <ContentBox>
                { data.map( ({ id , ...props }) => ( <Card key={ id } { ...props }/> ))}
            </ContentBox>
        </Wrapper>
    )
}