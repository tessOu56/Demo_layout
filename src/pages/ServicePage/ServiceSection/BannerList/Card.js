import React from "react";
import styled from "styled-components";
import { QUERY_MD } from '../../../../constants/Style';
import { StyleIcon } from '../../../../components';

const Wrapper = styled.li`  
    width:100%;  
    padding: 10px 0 ;
    display:grid;
    grid-template-columns: 50px auto ;
    ${ QUERY_MD } {
        grid-template-columns: 100% ;
    }
`;

const IconWrap = styled.div`
    width:100%;
    padding-top: 3px;
`;

const TxtBox = styled.div`
    width:100%;
`;

const Title = styled.p`
    color: var(--font-primary-color);
    font-size:20px;
    font-weight:300;
    letter-spacing: 5px;
    line-height: 1.8em;
    text-transform: uppercase;
`;

const Desc = styled(Title)`
    padding: 10px 0;
    font-size:14px;
    font-weight:300;
    letter-spacing: 2px;
    line-height: 1.5em;
    text-transform: capitalize;
`;



export default ({ data }) => {
    const { iconType , label , desc } = data ;

    return (

        <Wrapper>
            <IconWrap>
                <StyleIcon keyword={ iconType } color="var(--primary-color)" size={ 30 } />
            </IconWrap>
            <TxtBox>
                <Title> { label } </Title>
                <Desc> { desc } </Desc>
            </TxtBox>
        </Wrapper>

    )
}