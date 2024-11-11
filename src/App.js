import React from 'react'
import Navbar from './component/Navbar'
import Product from './component/Product'
import Cart from './component/Cart'
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Footer from './component/Footer';
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path="*" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
