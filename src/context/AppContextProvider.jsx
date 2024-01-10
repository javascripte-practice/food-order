import React, { useReducer, useState } from "react";
import AppContext from "./appContext";
import { onLogOut, onLogin, setKarzinka } from "./constants";

const initialValue = {
  karzinka: [],
  isVerify: false,
  setData: () => {},
};

const appReducer = (state, action) => {
  switch (action.type) {
    case onLogin:
      if (action?.payload?.login.trim() && action?.payload?.password.trim()) {
        return { ...state, isVerify: true };
      }
    case onLogOut:
      return initialValue;
    case setKarzinka:
      return {
        ...state,
        karzinka: [...state?.karzinka, action?.payload?.data],
      };
    default:
      return state;
  }
};

const AppContextProvider = (props) => {
  const [values, dispatch] = useReducer(appReducer, initialValue);
  const setData = (type, data) => {
    dispatch({ type, payload: data });
  };
  return (
    <AppContext.Provider
      value={{
        isVerify: values.isVerify,
        karzinka: values.karzinka,
        setData,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
