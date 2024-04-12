import { Routes,Route } from "react-router-dom";
import Home from "../home";
import Books from "../books";
import NavBar from "../navbar";
import ReadBook from "../readBook";
import Favourites from "./favourite";
import { useState } from "react";
const UserPortal = () => {
  let[cart,setCart]=useState([])
    return ( 
      <div className="usePortal">
        <NavBar/>
         <Routes>
            <Route element={<Home/>} path="/" />
            <Route element={<Books/>} path="/books" /> 
            <Route element={<ReadBook cart={cart} setCart={setCart}/>} path='/books/:id'/>
            <Route element={<Favourites cart={cart} setCart={setCart}/>} path='/favourites'/>
       </Routes>
      </div>
     );
}
 
export default UserPortal;