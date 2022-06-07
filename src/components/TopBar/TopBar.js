import React from "react";
import styled from "styled-components";
import { QUERY_MD , QUERY_LG , QUERY_MAX_W } from '../../constants/Style';
import { StyleIcon } from "../index";

const Wrapper = styled.div`
    width:100%;
    background-color:var(--font-secondary-color);
    height:fit-content;
`;

const ContentBox = styled.div`
    width: 100%;
    max-width: ${ QUERY_MAX_W };
    color:white;
    padding:15px 0;
    margin:auto;
    display:grid;
    grid-template-columns: minmax( auto , 70% ) minmax( auto , 30% ) ;
    ${ QUERY_LG }{
        padding: 30px 42px ;
        grid-template-columns: minmax( auto , 100% ) ;
        gap: 10px;
    }
`;

const IconWrap = styled.div`
    width:20px;
    height:fit-content;
    color:var(--secondary-color);
`;

const SelectedIconBox = styled(IconWrap)`
    padding:5px;
    box-sizing:content-box;
    border-radius:50%;
    transition:background-color 0.3s 0s linear , color 0s 0s linear;
    margin-right:10px;
    color:var(--secondary-color);
    &:hover {
        cursor:pointer;
        background-color: var(--primary-color);
        color: white;
    }
`;

const InfoList = styled.div`
    width:100%;
    display:flex;
    flex-flow:row nowrap;
    ${ QUERY_MD }{
        grid-rows: 1 / 4 ;
        flex-flow:row wrap;
    }
`;

const InfoBox = styled.div`
    width:fit-content;
    display:flex;
    flex-flow:row nowrap;
    align-items:center;
    ${IconWrap}{
        width:20px;
        height:fit-content;
    }

    ${ QUERY_MD }{
        width: 100%;
        padding: 10px 0;
        justify-content: center;
    }
`;

const TxtBox = styled.div`
    color:white;
    font-size:14px;
    padding-left:12px;
    padding-right:20px;
    ${ QUERY_MD }{
        width:fit-content;
    }
`;

const SelectedTxtBox = styled(TxtBox)`
    &:hover {
        cursor:pointer;
        color:var(--secondary-color);
    }
`;

const MediaList = styled.div`
    width:100%;
    display:flex;
    flex-flow:row nowrap;
    justify-content:flex-end;
    padding-right:20px;
    ${ QUERY_LG }{
        justify-content:flex-start;
    }
    ${ QUERY_MD }{
        justify-content:center;
    }
`;

export default () => {
    const InFos = [
        { name: "CALL", txt: "+800 123 45 67" },
        { name: "MAIL", txt: "info@company.com" },
        { name: "LOCATE", txt: "121 WallStreet Street, NY York, USA" , normal: true }
    ];

    const Icons = [
        { name:'IG', size:20 } ,
        { name:'FB', size:20 } ,
        { name:'TT', size:20 } ,
        { name:'LN', size:20 } ,
    ];


    return (
        <Wrapper>
            <ContentBox>
                <InfoList>
                    {
                        InFos.map( ( { name , txt , normal=false } , i ) => (
                            <InfoBox key={i} >
                                <IconWrap>
                                    <StyleIcon keyword={ name } color="white" />
                                </IconWrap>
                                { 
                                    ( normal && <TxtBox> { txt } </TxtBox> ) ||
                                    <SelectedTxtBox> { txt } </SelectedTxtBox>
                                }
                            </InfoBox>
                        ))
                    }
                </InfoList>
                <MediaList>
                    {
                        Icons.map( ( { name , size } , i ) => (
                            <SelectedIconBox key={i} >
                                <StyleIcon keyword={ name } size={ size }/>
                            </SelectedIconBox>
                        ))
                    }
                </MediaList>
            </ContentBox>
        </Wrapper>
    )
}