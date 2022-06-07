import React, { useReducer } from "react";
import styled from "styled-components";
import Logo from '../../statics/logo.png';
import { QUERY_MD , QUERY_LG , QUERY_MAX_W } from '../../constants/Style';
import MenuLink from './MenuLink';

const Wrapper = styled.div`
    width:100%;
    background-color:var(--font-secondary-color-opacity);
    height:${ props => props.CloseState ? 0 : 'fit-content' };
    overflow:hidden;
`;

const ContentBox = styled.div`
    width: 100%;
    max-width: ${ QUERY_MAX_W };
    color:white;
    padding:15px 0;
    margin:auto;
    display:grid;
    grid-template-columns: 170px auto ;
    ${ QUERY_LG }{
        padding:10px 30px 0;
        grid-template-columns: 100% ;
        grid-template-rows: auto ;
    }
    ${ QUERY_MD }{
        grid-template-columns: auto 170px auto ;
    }
`;

const LogoBox = styled.img`
    width:100%;
    ${ QUERY_LG }{
        width:170px;
        padding-left: 10px;
    }
    ${ QUERY_MD }{
        grid-column: 2/2;
    }
`;
const HumberBox = styled.div`
    display: none;
    position: absolute;
    top: 10px;
    left: -40px;
    width:40px;
    height:40px;
    padding: 10px;
    color:white;
    font-weight:600;
    background-color:var(--primary-color);
    ${ QUERY_MD }{
        display: block;
    }
`;
const MobileBG = styled.div`
    position: fixed;
    background-color:var(--bg-deep-color-deep-opacity);
    width:100%;
    height:100%;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:5;
    display:${ props => props.mobileTrans ? 'block' : 'none' };
`;

const Navigation = styled.div`
    position: relative;
    display:flex;
    flex-flow:row nowrap;
    justify-content:flex-end;
    align-items: center;
    ${ QUERY_LG }{
        justify-content:flex-start;
    }
    ${ QUERY_MD }{
        background-color:var(--font-primary-color);
        width: 70%;
        position: fixed;
        top:0;
        right:${ props => props.mobileTrans ? 0 : '-70%' };
        bottom:0;
        display:block;
        padding: 20px 0 0 30px;
        z-index:6;
    }
`;


export default ({ data=[] , handleSelect= f => f  , CloseState = false }) => {
    const [ MobileState , setMobile ] = useReducer( pre => !pre , false ) ; 

    return (

        <Wrapper CloseState={ CloseState } >
            <ContentBox>
                <LogoBox src={Logo} />
                <MobileBG mobileTrans={ MobileState } />
                <Navigation mobileTrans={ MobileState } >
                    <HumberBox onClick={ () => setMobile() }>三</HumberBox>
                    {
                        data.map( ( { id , ...page } ) => <MenuLink key={id} { ...page } handleSelect={handleSelect} /> )
                    }
                    
                </Navigation>
            </ContentBox>
        </Wrapper>

    )
}