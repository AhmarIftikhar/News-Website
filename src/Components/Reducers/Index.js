// import { combineReducers } from "redux";

// import Payments from "./Reducers";

// const reducers = combineReducers({
//   payments: Payments
// });

// export default reducers;

import { combineReducers } from "redux";

import productItems from "../../Components/ProductSlice/productSlice";
import newsItems from "../../Components/ProductSlice/newsApiSlice";

const rootReducer = combineReducers({
  product: productItems,
  news: newsItems
});

export default rootReducer;