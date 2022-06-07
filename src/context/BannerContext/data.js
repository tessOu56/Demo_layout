
import { v4 } from 'uuid';

import Banner1 from '../../statics/banner.png';

export const EmptyObject = () => ({
    id: v4() ,
    scope: {
        page : '' ,
        index : '' ,
    } ,
    content : {
        title : '' , 
        slogan : '' ,
        desc : '' , 
        bg : null ,
        direct : {
            name : '' ,
            target : ''
        } ,
    }
})

export const DataList = ( ) => { 

    const List = [ 
        {
            id: v4() ,
            scope: {
                page : 'home' ,
                index : 'Banner1' ,
            } ,
            content : {
                title : 'PROBABLY THE BEST' , 
                slogan : 'Creative Space' ,
                desc : 'Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo enim ipsam.' , 
                bg : Banner1 ,
                direct : {
                    name : 'get started' ,
                    target : 'about'
                } ,
            }
        } ,
    ] 

    return List ;
}