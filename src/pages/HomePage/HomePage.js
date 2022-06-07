
import React , { useMemo } from "react"; 
import { useMenu } from '../../context/MenuContext';
import { useBanners } from '../../context/BannerContext';
import { useProducts } from '../../context/ProductContext';
import { useMembers } from '../../context/MemberContext';
import { usePrices } from '../../context/PriceContext';
import { NoLoopCarousel , PricePlan , ReservationBanner , ContactForm } from '../../components'; 
import Banner from './HomeSection/Banner';
import Section2 from './HomeSection/Introduce';
import Section3 from './HomeSection/IntroduceCards'; 
import Section4 from './HomeSection/IntroduceServices'; 
import Section5 from './HomeSection/IntroduceBenefit'; 
import Section6 from './HomeSection/CardsGrid/CardsGrid'; 

import MemberBg from '../../statics/img23.png';
import Icon1 from '../../statics/Imperion-0.svg';
import Icon2 from '../../statics/Imperion-1.svg';
import Icon3 from '../../statics/Imperion-2.svg';


export default () => {
    
    const { handleMenu } = useMenu();
    const { EmptyBanner , banners } = useBanners();
    const { products } = useProducts() ;
    const { members } = useMembers();
    const { prices } = usePrices();

    const Banner1 = useMemo(() => {
        const filterArr = banners.filter( item => item['scope']['page'] === 'home' && item['scope']['index'] === 'Banner1' );
        return filterArr[0] ;
    } , [ banners ] );

    const WorkInfoList = [ 
        {
            name : 'Working place' , 
            desc : 'We provide you with convenient working place that your work is productive.' , 
            img : Icon1 , 
        } ,
        {
            name : 'Making Projects' , 
            desc : 'In our coworking space you can communicate and collaborate with people.' , 
            img : Icon2 , 
        } ,
        {
            name : 'Get Successful' , 
            desc : 'Your will improve your professional indicators working in our coworking.' , 
            img : Icon3 , 
        } ,
    ] 

    return (

        <>
            <Banner data={ Banner1['content'] || { ...EmptyBanner } } handleSelect={ handleMenu }/>
            <Section2 />
            <Section3 data={WorkInfoList} />
            <Section4 handleSelect={ handleMenu }/>
            <Section5 />
            <Section6 data={ products } />
            <NoLoopCarousel data={ members } bg={ MemberBg } />
            <ReservationBanner handleSelect={ handleMenu }/>
            <PricePlan data={ prices } handleSelect={ handleMenu }/>
            <ContactForm />
        </>

    )
}