import React from "react";
import { useMenu } from '../../context/MenuContext';
import { useGallerys } from '../../context/GalleryContext';
import { BreadCrumb , ContactForm } from '../../components';
import GalleryGrid from './GalleryGrid/GalleryWall';

export default () => {
    const { handleMenu } = useMenu();
    const { galleryTitles , galleryItems } = useGallerys() ;

    return (

        <>
            <BreadCrumb sitename="gallery" handleSelect={ handleMenu }/>
            <GalleryGrid Titles={ galleryTitles } Items={ galleryItems } />
            <ContactForm />
        </>

    )
}