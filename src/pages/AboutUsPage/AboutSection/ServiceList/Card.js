import React from "react";
import styled from "styled-components";
import { QUERY_MD } from '../../../../constants/Style';
import { MaskIcon } from '../../../../components';

const Wrapper = styled.div`
    width:100%;
    padding: 20px;
    background-color:white;
    display:grid;
    grid-template-columns: 80px auto ;
    ${ QUERY_MD }{
        grid-template-columns: minmax( auto , 100% ) ;
    }
`;

const TxtBox = styled.div` width: 100% ; `;

const Title = styled.li`
    margin-bottom: 20px ;
    color: var(--font-primary-color);
    font-size: 18px ;
    line-height: 1.4em ;
    letter-spacing: 0.2em ;
    text-transform: uppercase;
`;

const Desc= styled.p`
    margin-bottom: 20px ;
    color: var(--font-primary-color);
    font-size: 14px ;
    line-height: 1.8em ;
`;

export default ( { data={} } ) => {
    const { name , desc , img } = data ;
    return (

        <Wrapper>
            <MaskIcon 
                mask={ img } 
                size={ 52 }
                margin='0 0 30px' 
                color='var(--bg-secondary-color)'
            />
            <TxtBox>
                <Title> { name } </Title>
                <Desc> { desc } </Desc>
            </TxtBox>
        </Wrapper>

    )
}