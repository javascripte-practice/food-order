import { createStore } from "redux";
import {
  delKarzinka,
  onLogOut,
  onLogin,
  setKarzinka,
} from "../context/constants";

const initialValue = {
  karzinka: [],
  setKarzinka: () => {},
  isVerify: false,
  onLogin: () => {},
  onLogOut: () => {},
};
const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case onLogin:
      if (action?.payload?.login.trim() && action?.payload?.password.trim()) {
        return { ...state, isVerify: true };
      }
    case onLogOut:
      return initialValue;
    case setKarzinka:
      const alreadyHasBeen = state.karzinka.filter(
        (e) => e.name === action.payload.name
      );
      if (alreadyHasBeen.length > 0) {
        const arr = state.karzinka.map((e) => {
          if (e.name === action.payload.name) {
            return { ...action.payload, count: e.count + 1 };
          } else {
            return e;
          }
        });
        return { ...state, karzinka: [...arr] };
      } else {
        return { ...state, karzinka: [...state.karzinka, action.payload] };
      }
    case delKarzinka:
      if (action.payload) {
        const arrFilter = state.karzinka.filter((e) => e.id !== action.payload);
        return { ...state, karzinka: [...arrFilter] };
      }
    default:
      return state;
  }
};

export const redux = createStore(reducer);
