import React from "react";
import styled from "styled-components";
import Banner from '../../../../statics/img29.png';
import { QUERY_MD , QUERY_LM , QUERY_LG } from '../../../../constants/Style';
import Card from './Card';

const Wrapper = styled.div`  
    width:100%;  
    padding: 0 0 0;
    margin: 40px auto -50px;
    background: url( ${ props => props.bg } ) no-repeat ;
    // background-size: cover;
    display:grid;
    grid-template-columns: 40% 60% ;
    ${ QUERY_LG } {
        grid-template-columns: 0% 100% ;
        background: url( ${ props => props.bg } ) no-repeat ;
    }
    ${ QUERY_LM } {
        background: none ;
    }

`;

const ContentBox = styled.div`
    width: 100%;
`;

const TxtBox = styled.div`
    width: 100%;
    max-width:750px;
    padding: 50px 80px 250px ;
    background: linear-gradient(90deg, transparent , #ffffff94 30%, transparent);
    ${ QUERY_LM } {
        max-width:none;
        padding: 50px 50px  ;
    }
    ${ QUERY_MD } {
        text-align:center;
    }
}
`;

const Title = styled.p`
    padding: 0;
    margin:auto;
    color: var(--primary-color);
    font-size: 14px;
    font-weight:400;
    letter-spacing: 3px;
    line-height: 1.5em;
    text-transform: uppercase;
    ${ QUERY_LM } {
        padding: 10px 0;
        max-width:650px;
        text-align:center;
    }
`;

const Slogan = styled(Title)`
    padding: 10px 0;
    color: var(--font-primary-color);
    font-size: 32px;
    letter-spacing: 1px;
    line-height: 1.2em;
    text-transform: capitalize;
`;

const PointWord = styled(Slogan).attrs({
    as: 'span'
})`
    display:inline-block;
    width:fit-content;
    color: var(--secondary-color);
    padding: 0 6px;
`;

const Description = styled(Slogan)`
    padding: 15px 0 ;
    font-size:14px;
    font-weight:300;
    letter-spacing: 2px;
    line-height: 1.8em;
    ${ QUERY_LM } {
        max-width:none;
    }
`;

const ItemList = styled.ul`
    width: 100%;
    padding: 20px 0 ;
    transform: translateX(-10px) ;

`;

export default ({  }) => {

    const data = {
        title: 'Our Work Process' ,
        slogan: 'We Have Created ==str;== Professional Service ==str;==  For Our Visitors' ,
        desc: 'UnionHUB is a space for creative people to work and collaborate together. It is based in the belief that together we can create greater things than we could individually or in isolation.' ,
        bg:Banner,
        list: [
            {
                iconType:'ARROWDOWN',
                label:'Create a community',
                desc: 'Make meaningful connections and increase your day-to-day potential by building relationships with like-minded individuals.',

            },
            {
                iconType:'ARROWDOWN',
                label:'Perfect Workspace',
                desc: 'We provides the flexibility needed to create a motivational and energizing environment where you work well.',

            }
        ]
    }

    return (

        <Wrapper bg={ data.bg } >
            <ContentBox />
            <ContentBox>
                <TxtBox>
                    <Title> { data.title } </Title>
                    <Slogan>
                        We Have Created
                        <PointWord> Professional Service </PointWord>
                        For Our Visitors
                    </Slogan>
                    <Description> { data.desc } </Description>
                    <ItemList>
                        {
                            data.list.map( ( item , i ) => ( <Card key={ i } data={ item }/> ))
                        }
                    </ItemList>
                </TxtBox>
            </ContentBox>
        </Wrapper>

    )
}