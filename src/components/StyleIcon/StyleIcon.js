
import { IconContext } from 'react-icons';
import {
    IoLogoFacebook
    , IoLogoInstagram
    , IoLogoTwitter
    , IoLogoLinkedin
    , IoLogoGoogle
    , IoIosCall
    , IoIosMail
    , IoMdPin
    , IoIosSearch
    , IoMdPerson
    , IoMdLaptop
    , IoIosDesktop
    , IoIosArrowDown
    , IoIosArrowBack
    , IoIosArrowForward
    , IoIosArrowUp
    , IoMdClose
} from 'react-icons/io';

export const ChooseIcon = keyword => {
    const CheckWord = keyword.toUpperCase() ;
    switch( CheckWord ){
        case "FB":{
            return <IoLogoFacebook />
        }
        case "IG":{
            return <IoLogoInstagram />
        }
        case "GL":{
            return <IoLogoGoogle />
        }
        case "TT":{
            return <IoLogoTwitter />
        }
        case "LN":{
            return <IoLogoLinkedin />
        }
        case "CALL":{
            return <IoIosCall />
        }
        case "MAIL":{
            return <IoIosMail />
        }
        case "LOCATE":{
            return <IoMdPin />
        }
        case "PERSON":{
            return <IoMdPerson />
        }
        case "DESKTOP":{
            return <IoMdLaptop />
        }
        case "PC":{
            return <IoIosDesktop />
        }
        case "ARROWDOWN":{
            return <IoIosArrowDown />
        }
        case "ARROWFORWARD":{
            return <IoIosArrowForward />
        }
        case "ARROWBACK":{
            return <IoIosArrowBack />
        }
        case "ARROWUP":{
            return <IoIosArrowUp />
        }
        case "CLOSE":{
            return <IoMdClose />
        }
        default:{
            return <IoIosSearch />
        }

    } 
}

export default ({ keyword="" , color , size=16 }) => {
    
    return (
        <IconContext.Provider value={{ color: color , size : size }}>
            { ChooseIcon(keyword) }
        </IconContext.Provider>
    )
    
}