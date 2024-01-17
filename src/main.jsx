import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import AppContextProvider from "./context/AppContextProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { redux } from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <AppContextProvider> */}
    <Provider store={redux}>
      <App />
    </Provider>
    {/* </AppContextProvider> */}
  </BrowserRouter>
);
