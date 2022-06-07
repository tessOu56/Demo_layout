
import React from "react";
import styled from "styled-components";
import { StyleIcon } from "../../../components";

const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--bg-deep-color-opacity);
    opacity:0;
`;
const IconWrap = styled.div`
    position: absolute;
    width: fit-content;
    top:130px;
    left:0;
    right:0;
    margin:auto;
    transform: scale(0);
    opacity:0;
`;

const Item = styled.li`
    width: 100%;
    height: 300px;
    background: url( ${ props => props.src } ) no-repeat ;
    background-size: cover;
    border-radius: 5px;
    position: relative;

    &:hover {
        cursor: pointer;
        ${ Background } {
            opacity:1;
        }
        ${ IconWrap } {
            transform: scale(1);
            opacity:1;
        }
    }
`;



export default ({ data  , handleSelect }) => {
    const { index , src } = data ;
    
    return (

        <Item src={ src } onClick={ e => { e.preventDefault(); handleSelect(index); }}>
            <Background />
            <IconWrap>
                <StyleIcon keyword="" size={ 40 } color="var(--secondary-color)" />
            </IconWrap>
        </Item>

    )
}