
import { v4 } from "uuid";

export default ( ) => { 

    const List = [ 
        { id: v4() , name : "home" , desc: "home" , selected : true } , 
        { id: v4() , name : "about" , desc: "about" , selected : false } ,
        { id: v4() , name : "gallery" , desc: "gallery" , selected : false } ,
        { id: v4() , name : "service" , desc: "service" , selected : false } ,
        { id: v4() , name : "pricing" , desc: "pricing" , selected : false } ,
        { id: v4() , name : "contact" , desc: "contact" , selected : false } 
    ]

    return List ;
}