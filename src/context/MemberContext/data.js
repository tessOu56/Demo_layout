
import { v4 } from 'uuid';

import Icon1 from '../../statics/img13.png';
import Icon2 from '../../statics/img14.png';
import Icon3 from '../../statics/img15.png';


import Img1 from '../../statics/img19.jpg';
import Img2 from '../../statics/img20.jpg';
import Img3 from '../../statics/img21.jpg';
import Img4 from '../../statics/img22.jpg';

export const employList = () => {
    const List = [
        {
            id: v4(),
            name: 'James Daniels' , 
            job: 'Owner' ,
            desc: 'Experienced businessman and programmer, who wants to unite people.' ,
            img: Img1 ,
        } ,
        {
            id: v4(),
            name: 'Dreama Leos' , 
            job: 'Manager' ,
            desc: 'Dreama is a great manager in coworking space, who will help you with any questions.' ,
            img: Img2 ,
        } ,
        {
            id: v4(),
            name: 'Roberto Johnson' , 
            job: 'Supervisor' ,
            desc: 'A professional economist, who handles with coworking financial deals.' ,
            img: Img3 ,
        } ,
        {
            id: v4(),
            name: 'Kristy Butler' , 
            job: 'Manager' ,
            desc: 'Kristy manages our stuff work and provide you with professional service in coworking space.' ,
            img: Img4 ,
        } ,
    ]

    return List ; 
}

export default ( ) => { 

    const List = [
        {
            id: v4() ,
            name: "Emma Doe" ,
            job: "Company CEO" ,
            desc: "Super! This theme is ideal for our CoWorking project, where we need to list all types of our services, features and benefits. Thank you guys for such an awesome site and your efficient help with setting things up. You are the best." ,
            img: Icon1 , 
        },
        {
            id: v4() ,
            name: "John Lonan" ,
            job: "Company CEO" ,
            desc: "Super! This theme is ideal for our CoWorking project, where we need to list all types of our services, features and benefits. Thank you guys for such an awesome site and your efficient help with setting things up. You are the best." ,
            img: Icon2 , 
        },
        {
            id: v4() ,
            name: "Mark Smit" ,
            job: "Company CEO" ,
            desc: "Super! This theme is ideal for our CoWorking project, where we need to list all types of our services, features and benefits. Thank you guys for such an awesome site and your efficient help with setting things up. You are the best." ,
            img: Icon3 , 
        },
    ]

    return List ;
}