import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  newsItems: {},
  isLoading: false,
};
export const getNewsItems = createAsyncThunk(
  "news/getNewsItems",
  async (data, thunkAPI) => {
    const { pageSize, country, category, page } = data;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=92af5f215068426498b066e3c4ab7f7f&page=${page}&pageSize=${pageSize}`;
    try {
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const newsApiSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    removeNewsItem: (state, action) => {
      const { articles } = state.newsItems;
      const itemId = action.payload;
      state.newsItems.articles = articles.filter((item) => item.url !== itemId);
    },
  },
  extraReducers: {
    [getNewsItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getNewsItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.newsItems = action.payload;
    },
    [getNewsItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { removeNewsItem } = newsApiSlice.actions;

export default newsApiSlice.reducer;
