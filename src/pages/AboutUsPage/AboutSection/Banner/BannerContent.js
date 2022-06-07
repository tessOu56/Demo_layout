import React from "react";
import styled from "styled-components";
import { QUERY_MD , QUERY_LM , QUERY_LG , QUERY_MAX_W } from '../../../../constants/Style';
import { StyleButton } from '../../../../components';

const Wrapper = styled.div`  
    width: 100%;
    max-width: ${ QUERY_MAX_W };
    margin:auto;
    display:grid;
    grid-template-columns: minmax( auto , 45% ) minmax( auto , 55% ) ;
    ${ QUERY_LG }{
        grid-template-columns: repeat( 2 , minmax( auto , 50% ) ) ;
    }
    ${ QUERY_LM }{
        grid-template-columns: minmax( auto , 100% ) ;
    }
`;

const ImgBox = styled.img` 
    width: 100%; 
    ${ QUERY_LM }{
        width: 90%; 
        margin: auto;
    }
    ${ QUERY_MD }{
        width: 100%; 
    }
`;

const ContentBox = styled.div`
    width: 100%;
    padding: 30px 60px 0;
    text-align: left;
    color:white;
    ${ QUERY_LG }{
        padding: 30px 30px 0;
    }
`;

const Title = styled.p`
    padding: 10px 30px 20px 0;
    margin: auto;
    color: var(--primary-color);
    font-size: 12px;
    font-weight:600;
    letter-spacing:3px;
    line-height:1.2em;
    text-transform: uppercase;
`;

const Slogan = styled(Title)`
    color: var(--font-primary-color);
    font-size: 32px;
    font-weight:400;
    letter-spacing:2px;
    text-transform: capitalize;
`;

const Description = styled(Slogan)`
    padding: 10px 0;
    font-size: 14px;
    font-weight:300;
    line-height:1.8em;
    letter-spacing:1px;
`;

const StyledButton = styled(StyleButton)`
    margin: 50px 0 70px;
`;

export default ( { data={} } ) => {
    return (

        <Wrapper>
            <ImgBox src={ data.bg }/>
            <ContentBox>
                <Title> { data.title } </Title>
                <Slogan> { data.slogan } </Slogan>
                { data.desc.split(`==%nn%==`).map( ( item , i ) => <Description key={i}> { item } </Description>) }
                
                <StyledButton name={ data.btn.name } handleSelect={ data.btn.fn } />
            </ContentBox>
        </Wrapper>

    )
}