import React from "react";
import styled from "styled-components";
import { QUERY_SM , QUERY_MD , QUERY_LG } from '../../../../constants/Style';
import { MaskIcon } from '../../../../components';

const Wrapper = styled.li`  
    width:100%;
    padding: 15px 10px;
    display: grid;
    grid-template-columns: 90px auto ;
    ${ QUERY_LG }{
        padding: 15px 0px;
        grid-template-columns: 70px auto ;
    }
    ${ QUERY_MD }{
        padding: 20px 0 0;
        grid-template-columns: 100% ;
        gap: 10px;
    }
`;

const Content = styled.div`
    width: 100%;
`;

const Title = styled.p`
    padding: 10px 10px;
    margin: auto;
    font-size: 18px;
    font-weight:600;
    line-height:1.2em;
    letter-spacing:5px;
    text-transform: uppercase;
`;

const Description = styled(Title)`
    font-size: 14px;
    font-weight:400;
    letter-spacing:2px;
    line-height:1.8em;
    text-transform: initial;
`;

const StyledMaskIcon = styled(MaskIcon)`
    color: white;
    margin: 10px 0; 
    ${ QUERY_MD }{
        margin: 10px auto; 
    }
`;

export default ({ data = {} }) => {
    const { icon , name , desc } = data ;

    return (

        <Wrapper>
            <StyledMaskIcon mask={ icon } size={ 50 } />
            <Content>
                <Title> { name } </Title>
                <Description> { desc } </Description>
            </Content>
        </Wrapper>

    )
}