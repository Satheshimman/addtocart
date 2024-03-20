import user from "./Main.json"
export const initialState={
    a:user.login,
    b:user.products,
    isfav:[],
    iscart:[]
}


export const Reducer=(state,action)=>{
     
   if(action.type==="updatearray"){
        return {...state,b:action.payload}
   } 
   else if(action.type==="fav"){
    return {...state,isfav:action.payload}
}
else if(action.type==="iscart"){
    return {...state,iscart:action.payload}
}
}
