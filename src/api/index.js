// @ts-nocheck
import axios from "axios";

export const token = localStorage.getItem("accessToken");
export const roleId = window.sessionStorage.getItem("roleId");

const baseURl = "http://localhost:7000/api/";
export const localUrl = "https://eab9-54-152-1-195.ngrok.io";
export const authUrl = "http://localhost:7000/";

export const api = axios.create({
  baseURL: `${localUrl}`,
  headers: { Authorization: `Bearer ${token}` },
});

export const refreshToken = async (expired = null) => {
  try {
    const res = await axios.post(`${localUrl}users/refresh`, {
      refreshTokenKey: localStorage.getItem("refreshToken"),
    });
    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem("refreshToken", res.data.refreshToken);
  } catch (error) {
    expired && alert("Session Expired");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("auth");
    localStorage.removeItem("accessToken");
    window.location = "/login-admin";
  }
};
export default baseURl;
