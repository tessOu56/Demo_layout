
import React from "react";
import { useMenu } from '../../context/MenuContext';
import { useMembers } from '../../context/MemberContext';
import { usePrices } from '../../context/PriceContext';
import { BreadCrumb , NoLoopCarousel , PricePlan , ReservationBanner , ContactForm } from '../../components';
import MemberBg from '../../statics/img23.png';


export default () => {
    const { handleMenu } = useMenu();
    const { prices } = usePrices();
    const { members } = useMembers();

    return (

        <>
            <BreadCrumb sitename="pricing" handleSelect={ handleMenu }/>
            <PricePlan data={ prices } padding='85px 0 0' handleSelect={ handleMenu }/>
            <NoLoopCarousel data={ members } bg={ MemberBg } />
            <ReservationBanner handleSelect={ handleMenu }/>
            <ContactForm />
        </>

    )
}