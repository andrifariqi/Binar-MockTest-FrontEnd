import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",

  initialState: { registerAccount: null },

  reducers: {
    registerAccount: (state, action) => {
      state.registerAccount = action.payload;
    },
  },
});

export const { registerAccount } = registerSlice.actions;

export const registerReducer = registerSlice.reducer;
