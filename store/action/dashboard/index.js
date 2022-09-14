import axios from "axios";
import { backendUrl } from "../../../static";
import { showData, createData, updateData, deleteData } from "../../reducer/dashboard";

export const axiosShowData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${backendUrl}v1/products`);
      if (response) {
        if (response.status === 200) {
          const result = response.data.result;
          dispatch(showData(result));
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

export const axiosCreateData = (name, price, imageurl) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${backendUrl}v1/products`, {
        name: name,
        price: price,
        imageurl: imageurl,
      });
      if (response) {
        if (response.status === 200) {
          const result = response.data.result;
          window.location.reload(true);
          dispatch(createData(result));
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

export const axiosUpdateData = (id, name, price, imageurl) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`v1/products/${id}`, {
        name: name,
        price: price,
        imageurl: imageurl,
      });
      if (response) {
        if (response.status === 200) {
          const result = response.data.result;
          window.location.reload(true);
          dispatch(updateData(result));
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

export const axiosDeleteData = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`v1/products/${id}`);
      if (response) {
        if (response.status === 200) {
          const result = response.data.result;
          window.location.reload(true);
          dispatch(deleteData(result));
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
