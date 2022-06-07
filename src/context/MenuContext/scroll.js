

import React from "react";

export default function useScroll () {
  
    const handleScrollTo = async( el = null , scrollEl = null ) => {

        // 設定當前位置之元素
        const current = el || document.getElementById('header') ;

        // 設定目標位置之元素
        const target = scrollEl || document.getElementById('header') ;

        const timeout  = setInterval( async() => {
            // 偵測目前位置與瀏覽器頂部之距離
            const { scrollY , targetY } = await DetectPageY( current , target ) ;
            
            // 檢查目前位置與目標位置之距離，以 1100px 為每 0.1秒 滑動單位
            if( scrollY === targetY ) return clearInterval(timeout) ;

            if( targetY - scrollY > 0 ){

                if( targetY - scrollY < 300 ) return window.scrollTo( 0 , targetY );

                return window.scrollTo( 0 , scrollY + 300 );
            }

            if( scrollY - targetY < 300 ) return window.scrollTo( 0 , targetY );

            return window.scrollTo( 0 , scrollY - 300 );

        }, 30 );
         
        
    }
    const DetectPageY = ( el = null , scrollEl = null ) => {

        // 瀏覽器滑動之距離
        const scrollY = window.scrollY ;
        // 設定當前位置之元素

        const current = el || document.getElementById('header');
        // 偵測目前位置之元素高度
        const offsetElY = current.offsetHeight ;

        // 設定目標位置之元素
        const target = scrollEl || document.getElementById('header');
        // 目標位置與瀏覽器頂部之距離
        const targetY = target.scrollTop ;

        return { scrollY , offsetElY , targetY } ;
    }

    return { handleScrollTo , DetectPageY }
}

