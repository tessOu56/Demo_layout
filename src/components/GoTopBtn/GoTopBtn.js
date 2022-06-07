
import React from 'react';
import styled from "styled-components";
import StyleIcon from '../StyleIcon/StyleIcon';

const Wrapper = styled.div`
    position:fixed;
    right: 10px;
    bottom: 30px;
    z-index:6;
    margin:auto;
    width:50px;
    height: 50px;
    background-color: white;
    padding-top:10px;
    border-radius:5px;
    box-shadow: -2px 2px 10px var(--box--shadow-color-light);
    &:hover {
        cursor:pointer;
        box-shadow: -2px 2px 10px var(--box--shadow-color-deep);
    }
`;

export default ({ handleSelect = f => f }) => {

  return (
      <Wrapper onClick={ e => handleSelect(e.target.current) }>
          <StyleIcon keyword="ARROWUP" color="black" size={ 30 } />
      </Wrapper>
  );
};

