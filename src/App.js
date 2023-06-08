import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Container/NavBar";
import NewsApi from "./Components/Container/NewsApi";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <NewsApi
                key="general"
                pageSize={5}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <NewsApi
                key="business"
                pageSize={5}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <NewsApi
                key="entertainment"
                pageSize={5}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <NewsApi
                key="general"
                pageSize={5}
                country="us"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <NewsApi
                key="health"
                pageSize={5}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <NewsApi
                key="science"
                pageSize={5}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <NewsApi
                key="sports"
                pageSize={5}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <NewsApi
                key="technology"
                pageSize={5}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;

// import React from "react";
// import Message from "./Components/Container/Message";
// export const App = () => {
//   return (
//     <div>
//       {" "}
//       <Message />
//     </div>
//   );
// };
// export default App;
