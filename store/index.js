import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { registerReducer } from "./reducer/register";
import { loginReducer } from "./reducer/login";
import { dashboardReducer } from "./reducer/dashboard";

const reducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  dashboard: dashboardReducer,
});

const makeStore = () => configureStore({ reducer: reducer });

export const wrapper = createWrapper(makeStore, { debug: process.env.NODE_ENV !== "production" ? true : false });
