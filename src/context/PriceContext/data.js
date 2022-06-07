
import { v4 } from 'uuid';

export default ( ) => { 
    const List = [
        {
            id: v4() ,
            name:'Membership',
            desc:'If you are looking for a perfect workplace it is a best option for you.',
            price: 35,
            icon:'PERSON',
            pointed: false
        },
        {
            id: v4() ,
            name:'Dedicated Desk',
            desc:'Choosing this plan you will be provided with your personal desk.',
            price: 60,
            icon:'DESKTOP',
            pointed: true
        },
        {
            id: v4() ,
            name:'Private Office',
            desc:'If you need private workspace, our beautiful offices are the perfect solution.',
            price: 90,
            icon:'PC',
            pointed: false
        },
    ]

    return List ;
}