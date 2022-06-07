import React from "react";
import styled from "styled-components";
import Banner from '../../../statics/img31.jpg';
import { QUERY_MD , QUERY_MAX_W } from '../../../constants/Style';
import { ReservationBanner , StyleButton } from '../../../components';

const ContentBox = styled.div`
    width: 100%;
    max-width: ${ QUERY_MAX_W };
    text-align: center;
    color:white;
    margin:0 auto ;
`;

const Title = styled.p`
    padding: 0;
    margin:auto;
    font-size: 32px;
    font-weight:400;
    letter-spacing: 3px;
    line-height: 1.5em;
    ${ QUERY_MD }{
        font-size: 20px;
    }
`;

const Slogan = styled(Title)`
    padding: 10px 0;
    font-size: 48px;
    line-height: 1.2em;
    text-transform: capitalize;
    ${ QUERY_MD }{
        font-size: 20px;
    }
`;

const PointWord = styled(Slogan).attrs({
    as: 'span'
})`
    display:inline-block;
    width:fit-content;
    color: var(--secondary-color);
    padding: 0 6px;
`;

const Description = styled(Title)`
    padding: 10px 0;
    font-size:14px;
    font-weight:300;
    letter-spacing: 2px;
    line-height: 1.8em;
`;

const StyledButton = styled(StyleButton)`
    width: fit-content;
    margin: 30px auto;
    padding: 20px 40px ;
`;

export default ({ handleSelect = f => f }) => {

    return (

        <ReservationBanner bg={ Banner } child={
            <ContentBox>
                <Title>
                    Still Have Some Questions Left?
                </Title>
                <Slogan>
                    Call us  
                    <PointWord> Tel:855-456-7634 </PointWord>
                </Slogan>
                <Description> 
                    Feel free to contact our support team to learn more about the services provided by us and multiple offers for Your business!
                </Description>
                <StyledButton name="contact us" handleSelect={ () => handleSelect('contact') }/>
            </ContentBox>
        } />

    )
}