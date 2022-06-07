import React from "react";
import styled from "styled-components";
import { MaskIcon } from '../../../../components';


const CardBox = styled.li`
    width: 100%;
    padding:50px 25px 60px;
    display:grid;
    grid-template-rows: 50px auto ;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    box-shadow: 4px 5px 10px 0 var(--box-shadow-color) ;
    &:hover {
        box-shadow: 4px 5px 10px 0 var(--box-shadow-color-hover) ;
    }
`;

const CardContent = styled.div`
    width:100%;
`;

const CardTitle = styled.p`
    font-size: 18px;
    letter-spacing:5px;
    font-weight:500;
    line-height:1.4em;
    padding: 25px 0 10px;
    color: var(--font-primary-color);
`;

const CardDesc = styled(CardTitle)`
    font-size: 14px;
    font-weight:400;
    line-height:1.8em;
    letter-spacing:1px;
    padding: 10px 0;
    margin: 0 auto ;
`;

export default ({ data }) => {
    const { icon , name="" , desc } = data ;

    return (

        <CardBox>
            <MaskIcon 
                mask={ icon } 
                size={ 50 }
                margin='auto' 
                color='var(--primary-color)'
                transColor='var(--secondary-color)'
            />
            <CardContent>
                <CardTitle> { name.toUpperCase() } </CardTitle>
                <CardDesc> { desc } </CardDesc>
            </CardContent>
        </CardBox>

    )
}