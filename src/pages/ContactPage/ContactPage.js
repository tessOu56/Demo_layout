import React from "react";
import { useMenu } from '../../context/MenuContext';
import { BreadCrumb , ContactForm } from '../../components';
import FullScreenMap from './FullScreenMap/FullScreenMap';



export default () => {
    const { handleMenu } = useMenu();

    return (

        <>
            <BreadCrumb sitename="contact" handleSelect={ handleMenu }/>
            <ContactForm lightStyle={ true } />
            <FullScreenMap />
        </>

    )
}