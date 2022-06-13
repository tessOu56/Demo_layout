
// import { useRoutes } from "react-router-dom";
import { Routes , Route , Navigate } from "react-router-dom";
import { default as HomePage } from './HomePage/HomePage';
import { default as AboutUs } from './AboutUsPage/AboutUsPage';
import { default as Gallery } from './GalleryPage/GalleryPage';
import { default as Service } from './ServicePage/ServicePage';
import { default as Pricing } from './PricePage/PricePage';
import { default as ContactUs } from './ContactPage/ContactPage';


export default () => {

    // 比對後發現 useRoutes 在此情境下較耗時
    // let element = useRoutes([
    //     { 
    //         path:"/" , element: <HomePage /> ,
    //         // children: []
    //     },
    //     { path:"/home" , element: <HomePage />} , 
    //     { path:"/about" , element: <AboutUs />} , 
    //     { path:"/gallery" , element: <Gallery />} , 
    //     { path:"/service" , element: <Service />} , 
    //     { path:"/pricing" , element: <Pricing />} , 
    //     { path:"/contact" , element: <ContactUs />} , 
    // ])
    // return element ;
    
    return (
        <Routes>
            <Route path="/Demo_layout" element={ <Navigate to="/Demo_layout/home" replace />} />
            <Route path="/Demo_layout/home" element={ <HomePage /> } />
            <Route path="/Demo_layout/about" element={ <AboutUs /> } />
            <Route path="/Demo_layout/gallery" element={ <Gallery /> } />
            <Route path="/Demo_layout/service" element={ <Service /> } />
            <Route path="/Demo_layout/pricing" element={ <Pricing /> } />
            <Route path="/Demo_layout/contact" element={ <ContactUs /> } />
            <Route path="*" element={ <Navigate to="/Demo_layout" replace />} />
        </Routes>
    )
}