import React, { useContext, useState } from "react";
import { StateContext } from "./Context";
import  "./Style.scss"
import { useNavigate } from "react-router-dom";


export const Login=()=>{
    const {state,dispatch}=useContext(StateContext)
    const [name,setname]=useState("")
    const [password,setpassword]=useState("")
    const [err,seterr]=useState(false)

    const [login,setlogin]=useState(state.a);
    console.log(login)
    const n=useNavigate()

    const add=(e)=>{
      if (e.target.name==="username"){
        setname(e.target.value)
      }
      else{
        setpassword(e.target.value)
      }
          
    }
    const submit=(ev)=>{
    ev.preventDefault()
         if(name===""||password===""){
            seterr(true)
         }

         else{
            let x=login.filter((a,b)=>{
                return (name===a.name  && password===a.password ? a:"")
            })
            if(x.length==1){
                n("/home")
            }
            else{
                alert("fail")
            }
         }
    }
    return(
        <div>
           <section>
               <div className="container">
                  <div className="row">
                     <div className="col-4 color">
                         <div className="form">
                            <form>
                                <input type="text" placeholder="enter your username" name="username" onChange={add} value={name} />
                                 {err && name==="" ? <p className="err">enter your user name</p>:""}
                                <input type="text" placeholder="enter your userpassword" name="userpassword" onChange={add} value={password} />
                                {err && password==="" ? <p className="err">enter your user name</p>:""}
                                <div className="button" >
                                 <button type="submit" onClick={submit}>submit</button>
                                     
                                </div>
                            </form>
                         </div>
                     </div>
                  </div>
               </div>
           </section>
        </div>
    )
}