
import React , { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { QUERY_MD , QUERY_LG , QUERY_XL , QUERY_XXL } from '../../../constants/Style';
import { StyleIcon } from '../../index';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index: 5;
    background-color: var(--bg-deep-color-deep-opacity);
    display: grid;
    grid-template-rows: 10% 30% minmax( auto , 600px ) auto;

`;

const EmptyBox = styled.div` width: 100% ;`;

const TopGrid = styled.div` 
    width: 100% ;
    display: grid;
    grid-template-columns: auto 120px ;
`;

const ContenGrid = styled.div` 
    width: 100% ;
    height:100%;
    display: grid;
    grid-template-columns: auto 20% minmax( auto , 50% ) 20% auto ;
    > :nth-child(1){
        grid-column: 2 / 2 ;
        grid-row: 1 / 1 ;
        z-index: 1;
    }
    > :nth-child(2){
        grid-column: 3 / 3 ;
        grid-row: 1 / 1 ;
    }
    > :nth-child(3){
        grid-column: 4 / 4 ;
        grid-row: 1 / 1 ;
        z-index: 1;
    }
    ${ QUERY_MD }{ 
        > :nth-child(2){
            grid-column: 2 / 5 ;
            grid-row: 1 / 1 ;
        }
        > :nth-child(2n+1){
            background: linear-gradient( 180deg , var(--box-shadow-color-hover) , transparent 60% );
        }
    }
`;

const CloseIconWrap = styled.div`
    width:fit-content;
    height: fit-content;
    padding: 30px 20px ;
    &:hover {
        cursor: pointer;
    }
`;

const IconGrid = styled.div` 
    width: 100% ;
    padding:0 20px; 
    display: grid;
    grid-template-columns: auto 20% auto ;
    grid-template-rows: 33% auto ;
    ${CloseIconWrap}{
        grid-column: 2 / 2 ;
        grid-row: 2 / 2 ;

    }
    ${ QUERY_XXL }{
        grid-template-columns: auto 30% auto ;
    }
    ${ QUERY_XL }{ 
        grid-template-columns: auto 80% auto ;
    }
    ${ QUERY_LG }{ 
        grid-template-columns: 100% ;
        ${CloseIconWrap}{
            grid-column: 1 / 1 ;
            grid-row: 2 / 2 ;
        }
    }
`;

const ListWrap = styled.div`
    width: 100%;
    height: 100% ;
    overflow: hidden ;
`;

const ImageList = styled.ul`
    width: ${ props => props.length*800 }px ;
    display: flex ;
    flex-flow: row nowrap;
    justify-content: space-around;
`;

const ImageWrap = styled.li`
    width: 100% ;
    max-width: 800px ;
    height:100%;
    margin: 0 auto;
    background-color: var(--box-shadow-color-hover);
    transform: translateX( ${ props => props.transX }% ) ;
    opacity: ${ props => props.selected ? 1 : 0 } ;
    transition: none ;
`;

const ImgBox = styled.img` width:100%; `;

export default ({ dataList=[] , handleSelect =f => f }) => {
    const [ ShowImage , setImages ] = useState( null ); 

    const CheckProps = useMemo( () => dataList.findIndex( data => data.selected === true )  , [ dataList ] );

    const CheckData = ( data = dataList , ignoreState = false ) => {

        const CheckIndex = data.findIndex( data => data.selected === true ) ;

        if( ignoreState ) return CheckIndex ;

        if( CheckIndex > -1 && !ShowImage ) return CheckIndex ;

        return false ;
    } 

    const ConcatCarousel = ( data , targetIndex = 0 ) => {

        const CopyList = data.map( ( item , i ) => {

            // item.transX = -( targetIndex*100 ) + 50 ;
            item.transX = -( targetIndex*100 ) ;
            
            if( i === targetIndex ) item.selected = true ;
            else item.selected = false ;

            return item ;

        }) ;

        setImages( CopyList );

    }

    const CarouselInitial = ( index ) => {

        const newList = dataList.map(({ src , id , selected }) => ( {
            src: src , 
            id: id ,
            selected: selected , 
            transX: ( index - 1 )*100 ,
        })) ;

        ConcatCarousel( newList , index ) ;

    }

    const handleCarousel = async( script='close' ) => {

        switch( script ){
            case"forward": {

                // 將尾元素挪至陣列頭端
                const CopyList = [ ...ShowImage ] ;
                const theLastElement = CopyList.pop() ;

                CopyList.unshift(theLastElement) ;

                const nowIndex = await CheckData( CopyList , true ) ;

                return ConcatCarousel( CopyList , nowIndex -1 ) ;

            }
            case"back": {

                // 將頭元素挪至陣列尾端
                const CopyList = [ ...ShowImage ] ;
                const theFirstElement = CopyList.shift() ;

                CopyList.push(theFirstElement) ;

                const nowIndex = await CheckData( CopyList ) ;

                return ConcatCarousel( CopyList , nowIndex +1 ) ;

            }
            default: {
                if( ShowImage ) handleSelect() ;
                setImages( null ) ;
            }
        }
    }

    useEffect( () => {
        (
            async() => {
                
                const Res = await CheckData(dataList);
        
                if ( !Res && Res !== 0) return false ;

                CarouselInitial( Res );
        
            }
        )();
    } , [ CheckProps ] ) 
    
    if( ShowImage ){
        return (
            <Wrapper onClick={ () => handleCarousel() }>
                <TopGrid>
                    <EmptyBox />
                    <CloseIconWrap onClick={ () => handleSelect(0) } >
                        <StyleIcon keyword="close" color="" size={ 30 } />
                    </CloseIconWrap>
                </TopGrid>
    
                <EmptyBox />
    
                <ContenGrid>
    
                    <IconGrid onClick={ e => { e.stopPropagation() ; handleCarousel('forward') ;} }>
                        <CloseIconWrap>
                            <StyleIcon keyword="ARROWBACK" color="" size={ 30 } />
                        </CloseIconWrap>
                    </IconGrid>
    
                    <ListWrap onClick={ e => { e.stopPropagation() ; } }>
                        <ImageList length={ dataList.length }>
                            {
                                ShowImage.map( ({ id , selected , src , transX }) => (
                                    <ImageWrap key={ id } selected={ selected } transX={ transX } >
                                        <ImgBox src={ src } />
                                    </ImageWrap>
                                ))
                            }
                        </ImageList>
                    </ListWrap>
    
                    <IconGrid onClick={ e => { e.stopPropagation() ; handleCarousel('back') ;} }>
                        <CloseIconWrap>
                            <StyleIcon keyword="ARROWFORWARD" color="" size={ 30 } />
                        </CloseIconWrap>
                    </IconGrid>
    
                </ContenGrid>
            </Wrapper>
    
        )
    }
    return null;
}