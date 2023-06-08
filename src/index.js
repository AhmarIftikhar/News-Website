import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import store from "./Store/Index";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
      <App />
  </Provider>
);