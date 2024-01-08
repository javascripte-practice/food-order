import React, { useState } from "react";
import AppContext from "./appContext";

const AppContextProvider = (props) => {
  const [isVerify, setIsVerify] = useState(false);
  const [karzinka, setKarzinka] = useState([]);
  const onLogin = (username, password) => {};
  const onLogOut = () => {
    setIsVerify(false);
  };
  return (
    <AppContext.Provider
      value={{ isVerify, onLogin, onLogOut, karzinka, setKarzinka }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
