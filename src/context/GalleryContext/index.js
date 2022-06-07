import React , { createContext , useContext , useState } from "react";
import { TitleList , ItemList } from './data';

const GalleryContext = createContext();

export const useGallerys = () => useContext(GalleryContext);

export default function GalleryProvider ({ children }) {
    const [ galleryTitles , setGalleryTitles ] = useState(TitleList);
    const [ galleryItems , setGalleryItems ] = useState(ItemList);
 
    // add , update , remove
    
    return (
        <GalleryContext.Provider value={{ galleryTitles , galleryItems }}>
            { children }
        </GalleryContext.Provider>
    )
}

