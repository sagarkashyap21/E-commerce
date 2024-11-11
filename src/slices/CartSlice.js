import { createSlice } from '@reduxjs/toolkit'


// export const fetchData = createAsyncThunk("fetchData", async () => {
//     const res = await fetch('https://dummyjson.com/carts');
//     console.log(res.json());
//     return res.json();
//   });
// const initialState = [];
// const initialState = {
//     cart:[],
//     totalQuantity:0,
//     totalPrice:0,
// };


export const CartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers: {
        Add: (state, action) => {
            let find = state.findIndex((item) => item.id === action.payload.id);
            if (find>=0) {
                // state.cart[find].quantity += 1;

            } else {
                state.push(action.payload)
            }
                // state.push(action.payload)
                

        },
        Remove: (state, action) => {
            // return state.cart.cart.filter((item) => item.id !== action.payload.id);
            // state.cart.cart = state.cart.cart.filter((item) => item.id !== action.payload.id);
           return state=state.filter((item) => item.id !== action.payload.id);

            // console.log(state.cart[1])
        },
        RemoveAll: (state) => {
             return state=[];
        },
        getCartTotal:(state)=>{
            // let { totalQuantity, totalPrice } = state.cart.reduce(
            //     (cartTotal, cartItem) => {
            //       const { price, quantity } = cartItem;
            //       const itemTotal = price * quantity;
            //       cartTotal.totalPrice += itemTotal;
            //       cartTotal.totalQuantity += quantity;
            //       return cartTotal;
            //     },
            //     {
            //       totalPrice: 0,
            //       totalQuantity: 0,
            //     }
            //   );
            //   state.totalPrice = parseInt(totalPrice.toFixed(2));
            //   state.totalQuantity = totalQuantity;
        }
    },
})
export const { Add, Remove, RemoveAll } = CartSlice.actions
export default CartSlice.reducer