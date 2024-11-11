import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Remove, RemoveAll } from "../slices/CartSlice"
import { useEffect } from "react"


export default function Cart() {
    const [price,setPrice]=useState();
    const dispatch = useDispatch();
    // const { cart, totalQuantity, totalPrice } = useSelector(
    //     (state) => state.cart
    // );
    const cart = useSelector((state) => state.cart);
    useEffect(() => {
        let p=0;
        cart.map((e)=>{
            return p+=e.price
        })
        setPrice(p)
        // eslint-disable-next-line
    }, [cart])
    return (
        <div className="cart" style={{minHeight:"84vh"}} >
            {cart.map((e) => {
                return <div className="cartCard" key={e.id} >
                    <div className="cartCardd1"><img src={e.images[0]} alt="" /></div>
                    <div className="cartCardd2">
                        <div>Price: {e.price}</div>
                        {/* <div>Quantity: {e.quantity}</div> */}
                        <div className="remove" onClick={() => dispatch(Remove(e))}>Remove</div>
                    </div>

                </div>
            })}
            {cart.length > 0 ? <div className="total" style={{ color: "red", cursor: "pointer" }} onClick={() => dispatch(RemoveAll())}>Remove all item</div> : ""}

        {cart.length>0? <>
        <div style={{ border: ".1rem solid grey", margin: "2rem 0", width: "98vw" }}></div>
            <div className="total">
                <div>Total Items : {cart.length}</div>
                <div>Total Amount :{price} </div>
            </div>
        </> : <div style={{fontSize:"4rem",marginTop:"10rem"}}> No Data Found</div>}
       
           
        </div>
    )
}
