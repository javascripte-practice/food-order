import { createStore } from "redux";
import { onLogOut, onLogin, setKarzinka, delKarzinka } from "./constants";
const initialValues = {
  karzinka: [],
  isVerify: false,
};
const foodOrderReducer = (state = initialValues, action) => {
  switch (action.type) {
    case onLogin:
      const { username, password } = action.payload;
      if (username.trim().length < 0 || password.trim().length < 0) {
        return state;
      }
      return { ...state, isVerify: true };
    case onLogOut:
      return initialValues;
    case setKarzinka:
      const filterArr = state.karzinka.filter(
        (e) => e.name === action.payload.name
      );
      console.log(filterArr);
      if (filterArr.length > 0) {
        const newArr = state.karzinka.filter(
          (e) => e.name !== action.payload.name
        );
        return {
          ...state,
          karzinka: [
            ...newArr,
            { ...filterArr[0], count: filterArr[0].count + 1 },
          ],
        };
      } else {
        return {
          ...state,
          karzinka: [...state?.karzinka, action?.payload],
        };
      }
    case delKarzinka:
      if (!action.payload) {
        return { ...state, karzinka: [] };
      }
      const newArr = state.karzinka.filter((e) => e.id !== action.payload.id);
      return { ...state, karzinka: newArr };
    default:
      return state;
  }
};
const foodOrderStore = createStore(foodOrderReducer);

export default foodOrderStore;
