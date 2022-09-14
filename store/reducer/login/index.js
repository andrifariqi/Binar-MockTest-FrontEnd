import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",

  initialState: { loginAccount: null },

  reducers: {
    loginAccount: (state, action) => {
      state.loginAccount = action.payload;
    },
  },
});

export const { loginAccount } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
