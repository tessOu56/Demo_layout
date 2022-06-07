
import React from 'react' ;
import styled from 'styled-components';
import { QUERY_MAX_W } from '../../constants/Style';


const Wrapper = styled.div`
    width:100%;
    margin: 20px auto 0;
`;

const ContentWrap = styled.div`
    width:100%;
    background-color: white;
`;

const Content = styled.ul`
    width:100%;
    max-width: ${ QUERY_MAX_W }; 
    padding-top: 40px;
    margin: auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    
`;

const LinkItem = styled.li`
    width: fit-content;
    padding: 0 30px;
    font-size: 12px;
    font-weight: 500;
    color: var(--font-secondary-color);
    letter-spacing: 2px;
    text-transform: uppercase;
`;

const SelectedLinkItem = styled(LinkItem)`
    color: var(--primary-color);
    &:hover {
        cursor: pointer;
        color: var(--secondary-color);
    }
`;

const SeperateLine = styled.li`
    width:1px;
    border-right: 2px solid var(--font-secondary-color);
`;

export default ({ sitename="" , handleSelect= f => f  }) => {


    return (
        <Wrapper>
            <ContentWrap> 
                <Content>
                    <SelectedLinkItem onClick={ e => {
                        e.preventDefault();
                        handleSelect();
                    } }> Home </SelectedLinkItem>
                    <SeperateLine />
                    <LinkItem> { sitename } </LinkItem>
                </Content>
            </ContentWrap>
        </Wrapper>
    )
}