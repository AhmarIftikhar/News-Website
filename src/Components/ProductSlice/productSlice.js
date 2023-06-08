import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import cartItems from "../Components/cartItems";

const initialState = {
  productItems: [],
  isLoading: false
};
export const getCartItems = createAsyncThunk(
  "product/getCartItems",
  async (currentPage, thunkAPI) => {
    const url = `https://fakestoreapi.com/products?limit=${currentPage}`;
    try {
      // console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      // thunkAPI.dispatch(openModal());
      const resp = await axios(url);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.productItems = state.productItems.filter(
        (item) => item.id !== itemId
      );
    }
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.productItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    }
  }
});
// export const {} = cartSlice.actions;
export const { removeItem } = productSlice.actions;
// export const getAllMovies = (state) => state.product.productItems;
// export const getAllLoading = (state) => state.product.isLoading;

export default productSlice.reducer;