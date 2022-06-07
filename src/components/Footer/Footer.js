import React from "react";
import styled from "styled-components";
import Logo from '../../statics/footer-logo.png';
import {  StyleLink } from "../index";
import { QUERY_MD , QUERY_LM , QUERY_LG , QUERY_MAX_W } from '../../constants/Style';

const Wrapper = styled.div`
    background-color:white;
    color: var(--font-secondary-color);
    ${ QUERY_LG }{
        padding: 0 40px;
    }
    ${ QUERY_LM }{
        padding: 40px 80px 15px;
    }
    ${ QUERY_MD }{
        padding: 40px 20px 15px;
    }
`;

const ContentBox = styled.div`
    width: 100%;
    max-width: ${ QUERY_MAX_W };
    margin:auto;
    padding: 35px 0 ;
    font-size: 14px;
    display:grid;
    grid-template-columns: repeat( 4, minmax( auto , 25% )) ;
    grid-template-row: repeat( 4, 1fr) ;
    ${ QUERY_LM }{
        grid-template-columns: 50% 50% ;
    }
    ${ QUERY_MD }{
        grid-template-columns: 100% ;
    }
`;

const QuickList = styled.ul`
    width: 100%;
    padding:10px 15px;
    ${ QUERY_LM }{
        padding:30px 15px;
    }
    ${ QUERY_MD }{
        padding: 15px;
    }
`;

const WebLogo = styled.img`
    width: 80%;
    margin-left: -15px;
    ${ QUERY_LG }{
        margin-left: -10px;
    }
    ${ QUERY_MD }{
        width: 50%;
    }
`;

const WebDescription = styled.p`
    width: 100%;
    font-size: 16px;
    padding-top: 10px;
    line-height: 1.6em;
`;

const ListTitle = styled.ul`
    width: 100%;
    padding:10px 0 15px;
    font-size: 16px;
    line-height: 1.2em;
    letter-spacing: 0.2em;
`;

const ListItem = styled.li`
    width: 100%;
    padding: 5px 0 ;
    line-height: 1.8em;
`;

const SelectlistItem = styled(ListItem)`
    &:hover {
        cursor:pointer;
        color: var(--primary-color);
    }
`;

const CopyRight = styled.div`
    width: 100%;
    max-width: 1200px;
    margin:auto;
    padding: 35px 0 ;
    border-top: 1px solid var(--border-color);
`;

const StyledLink = styled(StyleLink)`
    display: inline-block;
    width: fit-content;
    padding:0 3px ;
    text-align: center;
    font-weight:600;
    font-size:18px;
    color: var(--primary-color);
    &:visited {
        color: var(--primary-color);
    }
    &:hover {
        cursor: pointer; 
        color: var(--secondary-color); 
    }
`;


export default ({ data , handleSelect }) => {

    const Lists = [
        {
            title : "Head office" ,
            childs : [ 
                "4096 N Highland St, Arlington VA 32101, USA" ,
                "info@company.com" ,
                "800 1234 56 78" ,
                "Mon-Thu: 9:30 – 21:00" ,
                "Fri: 6:00 – 21:00" ,
                "Sat: 10:00 – 15:00" ,

            ],
            childfunction : null
        },
        {
            title : "LATEST POSTS" ,
            childs : [ 
                `How Retailers Can Cut Emissions \n November19, 2018` ,
                `Global Private Equity Report 2017 \n November 19, 2018` ,
                `Reinventing the Role of Medical... \n November 19, 2018` ,

            ],
            childfunction : null
        },
        {
            title : "QUICK LINKS" ,
            childs : [ ...data ] ,
            childfunction : (name) => handleSelect(name) 
        }
    ]

    return (

        <Wrapper>
            <ContentBox>
                <QuickList>
                    <WebLogo src={ Logo } />
                    <WebDescription>
                        With a community of over 400 million users (and a majority age group being 18 to 29), wouldn’t you want to make sure you’re monitoring what people are posting on social networks?
                    </WebDescription>
                </QuickList>

                {
                    Lists.map( ({ title , childs=[] , childfunction } , i ) => (
                        <QuickList key={ i } >
                            <ListTitle> { title } </ListTitle>
                            {
                                childs.map( ( item , i ) => (
                                    childfunction ?
                                    <SelectlistItem onClick={ e => { e.preventDefault(); childfunction(item.name);} } key={ i } > { item.name } </SelectlistItem>
                                     :
                                    <ListItem key={ i } >  { item } </ListItem>
                                    
                                ))
                            }
                        </QuickList>
                    )) 
                }
            </ContentBox>
            <CopyRight>
                © 2022 Imperion. All rights reserved. Theme design by 
                <StyledLink 
                    href="https://zemez.io/" 
                    target="_blank" 
                    name="Zemez"
                    // color="var(--primary-color)"
                    // transColor="var(--secondary-color)"
                />
            </CopyRight>
        </Wrapper>

    )
}