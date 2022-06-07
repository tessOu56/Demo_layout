import React from "react";
import { QUERY_SM , QUERY_MD , QUERY_LG } from '../../../constants/Style';
import Banner from "../../../statics/dummy-map.png";
import styled from "styled-components";

const Wrapper = styled.div` 
    width:100%;
    margin: 0px auto 200px;
    ${ QUERY_MD }{
        margin: 30px auto 0;
    }
`;

const Content = styled.div` 
    width:100%;
    height: 300px;
    background: url( ${ Banner } ) no-repeat ;
    background-size: cover;
`;

export default ({ handleNavigate= f => f  }) => {

    return (

        <Wrapper>
            <Content />
        </Wrapper>

    )
}