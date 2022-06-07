import React from "react";
import styled from "styled-components";
import { QUERY_MD , QUERY_LG , QUERY_MAX_W } from '../../constants/Style';
import Icon1 from '../../statics/img16.png';
import Card from './Card';

const Wrapper = styled.div`  
    width:100%;  
    padding: ${ props => props.padding ? props.padding : '85px 0 '} ;
    background-color: white;
    ${ QUERY_MD } {
        padding: ${ props => props.padding ? props.padding : '45px 0 45px'} ;
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
    font-size: 12px;
    font-weight:600;
    padding: 10px 10px 20px;
    letter-spacing:3px;
    line-height:1.2em;
    color: var(--primary-color);
`;

const Slogan = styled.p`
    font-size: 32px;
    font-weight:400;
    padding: 10px 10px 30px;
    letter-spacing:2px;
    line-height:1.2em;
    text-transform: capitalize;
`;

const ItemGrid = styled.ul`
    width: 100%;
    margin: 20px auto;
    display:grid;
    grid-template-columns: repeat( 3 , minmax( auto , 33% ) ) ;
    grid-gap:40px;
    > .cardpoint{
        background-color: var(--bg-card-color);
        color: white;
        &:before {
            content:"" ;
            width:70px ;
            height:70px ;
            background: url(${Icon1}) no-repeat ;
            position: absolute ;
            top: 0 ;
            right: -3px ;
        }
    }
    ${ QUERY_LG } {
        padding: 0 30px ;
        grid-template-columns: repeat( 2 , 1fr )   ;
        > :nth-child(1) {
            grid-column: 1 / 3 ;
            grid-row: 1 / 2 ;
        }
    }
    ${ QUERY_MD } {
        grid-template-columns: 100% ;
        grid-gap:20px;
        > :nth-child(1) {
            grid-column: 1 / 1 ;
            grid-row: 1 / 1 ;
        }
    }
`;

export default ({ data=[] , padding , handleSelect = f => f }) => {
    
    return (

        <Wrapper padding={ padding } >
            <ContentWrap>
                <Title>
                    {'our price'.toUpperCase()}
                </Title>
                <Slogan>
                    Pricing plans
                </Slogan>
                <ItemGrid>
                {
                    data.map( ({ id , ...item }) => ( 
                        <Card data={ item } key={ id } handleSelect={handleSelect}/> 
                    ))
                }
                </ItemGrid>
            </ContentWrap>
        </Wrapper>

    )
}