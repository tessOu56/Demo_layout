

import ProductProvider from './ProductContext';
import PricesProvider from './PriceContext';
import BannerProvider from './BannerContext';
import GalleryProvider from './GalleryContext';
import MenuProvider from './MenuContext';
import MemberProvider from './MemberContext';


export default function AllProviders ({ children }){

    return (

        <ProductProvider>
        <PricesProvider>
        <BannerProvider>
        <GalleryProvider>
        <MenuProvider>
        <MemberProvider>
            { children }
        </MemberProvider>
        </MenuProvider>
        </GalleryProvider>
        </BannerProvider>
        </PricesProvider>
        </ProductProvider>
    )
}