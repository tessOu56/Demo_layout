import React , { useState } from "react";
import styled from "styled-components";
import { QUERY_MD , QUERY_LG , QUERY_MAX_W } from '../../constants/Style';
import { StyleButton , StyleInput } from '../../components';
import InfoItem from './InfoItem';
// import useInput from './useInput';

const Wrapper = styled.div`  
    width:100%;  
    padding: 80px 0 100px;
    background-color: ${ props => props.lightStyle ? 'white' : 'var(--font-primary-color)' };
    color: ${ props => props.lightStyle ?  'var(--font-primary-color)' : 'white' } ;
    ${ QUERY_MD }{
        padding: 30px 0 20px;
    }
`;

const ContentWrap = styled.div`
    width: 100%;
    max-width: ${ QUERY_MAX_W };
    margin:auto;
    text-align: left;
    display:grid;
    grid-template-columns: minmax( auto , 40% )  minmax( auto , 60% ) ;
    grid-gap: 50px;
    ${ QUERY_LG }{
        grid-template-columns: minmax( auto , 45% )  minmax( auto , 55% ) ;
        grid-gap: 0px;
    }
    ${ QUERY_MD }{
        grid-template-columns: minmax( auto , 100% ) ;
        grid-gap: 20px;
    }
`;

const ContentBox = styled.div`
    width: 100%;
    ${ QUERY_LG }{
        padding: 0 10px;
    }
`;

const ContentTxtBox = styled(ContentBox)`
    padding-right: 100px;
    ${ QUERY_LG }{
        padding-right: 30px;
    }
`;

const Title = styled.p`
    font-size: 12px;
    font-weight:600;
    padding: 10px;
    margin: auto;
    letter-spacing:3px;
    line-height:1.2em;
    // text-transform: uppercase;
    color: var(--primary-color);
`;

const Slogan = styled.p`
    font-size: 32px;
    font-weight:400;
    padding: 10px;
    margin: auto;
    letter-spacing:2px;
    line-height:1.2em;
    text-transform: capitalize;
`;

const Description = styled(Slogan)`
    text-transform: initial;
    font-size: 14px;
    letter-spacing:1px;
    font-weight:400;
    line-height:1.8em;
`;

const StyledButton = styled(StyleButton)`
    margin: 20px 0;
`;

const InfoList = styled.ul`
    width:100%;
    padding-top: 15px;
    ${ QUERY_MD }{
        padding: 15px 0 0 10px;
    }
`;

const StyledForm = styled.div`
    width: 100%;
`;

export default ( { lightStyle = false } ) => {

    const [ Values , setValues ] = useState([
        {
            name: "Name" , 
            key: "name" , 
            value:"" , 
            type: "text" ,
            required: true ,
            error: false
        } , 
        {
            name: "E-mail" , 
            key: "mail" , 
            value:"" , 
            type: "text" ,
            required: true ,
            error: false 
        } , 
        {
            name: "Message" , 
            key: "msg" , 
            value:"" , 
            type: "textarea" ,
            required: false ,
            error: false
        } , 
    ]);

    const InFos = [
        { name: "LOCATE", txt: "121 WallStreet Street, NY York, USA" , normal: true },
        { name: "MAIL", txt: "info@company.com" },
        { name: "CALL", txt: "+800 123 45 67" },
    ];

    return (

        <Wrapper lightStyle={ lightStyle } >
            <ContentWrap>
                <ContentBox>
                    <Title> GET IN TOUCH </Title>
                    <Slogan> Contact Details </Slogan>
                    <Description>
                        If you are interested in working with us then please drop us a line, we would love to hear from you.                        
                    </Description>
                    <InfoList>
                        {
                            InFos.map( ( item , i ) => ( <InfoItem key={i} data={ item } /> ))
                        }
                    </InfoList>
                </ContentBox>
                <ContentTxtBox>
                    <Title> CONTACT US </Title>
                    <Slogan> Drop Us A Line </Slogan>
                    <StyledForm>
                        {
                            Values.map( ( item , i ) => ( <StyleInput key={ i } {...item} /> ))
                        }
                    </StyledForm>
                    <StyledButton name="send message"></StyledButton>
                </ContentTxtBox>
            </ContentWrap>
        </Wrapper>

    )
}