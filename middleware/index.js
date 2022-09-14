import Router from "next/router";
import { getToken } from "../util";

export const protectedRoute = () => {
  const token = getToken();
  if (token) {
    Router.push("/dashboard");
  } else {
    Router.push("/");
  }
};
