
import { v4 } from 'uuid';

import Item1 from '../../statics/img4.jpg';
import Item2 from '../../statics/img5.jpg';
import Item3 from '../../statics/img6.jpg';
import Item4 from '../../statics/img7.jpg';
import Item5 from '../../statics/img8.jpg';
import Item6 from '../../statics/img9.jpg';
import Item7 from '../../statics/img10.jpg';
import Item8 from '../../statics/img11.jpg';
import Item9 from '../../statics/img25.jpg';
import Item10 from '../../statics/img26.jpg';
import Item11 from '../../statics/img27.jpg';
import Item12 from '../../statics/img28.jpg';

export const TitleList = () => { 

    const List = [ 
        { id : v4() , name : 'all' , index: 0 , selected: true } , 
        { id : v4() , name : 'web design' , index: 1 , selected: false } ,
        { id : v4() , name : 'creative' , index: 2 , selected: false } ,
        { id : v4() , name : 'offices' , index: 3 , selected: false } ,
        { id : v4() , name : 'business' , index: 4 , selected: false }
    ]

    return List ;
}

export const ItemList = ( ) => { 

    const List = [
        { id : v4() , index: 1 , src: Item1 ,  titleIndex: 1 , selected: false , showed: true } ,
        { id : v4() , index: 2 , src: Item2 ,  titleIndex: 2 , selected: false , showed: true } ,
        { id : v4() , index: 3 , src: Item3 ,  titleIndex: 3 , selected: false , showed: true } ,
        { id : v4() , index: 4 , src: Item4 ,  titleIndex: 1 , selected: false , showed: true } ,
        { id : v4() , index: 5 , src: Item5 ,  titleIndex: 3 , selected: false , showed: true } ,
        { id : v4() , index: 6 , src: Item6 ,  titleIndex: 4 , selected: false , showed: true } ,
        { id : v4() , index: 7 , src: Item7 ,  titleIndex: 2 , selected: false , showed: true } ,
        { id : v4() , index: 8 , src: Item8 ,  titleIndex: 4 , selected: false , showed: true } ,
        { id : v4() , index: 9 , src: Item9 ,  titleIndex: 0 , selected: false , showed: true } ,
        { id : v4() , index: 10 , src: Item10 ,  titleIndex: 2 , selected: false , showed: true } ,
        { id : v4() , index: 11 , src: Item11 ,  titleIndex: 3 , selected: false , showed: true } ,
        { id : v4() , index: 12 , src: Item12 ,  titleIndex: 1 , selected: false , showed: true } ,
    ]

    return List ;
}