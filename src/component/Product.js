import React, { useEffect } from 'react'
// import Data from "../Data"
import {  useDispatch,useSelector } from 'react-redux'
import { Add } from '../slices/CartSlice';
import { fetchData } from '../slices/ProductSlice';
export default function Product() {
    const dispatch = useDispatch();
   
    const state = useSelector((state) => state.product)
    const Addtocart =(e) => {
        dispatch(Add(e));
    }
    useEffect(()=>{
    dispatch(fetchData());
        // eslint-disable-next-line

    },[])
    return (
        <div className="product">
            {/* onClick={()=>dispatch(fetchData())} */}
            {state.data && state.data.map((e) => {
                return <div className="card" key={e.id}>
                    <img src={e.images[0]} alt="" />
                    <div className='title'>{e.title}</div>
                    <div style={{ margin: "1rem 0" }} className="price">price:{e.price}</div>
                    <div className="addtocart" onClick={() => Addtocart(e)}  >Add to cart</div>
                </div>

            })}

        </div>
    )
}
