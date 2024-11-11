import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchData = createAsyncThunk("fetchData", async () => {
  // const response = await fetch("'https://fakestoreapi.com/products");
  const response = await fetch(" https://api.escuelajs.co/api/v1/products");
  return response.json();
});

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default ProductSlice.reducer;