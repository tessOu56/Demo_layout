// import React , { createContext , useContext , useState , useEffect, useReducer } from "react";
// import { useNavigate , useParams , useLocation } from "react-router-dom";
import React , { createContext , useContext , useState , useEffect } from "react";
import { useNavigate , useLocation } from "react-router-dom";
import { default as useScroll } from './scroll';
import data from './data';

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export default function MenuProvider ({ children }) {
    const { handleScrollTo , DetectPageY } = useScroll();
    const [ MenuList , setMenu ] = useState(data);
    // const [ CloseState , setCloseState ] = useReducer( (val) => setCloseState(val) , false );
    const [ CloseState , setCloseState ] = useState( false );
    const navigate = useNavigate() ; 
    // const params = useParams();
    const location = useLocation();


    const CheckList = ( list=[] , target ) => {
        // 檢查目錄陣列是否有符合條件者
        const newList = list.map( ( gredient , i ) => {
            if( gredient.name === target ) gredient.selected = true ;
            else gredient.selected = false ;
            return gredient
        });

        setMenu([ ...newList ]);
        return true ;
    } 
  
    const DetectRouter = async(path) => {
        const pathname = path.indexOf('Demo_layout') > -1 ? path.split("/")[2] : path.split("/")[1];
        if( pathname !== "home" ) {
            // 檢查目錄陣列是否有符合條件者
            const checking = await CheckList( MenuList , pathname );
            if ( !checking ) return console.error("wrong");
        }
    }
    
    const handleMenu = async(name='home') => {
        // 檢查目錄陣列是否有符合條件者
        const checking = await CheckList( MenuList , name );
        if ( !checking ) return console.error("wrong");

        navigate(`Demo_layout/${name}`);
        // 換頁時返回頂部
        handleScrollTo();
    }

    const BoxStretch = async() => {
        const { scrollY , offsetElY } = await DetectPageY();

        if( scrollY > offsetElY ) {
            setCloseState( true );
        }else setCloseState( false );

    }

    useEffect( () => {
        DetectRouter(location.pathname);
        window.document.addEventListener('scroll' , BoxStretch , false);
        return () => {
            window.document.removeEventListener('scroll' , BoxStretch , false);
        }
    } , [] )

    return (
        <MenuContext.Provider value={{ MenuList , handleMenu , CloseState , handleScrollTo }}>
            { children }
        </MenuContext.Provider>
    )
}

