import React , { createContext , useContext , useState } from "react";
import { EmptyObject as EmptyBanner, DataList } from './data';

const BannerContext = createContext();

export const useBanners = () => useContext(BannerContext);

export default function BannerProvider ({ children }) {
    const [ banners , setBanners ] = useState(DataList);

    // add , update , remove
    return (
        <BannerContext.Provider value={{ EmptyBanner , banners , setBanners }}>
            { children }
        </BannerContext.Provider>
    )
}

