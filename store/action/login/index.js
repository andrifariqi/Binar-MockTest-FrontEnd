import axios from "axios";
import { backendUrl } from "../../../static";
import { loginAccount } from "../../reducer/login";
import { setUser } from "../../../util";

export const axiosLoginAccount = (email, password, router) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${backendUrl}auth/login`, {
        email: email,
        password: password,
      });
      if (response) {
        if (response.status === 200) {
          setTimeout(() => {
            router.push("/dashboard");
          }, 2000);
          const result = response.data;
          setUser(response.data.result.access_token);
          dispatch(loginAccount(result));
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
