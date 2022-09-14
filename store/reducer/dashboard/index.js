import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",

  initialState: { showData: [], createData: null, updateData: null, deleteData: null },

  reducers: {
    showData: (state, action) => {
      state.showData = action.payload;
    },
    createData: (state, action) => {
      state.createData = action.payload;
    },
    updateData: (state, action) => {
      state.updateData = action.payload;
    },
    deleteData: (state, action) => {
      state.deleteData = action.payload;
    },
  },
});

export const { showData, createData, updateData, deleteData } = dashboardSlice.actions;

export const dashboardReducer = dashboardSlice.reducer;
