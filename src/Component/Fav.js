import React, { useContext, useEffect, useState } from "react";
import { BsCartCheckFill, BsHeartFill } from "react-icons/bs";
import { StateContext } from "./Context";


export const Fav=()=>{
    
    const {state,dispatch}=useContext(StateContext)
    const favourite=(()=>{
        var y=state.b.filter((a,b)=>{
            return a.Isfav==true
          })
          console.log(y)
          dispatch({type:"fav",payload:y})
    })
 
    const refav=((val,i)=>{
          var yz=state.b.map((a,b)=>{
             return val.id===a.id ? {...a,Isfav:false}:a
          })
          dispatch ({type:"updatearray",payload:yz})
          favourite()
    })
      

    useEffect(favourite,[])

    return(
        <div>
            <section>
                <div className="container">
                    <div className="row-1">
                        {state.isfav.map((val,i)=>{
                           return(
                             <div className="fav-products">
                                 <div className="fav-img">
                                    <img src={val.img}/>
                                 </div>
                                 <div className="fav-content">
                                    <h3>Name:{val.name}</h3>
                                    <h3>Price:{val.price}</h3>
                                 </div>
                                 <div className="fav-btn">
                                    <button onClick={()=>refav(val,i)} >RemoveFavourite</button>
                                 </div>
                             </div>
                           ) 
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}