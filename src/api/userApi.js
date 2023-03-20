import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import regeneratorRuntime, { async } from "regenerator-runtime"; //eslint-disable-line
import { localUrl, authUrl } from ".";

const registerUser = (facilityData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${localUrl}user/register`, facilityData)
      .then((registerRes) => resolve(registerRes.data))
      .catch((error) => {
        if (error.response.data !== undefined) {
          reject(error.response.data);
        }
        reject(error);
      });
  });
};

export const loginUser = createAsyncThunk(
  "user/login",
  async (user, { rejectWithValue }) => {
    try {
      console.log("user", user);
      const res = await axios.post(`${localUrl}/auth/login`, user);
      if (res.data.data !== undefined) {
        localStorage.setItem("accessToken", res.data.data.accessToken);
        localStorage.setItem("refreshToken", res.data.data.refreshToken);
        return res.data.data;
      }
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);

      return res.data;
    } catch (error) {
      if (error.response !== undefined) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({ error: error.message });
    }
  }
);

export default registerUser;
