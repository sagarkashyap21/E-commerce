import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
export default function Navbar() {
    const state=useSelector((state)=>state.cart)
    return (
        <div className="navbar">
            <div className="nav1">
               <div className="nav1d1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2vmOAK4skDaXmMEa7gj7zfkr925J82-17DA&s" alt="" /></div>
                <Link to="/" className="home">Home</Link>
            </div>
            <Link to="/cart" className="cartlogo">Cart item  <span style={{color:"yellow"}}>({state.length})</span></Link>
        </div>
    )
}
