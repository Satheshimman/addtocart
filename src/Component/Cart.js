import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "./Context";
import { BsPlusCircleFill, BsPatchMinus } from "react-icons/bs";

export const Cart=()=>{
    const {state,dispatch}=useContext(StateContext)

    const cart=(()=>{
        var y=state.b.filter((a,b)=>{
            return a.Iscart===true
          })
          console.log(y)
          dispatch({type:"iscart",payload:y})
    })


       useEffect(cart,[])

  const plus=((val,ind)=>{
  
    var m=state.b.map((a,b)=>{
       return val.id===a.id ? {...a,quantity:val.quantity+1}:a 
    })
    console.log(m.quantity)
    dispatch({type:"updatearray",payload:m})
    console.log(m)
    cart()
  })

  const minus=((val,ind)=>{
    if (val.quantity>1){
        var s=state.b.map((a,b)=>{
            return val.id===a.id ? {...a,quantity:val.quantity-1}:a
        })
        dispatch ({type:"updatearray",payload:s})
      
    }
    else {
        var zz=state.b.map((a,b)=>{
            return val.id===a.id ? {...a,Iscart:false,show:true,show1:false}:a
        })
        dispatch ({type:"updatearray",payload:zz})
       console.log("remove")
    }
    cart()
})
   

  const deleteitem=((val,ind)=>{

    var z=state.b.map((a,b)=>{
        return val.id===a.id ? {...a,Iscart:false,show:true,show1:false,quantity:1}:a
    })
   
    dispatch ({type:"updatearray",payload:z})
    cart()
  })
  console.log("success")

    return(
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        {state.iscart.map((val,i)=>{
                            return(
                               <div className="col-6">
                                  <div className="cart row">
                                   <div className="col-4">
                                       <div className="cart-img">
                                          <img src={val.img}/>
                                       </div>
                                   </div>
                                   <div className="col-8">
                                      <div className="cart-content">
                                         <h1>ProductName:{val.name}</h1>
                                         <h1>ProductPrice:{val.price*val.quantity}</h1>
                                      </div>
                                      <div className="cart-quantity">
                                          <h1>Quantity:{val.quantity}</h1>
                                     </div>
                                     <div className="cart-button row">
                                        <button onClick={()=>plus(val,i)}><BsPlusCircleFill/></button>
                                        <button onClick={()=>deleteitem(val,i)}>Delete-Cart</button>
                                        <button onClick={()=>minus(val,i)}><BsPatchMinus/></button>
                                     </div>
                                  </div>
                                 
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