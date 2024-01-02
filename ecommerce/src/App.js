import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './components/home';
import Cart from './components/cart';
import Product from './components/product';
import { useState } from 'react';
function App() {
  let[cart,setcart]=useState([])
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route element={<Home/>} path='/' />
          <Route element={<Cart cart={cart} setcart={setcart}/>} path='/cart' />
          <Route element={<Product cart={cart} setcart={setcart}/>} path='/:id' />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
