
import React from "react";
import { v4 } from 'uuid';
import { useMenu } from '../../context/MenuContext';
import { usePrices } from '../../context/PriceContext';
import { BreadCrumb , PricePlan , ContactForm } from '../../components';
import Section1 from './ServiceSection/BannerList/BannerList';
import Section2 from './ServiceSection/CardsGrid/CardsGrid';
import Section3 from './ServiceSection/FeatureList/FeatureList';
import Section4 from './ServiceSection/BannerCalling';


import Icon1 from '../../statics/Services–Imperion-0.svg';
import Icon2 from '../../statics/Services–Imperion-1.svg';
import Icon3 from '../../statics/Services–Imperion-2.svg';
import Icon4 from '../../statics/Services–Imperion-3.svg';
import Icon5 from '../../statics/Services–Imperion-4.svg';
import Icon6 from '../../statics/Services–Imperion-5.svg';


import FeatureBanner from '../../statics/img2.png';
import Icon7 from '../../statics/Services–Imperion-6.svg';
import Icon8 from '../../statics/Services–Imperion-7.svg';
import Icon9 from '../../statics/Services–Imperion-8.svg';


export default () => {
    const { handleMenu } = useMenu();
    const { prices } = usePrices();

    const Lists = [
        {
            id: v4() ,
            name:'Best prices',
            desc:'You can select one of the suggested plan, which  perfect fits to you. at the best price.',
            icon:Icon1,
        },
        {
            id: v4() ,
            name:'Consulting',
            desc:'You can consult with our experts and like-minded people according your projects.',
            icon:Icon2,
        },
        {
            id: v4() ,
            name:'Brainstorming',
            desc:'We always hold brainstorming meeetings in our coworking space for like-minded people.',
            icon:Icon3,
        },
        {
            id: v4() ,
            name:'Growth',
            desc:'You can develop and increase your professional skills in the coworking.',
            icon:Icon4,
        },
        {
            id: v4() ,
            name:'Library',
            desc:'You get an access to a huge library, where you can find needed materials for your work.',
            icon:Icon5,
        },
        {
            id: v4() ,
            name:'Variety of Workspace',
            desc:'It is available to rent the space for holding meetings, events etc.',
            icon:Icon6,
        },
    ]

    const FeatureLists = [
        {
            id: v4() ,
            name: 'Innovative approach' ,
            desc: 'From  coffee to office supplies , we set you up with the amenities you need so that you can focus on your business.' ,
            icon: Icon7 
         } ,
         {
            id: v4() ,
            name: 'quality time' ,
            desc: 'We provide  perfect conditions for your productive work and that your projects are done in time.' ,
            icon: Icon8 
          } ,
          {
            id: v4() ,
            name: 'Best Support' ,
            desc: 'Our managers are always at your service. They help you with any matters with big pleasure.' ,
            icon: Icon9
           } ,
    ]

    return (

        <>
            <BreadCrumb sitename="service" handleSelect={ handleMenu }/>
            <Section1 />
            <Section2 data={ Lists }/>
            <Section3 data={ FeatureLists } bg={ FeatureBanner } handleSelect={ handleMenu }/>
            <PricePlan data={ prices } handleSelect={ handleMenu }/>
            <Section4 handleSelect={ handleMenu }/>
            <ContactForm />
        </>

    )
}