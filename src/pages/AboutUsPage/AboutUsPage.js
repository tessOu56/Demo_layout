import React from "react";
import styled from "styled-components";
import { QUERY_LM  } from '../../constants/Style';
import { useMenu } from '../../context/MenuContext';
import { useProducts } from '../../context/ProductContext';
import { useMembers } from '../../context/MemberContext';
import { BreadCrumb , NoLoopCarousel , ReservationBanner , ContactForm } from '../../components';
import BannerBg from '../../statics/img17.jpg';
import ServiceBg from '../../statics/img18.jpg';
import MemberBg from '../../statics/img23.png';
import Banner from './AboutSection/Banner/Banner';
import ServiceList from './AboutSection/ServiceList/ServiceList';
import MemberList from './AboutSection/MemberList/MemberList';
 

const StyledReservationBanner = styled(ReservationBanner)`  
    padding: 100px 0 220px ;
    ${ QUERY_LM }{
        padding: 100px 0 ;
    }
`;

export default () => {
    const { handleMenu } = useMenu();
    const { results } = useProducts();
    const { members , employees } = useMembers();

    const reservetion = {
        title: 'what we do',
        slogan: 'bound to Give You Prosperity & Confidence',
        desc: 'Open floor plans, communal desks for teams and private offices in a bright, airy atmosphere create an affordable, professional alternative to working from home, encourage collaboration and allow you to find new inspiration, every day.',
        nobtn: true , 
    }

    const bannerdata = {
        content: {
            bg: BannerBg ,
            title: 'About Us' ,
            slogan: 'We help you to get your best work done.' ,
            desc: `We’re all about creating a great experience for our members and adding them to a remarkable group of thousands of people who’ve made us what we are today. ==%nn%== Since 2008, we’ve grown from one location in an old factory building in New York to seven locations in USA in general, and we’re still growing! Our mission is connecting like-minded people.` ,
            btn: {
                name: 'our service' ,
                fn: () => handleMenu('service')
            },
        },
        list: [ 
            { 
                id: 0 ,
                name: 'Coffee Cups' ,
                desc: 1587 
            } ,
            { 
                id: 1 ,
                name: 'Satisfied Clients' ,
                desc: 2144 
            } ,
            { 
                id: 2 ,
                name: 'Finished Projects' ,
                desc: 3128 
            } ,
            { 
                id: 3 ,
                name: 'Working Hours' ,
                desc: 9748 
            } ,
        ]
    }

    return (

        <>
            <BreadCrumb sitename="about" handleSelect={ handleMenu }/>
            <Banner data={ bannerdata }/>
            <StyledReservationBanner data={ reservetion } handleSelect={ handleMenu }/>
            <ServiceList data={ results } banner={ ServiceBg }/>
            <MemberList data={ employees } />
            <NoLoopCarousel data={ members } bg={ MemberBg } />
            <ContactForm />
        </>

    )
}