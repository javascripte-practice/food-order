import { createSlice } from "@reduxjs/toolkit";

const foodOrderSlice = createSlice({
  initialState: {
    karzinka: [],
    isVerify: false,
  },
  name: "Food-order",
  reducers: {
    onLogin: (state, action) => {
      const { username, password } = action.payload;
      if (username.trim().length < 0 || password.trim().length < 0) {
        return;
      } else {
        state.isVerify = true;
      }
    },
    onLogOut: (state) => {
      state = {
        karzinka: [],
        isVerify: false,
      };
    },
    setKarzinka: (state, action) => {
      const filterArr = state.karzinka.filter(
        (e) => e.name === action.payload.name
      );
      if (filterArr.length > 0) {
        state.karzinka = state.karzinka.map((e) => {
          if (e.name === action.payload.name) {
            return { ...e, count: e.count + 1 };
          } else {
            return e;
          }
        });
        return;
      }
      state.karzinka = [...state.karzinka, action.payload];
    },
    delKarzinka: (state, action) => {
      if (action.payload) {
        state.karzinka = state.karzinka.filter((e) => e.id !== action.payload);
        return;
      }
      state.karzinka = [];
    },
  },
});

export const { onLogOut, onLogin, setKarzinka, delKarzinka } =
  foodOrderSlice.actions;

export default foodOrderSlice.reducer;
