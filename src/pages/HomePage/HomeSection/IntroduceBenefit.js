import React from "react";
import styled from "styled-components";
import Icon1 from '../../../statics/Imperion-3.svg';
import Icon2 from '../../../statics/Imperion-4.svg';
import Icon3 from '../../../statics/Imperion-5.svg';
import Icon4 from '../../../statics/Imperion-6.svg';
import Icon5 from '../../../statics/Imperion-7.svg';
import Icon6 from '../../../statics/Imperion-0.svg';
import { QUERY_MD , QUERY_MAX_W } from '../../../constants/Style';
import { MaskIcon } from '../../../components';

const Wrapper = styled.div` 
    width:100%;  
    padding: 0 0 30px;
    background-color: white;
`;

const ContentWrap = styled.div`
    width: 100%;
    max-width: ${ QUERY_MAX_W };
    margin:auto;
    text-align: center;
    color: var(--font-primary-color);
`;

const Title = styled.p`
    padding: 10px 10px 20px;
    margin: auto;
    color: var(--primary-color);
    font-size: 12px;
    font-weight:600;
    letter-spacing:3px;
    line-height:1.2em;
    text-transform: capitalize;
`;

const Slogan = styled(Title)`
    padding: 10px 10px 30px;
    color: var(--font-primary-color);
    font-size: 32px;
    font-weight:400;
    letter-spacing:2px;
    text-transform: capitalize;
`;

const ItemGrid = styled.ul`
    width: 100%;
    display:grid;
    grid-template-columns: repeat( 3 , 1fr);
    grid-template-rows: auto;
    ${ QUERY_MD }{
        grid-template-columns: repeat( 1 , 1fr);
    }
`;

const CardBox = styled.div`
    width: 100%;
    padding:35px 15px ;
    display:grid;
    grid-template-rows: 50px auto ;
`;


const CardContent = styled.div`
    width:100%;
`;

const CardTitle = styled.p`
    padding: 25px 0 10px;
    color: var(--font-primary-color);
    font-size: 18px;
    letter-spacing:5px;
    font-weight:500;
    line-height:1.4em;
`;

const CardDesc = styled(CardTitle)`
    padding: 10px 0;
    margin: 0 auto ;
    font-size: 14px;
    font-weight:400;
    line-height:1.8em;
    letter-spacing:1px;
`;

export default ( ) => {
    const Lists = [
        {
            name:'Conference Rooms',
            desc:'You can book the room for conference, presentation etc.',
            icon:Icon1,
        },
        {
            name:'High Speed Internet',
            desc:'We provide you with a free high speed Internet 24/7.',
            icon:Icon2,
        },
        {
            name:'Mail Service',
            desc:'We offer mailing address and  hold your mail until you are a member of our coworking.',
            icon:Icon3,
        },
        {
            name:'Equipped Kitchen',
            desc:'You can make a coffee break or have a full dinner during the day using our kitchen.',
            icon:Icon4,
        },
        {
            name:'Organic Tea & Coffee',
            desc:'We provide our visitors with organic tea and coffee that they feel comfortable.',
            icon:Icon5,
        },
        {
            name:'Events Space',
            desc:'It is available to rent the space for holding meetings, events etc.',
            icon:Icon6,
        },
    ]

    return (

        <Wrapper>
            <ContentWrap>
                <Title> OUR BENEFITS </Title>
                <Slogan> Your Comfort is Our Priority </Slogan>
                <ItemGrid>
                {
                    Lists.map( ({ name , desc , icon } , i ) => (
                        <CardBox key={ i } >
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
                    ))
                }
                </ItemGrid>
            </ContentWrap>
        </Wrapper>

    )
}