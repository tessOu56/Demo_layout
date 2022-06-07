import React from "react";
import styled from "styled-components";
import { QUERY_MD } from '../../constants/Style';
import { StyleIcon } from '..';

const Wrapper = styled.li`
    width:fit-content;
    display:flex;
    flex-flow:row nowrap;
    align-items:center;
`;

const IconWrap = styled.div`
    width:30px;
    color:var(--secondary-color);
`;

const TxtBox = styled.p`
    font-size:18px;
    letter-spacing:1px;
    font-weight:400;
    line-height:1.8em;
    padding-left:26px;
`;

const SelectedTxtBox = styled(TxtBox)`
    &:hover {
        cursor:pointer;
        color:var(--secondary-color);
    }
`;


export default ( { data = {} } ) => {
    const { name , normal , txt } = data ;

    return (
        <Wrapper>
            <IconWrap>
                <StyleIcon keyword={ name } size={ 42 } />
            </IconWrap>
            { 
                ( normal && <TxtBox> { txt } </TxtBox> ) ||
                <SelectedTxtBox> { txt } </SelectedTxtBox>
            }
        </Wrapper>
    )
}