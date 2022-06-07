
import React from "react";
import styled from "styled-components";
import { StyleIcon , StyleButton } from "../../components";

const Wrapper = styled.li`  
    width: 100%;
    padding:35px 15px ;
    border: 1px solid var(--bg-light-color);
    border-radius: 10px;
    display:grid;
    grid-template-rows: 70px auto ;
    position: relative ;
    overfloe: hidden;
`;

const IconWrap = styled.div`
    width: 60px;
    height: fit-content;
    box-size: content-box;
    padding: 20px 0;
    margin: auto ;
`;

const CardContent = styled.div`
    width:100%;
`;

const CardTitle = styled.p`
    padding: 10px 10px 30px;
    font-size: 18px;
    letter-spacing:5px;
    font-weight:500;
    line-height:1.4em;
    padding: 25px 0 10px;
    text-transform: initial;
`;

const CardDesc = styled(CardTitle)`
    width:fit-content;
    font-size: 14px;
    font-weight:400;
    line-height:1.8em;
    letter-spacing:1px;
    padding: 10px 0;
    margin: 0 auto ;
`;

const PriceBox = styled.div`
    width: 100%;
    font-size: 48px;
    font-weight:500;
    display: flex ;
    flex-flow: row nowrap;
    justify-content: center;
`;

const PriceSymbol = styled(CardDesc)`
    font-size: 16px;
    font-weight:400;
    padding:5px ;
    margin:0;
`;

const PriceUnited = styled(CardDesc)`
    height: 100%;
    padding: 5px;
    margin:0;    
    align-self: end;
`;

const StyledButton = styled(StyleButton)`
    color: ${ props => props.pointed ? 'white' : 'var(--font-primary-color)' };
    background-color: ${ props => props.pointed ? 'transparent' : 'white' };
    border: 1px solid ${ props => props.pointed ? 'white' : 'var(--bg-light-color)' };
    margin: 20px auto 30px;
`;

export default ({ data , handleSelect = f => f }) => {
    
    return (

        <Wrapper className={ data.pointed ? "cardpoint" : null }>
            <IconWrap>
                <StyleIcon 
                    keyword={ data.icon } 
                    size={ 52 } 
                    color={ data.pointed ? 'white' : 'var(--primary-color)' }
                />
            </IconWrap>
            <CardContent>
                <CardTitle> { data.name.toUpperCase() } </CardTitle>
                <PriceBox>
                    <PriceSymbol>$</PriceSymbol>
                    { data.price }
                    <PriceUnited> /monthly </PriceUnited>
                </PriceBox>
                <CardDesc> { data.desc } </CardDesc>
            </CardContent>
            <StyledButton 
                name="read more" 
                pointed={ data.pointed }
                bgTransColor={ data.pointed ? "white" : "var(--primary-color)" }
                transColor={ data.pointed && "var(--bg-card-color)" }
                handleSelect={ () => handleSelect('pricing') }
            />
        </Wrapper>

    )
}