import axios from "axios";
import { backendUrl } from "../../../static";
import { registerAccount } from "../../reducer/register";

export const axiosRegisterAccount = (name, email, password, router) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${backendUrl}auth/signup`, {
        name: name,
        email: email,
        password: password,
      });
      if (response) {
        if (response.status === 200) {
          setTimeout(() => {
            router.push("/");
          }, 2000);
          const result = response.data;
          dispatch(registerAccount(result));
        }
      } else {
        return null;
      }
    } catch (error) {
      if (error) {
        return null;
      }
    }
  };
};
