import React , { useState } from "react";
import styled from "styled-components";
import Card from './Card';
import PickPoint from './PickPoint';

const Wrapper = styled.div`  
    padding: 150px 0 ;
    background-image: url(${props => props.bg });
    background-color: white;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

const ContentBox = styled.div`
    width: 100%;
    text-align: center;
    color:white;
`;

const Title = styled.p`
    font-size: 12px;
    font-weight:400;
    padding: 10px 0;
    margin:auto;
    letter-spacing:3px;
    color: var(--primary-color);
    line-height:1.2em;
`;

const Slogan = styled(Title)`
    font-size: 32px;
    font-weight:500;
    color: var(--font-primary-color);
`;
const CarouselWrap = styled.div`
    width:100%;
    max-width:800px;
    margin: auto;
    overflow: hidden;
`;

const Carousel = styled.ul`
    width:calc( ${ props => props.length*100}% );
    padding: 10px 0 20px;
    margin: auto;
    display:flex;
    flex-flow: row nowrap;
`;

const PickList = styled.div`
    width:fit-content;
    padding:0 10px;
    margin:10px auto;
    display:flex;
    flex-flow: row nowrap;
    justify-content:center;
`;

export default ({ bg , data=[] }) => {
    const [ List , setList ] = useState(() => data.map( ( item , i ) => ({ transX:0, selected: i < 1 ? true : false , ...item }))) ;
        

    const handlePickSelect = ( id ) => {
        const SelectedIndex = List.findIndex( item => item.id === id );

        const NewList = List.map( item  => {
            if( item.id === id ) item.selected = true ;
            else item.selected = false ;

            item.transX = SelectedIndex > -1 ? SelectedIndex : 0;

            return item ;
        })

        setList( NewList );
    } 


    return (

        <Wrapper bg={ bg }>
            <ContentBox>
                <Title> WE ENJOY WORKING </Title>
                <Slogan> What People Say </Slogan>
                <CarouselWrap>
                <Carousel length={ List.length }>
                    {
                        List.map( ({ id , ...item }) => (<Card key={ id } data={ item } length={ List.length }/> ))
                    }
                </Carousel>
                </CarouselWrap>
                <PickList>
                    {
                        List.map( ({ selected , id }) => (<PickPoint key={ id } id={ id } selected={ selected } handleSelect={ handlePickSelect }/> ) )
                    }
                </PickList>
            </ContentBox>
        </Wrapper>

    )
}