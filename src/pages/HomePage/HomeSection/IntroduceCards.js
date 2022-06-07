import React, { useState } from "react";
import styled from "styled-components";
import { QUERY_MD , QUERY_LG , QUERY_MAX_W } from '../../../constants/Style';
import { MaskIcon } from '../../../components';

const Wrapper = styled.div`  
    width:100%;  
    margin-top:-110px;
    margin-bottom:-180px;
    z-index:2;
    ${ QUERY_LG } {
        margin-top: 0px;
        margin-bottom: 0px;
    }
`;

const ContentBox = styled.div`
    width: 100%;
    max-width: ${ QUERY_MAX_W };
    margin:auto;
    text-align: left;
    color:white;
    display:grid;
    grid-template-columns: repeat( 3 , minmax( auto , 34% ));
    ${ QUERY_MD } {
        grid-template-columns: 100% ;
    }
`;

const CardBox = styled.div`
    width:100%;
    padding: 45px;
    background-color: ${ props => props.bg };
    &:hover {
        background-color: ${ props => props.transbg };
    }
    ${ QUERY_MD } {
        text-align: center;
    }
`;

const StyledMaskIcon = styled(MaskIcon)`
    margin: 0 0 30px ;
    color: white;
    ${ QUERY_MD } {
        margin: 0 auto 30px ;
    }
`;

const CardTitle = styled.div`
    font-size: 18px ;
    line-height: 1.4em ;
    letter-spacing: 0.2em ;
    margin-bottom: 20px ;
    text-transform: uppercase;
`;

const CardDesc= styled.p`
    font-size: 14px ;
    line-height: 1.8em ;
    margin-bottom: 20px ;
`;

export default ( { data } ) => {
    const [ List  , setList ] = useState( data.map( ( item , i ) => {
        if( i === 0 ){
            return { ...item , bg : 'var(--bg-secondary-color)', transbg : 'var(--bg-primary-color)' }
        }else if( i === 1 ){
            return { ...item , bg : 'var(--primary-color)', transbg : 'var(--primary-color-2)' }
        }else{
            return { ...item , bg : 'var(--bg-primary-color)', transbg : 'var(--primary-color-2)' }
        }
    }));


    return (

        <Wrapper>
            <ContentBox>
                { List.map( ( { name , desc , img , ...props} , i ) => (
                    <CardBox { ...props } key={ i } >
                        <StyledMaskIcon mask={ img } size={ 52 } />
                        <CardTitle> { name } </CardTitle>
                        <CardDesc> { desc } </CardDesc>
                    </CardBox>
                ))}
            </ContentBox>
        </Wrapper>

    )
}