import React, { useReducer } from "react"
import {BrowserRouter, Routes,Route} from "react-router-dom";
import { Reducer, initialState } from "./Reducer";
import { StateContext } from "./Context";
import { Login } from "./Login";
import { Home } from "./Home";
import { Fav } from "./Fav";
import { Cart } from "./Cart";


export const Routing =()=>{
    const [state,dispatch]=useReducer(Reducer,initialState)

    console.log(state.iscart)
    return(
        <StateContext.Provider value={{state,dispatch}} basename={process.env.PUBLIC_URL}>
            <BrowserRouter>
             <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/fav" element={<Fav/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
             </Routes>
        </BrowserRouter>
        </StateContext.Provider>
    )
}