import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import AppContextProvider from "./context/AppContextProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import reduxToolkit from "./redux-toolkit/index.js";
// import foodOrderStore from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={reduxToolkit}>
      <App />
    </Provider>
  </BrowserRouter>
);
