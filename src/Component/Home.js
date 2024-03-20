import React, { useContext, useState } from "react";
import { StateContext } from "./Context";
import { FaHeart } from "react-icons/fa6";
import { BsCartCheckFill, BsHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


export const Home=()=>{
    const {state,dispatch}=useContext(StateContext)
    
    const m=useNavigate()
    

    const FavPage=()=>{
        m("/fav")
    }
    const Cart=()=>{
         m("/cart")
    }

    const fav=(val,i)=>{

     var x= state.b.map((a,b)=>{
            return i===b ? {...a,Isfav:!a.Isfav}:a
           
        })
        console.log(x)

        

 dispatch ({type:"updatearray",payload:x})


       
    }

    const addCart=(val,i)=>{
       
     let    price=val.price
        price=(val.price*val.quantity)
       
     console.log(price)
       var s=state.b.map((a,b)=>{
         return i===b ? {...a,Iscart:true,quantity:val.quantity,show:!val.show,show1:!val.show1}:a
       })
       console.log(val.quantity)
       console.log(s.quantity)
       console.log(s)
       dispatch ({type:"updatearray",payload:s})
      //  m("/cart")
     

    }

    const add=(val,i)=>{
         var w=state.b.map((a,b)=>{
            return val.id===a.id ? {...a,quantity:val.quantity+1}:a
         })
         console.log(val.quantity)
         dispatch ({type:"updatearray",payload:w})
    }


    const sub=(val,i)=>{
       if(val.quantity>1){
         var u=state.b.map((a,b)=>{
            return val.id===a.id ? {...a,quantity:val.quantity-1}:a
         })
         dispatch ({type:"updatearray",payload:u})
       }
       else if(val.quantity==1){
         var v=state.b.map((a,b)=>{
         return  val.id===a.id ? {...a,show:!val.show,show1:!val.show1,Iscart:false}:a
         })
         dispatch ({type:"updatearray",payload:v})
      }
    }


    return(
        <div>
            <section>
                <div className="container">
                         <div className="favourite">
                            <button onClick={FavPage}>Favourite-Page</button>
                            <button onClick={Cart}>Add-To-Cart</button>
                         </div>
                    <div className="row-1">
                       {state.b.map((val,i)=>{
                          return(
                            <div className="col-3">
                                <div className="product">
                                <div className="button-2">
                                   <button onClick={()=>fav(val,i)} style={{color:val.Isfav ? "red":"gray"}}><BsHeartFill className="icon-1"/></button>
                                </div>
                                <div className="image">
                                   <img src={val.img}/>
                                </div>
                                <div className="content">
                                    <h3>Name:{val.name}</h3>
                                    <h4>Price:{val.price*val.quantity}</h4>
                                </div>

                                {val.show&&(
                                  <>
                                    <div className="pro-button">
                                   <div className="button-1">
                                   <button onClick={()=>addCart(val,i)}>Add-to-Cart<BsCartCheckFill className="icon"/></button>
                                   </div>
                                </div>
                                   
                                  </>
                                )
                                }

                                {val.show1 && (
                                 <>
                                   <div className="row">
                                      <div className="quan-button row">
                                          <button onClick={()=>add(val,i)}>add</button>
                                             <p>Quantity:{val.quantity}</p>
                                          <button onClick={()=>sub(val,i)}>sub</button>
                                      </div>
                                   </div>
                                 </>
                                )}
                                

                               
                                   
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