
import { v4 } from 'uuid';

import Img1 from '../../statics/img4.jpg';
import Img2 from '../../statics/img5.jpg';
import Img3 from '../../statics/img6.jpg';
import Img4 from '../../statics/img7.jpg';
import Img5 from '../../statics/img8.jpg';
import Img6 from '../../statics/img9.jpg';
import Img7 from '../../statics/img10.jpg';
import Img8 from '../../statics/img11.jpg';


import Img9 from '../../statics/About–Imperion-0.svg';
import Img10 from '../../statics/About–Imperion-1.svg';
import Img11 from '../../statics/About–Imperion-2.svg';

export const resultList = () => {

    const List = [ 
        {
            id: v4() ,
            name : 'Growth' , 
            desc : 'You will be able to develop and grow in your profession thanks to an appropriate environment in our coworking.' , 
            img : Img9 ,
        } ,
        {
            id: v4() ,
            name : 'Result' , 
            desc : 'We ensure you, your productivity will grow and you will meet the deadlines without stress working in our coworking. ' , 
            img : Img10 ,
        } ,
        {
            id: v4() ,
            name : 'Growth' , 
            desc : 'Your projects will be done successfully,  and in time. In general your professional results will become higher and high-quality. ' , 
            img : Img11 ,
        } ,
    ] 

    return List ;
}


export default ( ) => { 

    const List = [ 
        {
            id: v4() ,
            name : 'Productivity' , 
            desc : 'Business' , 
            img : Img1 ,
        } ,
        {
            id: v4() ,
            name : 'high quality connection' , 
            desc : 'Business' , 
            img : Img2 , 
        } ,
        {
            id: v4() ,
            name : 'Conference Room' , 
            desc : 'Creative' , 
            img : Img3 , 
        } ,
        {
            id: v4() ,
            name : 'Consulting' , 
            desc : 'Offices' , 
            img : Img4 , 
        } ,
        {
            id: v4() ,
            name : 'Variety of Workspace' , 
            desc : 'Offices' , 
            img : Img5 , 
        } ,
        {
            id: v4() ,
            name : 'high quality connection' , 
            desc : 'Offices' , 
            img : Img6 , 
        } ,
        {
            id: v4() ,
            name : 'Brainstorming' , 
            desc : 'Web Design' , 
            img : Img7 , 
        } ,
        {
            id: v4() ,
            name : 'Library' , 
            desc : 'Web Design' , 
            img : Img8 , 
        } ,
    ] 

    return List ;
}