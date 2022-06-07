
import React , { useState } from "react";
import styled from "styled-components";
import { QUERY_MD , QUERY_LG , QUERY_MAX_W } from '../../../constants/Style';
import GalleryTitle from './GalleryTitle';
import GalleryItem from './GalleryItem';
import { FullScreenCarousal } from '../../../components'; 

const Wrapper = styled.div` 
    width:100%;
    padding: 80px 0;
    ${ QUERY_LG }{
        padding: 50px 0 80px;
    }
    ${ QUERY_MD }{
        padding: 30px 0 ;
    }
`;

const ContentWrap = styled.div` 
    width:100%;
    max-width: ${ QUERY_MAX_W };
    margin: auto;
`;

const TitleList = styled.ul`
    width: 100%;
    display: flex ;
    flex-flow: row nowrap;
    justify-content: center;
    ${ QUERY_LG }{
        flex-flow: row wrap;
        justify-content: center;
    }
`;

const ItemList = styled.ul`
    width: 100%;
    padding-top: 50px;
    display: grid ;
    grid-template-columns: repeat( 3 , minmax( auto , 34% ));
    grid-gap: 20px;
    ${ QUERY_LG }{
        grid-template-columns: repeat( 2 , minmax( auto , 50% ));
    }
    ${ QUERY_MD }{
        padding-top: 30px;
        grid-template-columns: minmax( auto , 100% );
    }
`;


export default ({ Titles=[] , Items=[] }) => {
    
    const [ TitleState , setTitleState ] = useState(Titles.map( item => ({ selected: true , ...item })));
    const [ ItemState , setItemState ] = useState(Items.map( item => ({ selected: false , showed: true , ...item })));
 
    const handleTitleSelect = ( index=0 ) => {
        const newTitleState = TitleState.map( item => {
            if( item.index === index ) item.selected = true ;
            else item.selected = false ;

            return item ;
        })
        
        const newItemState = ItemState.map( item => {
            
            if( item.titleIndex === index || index === 0 ) item.showed = true ;
            else item.showed = false ;

            return item ;
        })

        setTitleState(newTitleState);
        setItemState(newItemState);

    }

    const handleItemSelect = ( index=0 ) => {
        const newItemState = ItemState.map( item => {
            if( item.index === index ) item.selected = true ;
            else item.selected = false ;

            return item ;
        })
        setItemState(newItemState);
    }

    return (

        <Wrapper>
            <ContentWrap>
                <TitleList>
                    {
                        TitleState.map( ({ id , ...item }) => ( <GalleryTitle key={ id } data={ item } handleSelect={ handleTitleSelect }/> ))
                    }
                </TitleList>
                <ItemList>
                    {
                        ItemState.map( ({ id , showed , ...item }) =>  showed && <GalleryItem key={ id } data={ item } handleSelect={ handleItemSelect }/>  )
                    }
                </ItemList>
            </ContentWrap>
            <FullScreenCarousal dataList={ ItemState } handleSelect={ handleItemSelect }/> 
        </Wrapper>

    )
}