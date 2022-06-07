
import React from 'react';
import styled from "styled-components";
import './App.css';
import { useMenu } from './context/MenuContext';
import { TopBar , Menu , Footer , PageLoading , GoTopBtn } from './components';
import { default as Content } from './pages';

const Header = styled.div`
    position:sticky;
    top:0;
    left:0;
    right:0;
    margin:auto;
    width:100%;
    height: fit-content;
    overflow:hidden;
    z-index:5;
    background-color: var(--font-primary-color);
    transform: translateY(${ props => props.hidden ? -100 : 0}%);
`;

function App() {
  const { MenuList , handleMenu , CloseState , handleScrollTo } = useMenu(); 

  return (
      <>
        <Header hidden={ CloseState } id="header" >
          <TopBar />
          <Menu data={ MenuList } handleSelect={ handleMenu } />
        </Header>
        { <Content /> || <PageLoading /> }
        { CloseState && <GoTopBtn handleSelect={ handleScrollTo } /> }
        <Footer data={ MenuList } handleSelect={ handleMenu } />
      </>
  );
}

export default App;

