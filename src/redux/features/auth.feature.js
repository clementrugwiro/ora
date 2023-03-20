import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../api/userApi";

const initialState = {
  isLoading: false,
  error: null,
  message: "",
};

const loginInitialState = {
  isLoading: false,
  error: "",
  isSuper: false,
  ibibina: "",
  user: "",
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerPending: (state) => {
      state.isLoading = true;
      state.error = "";
      state.message = "";
    },
    registerSuccess: (state, payload) => {
      state.isLoading = false;
      state.error = "";
      state.message = payload;
    },
    registerFail: (state, payload) => {
      state.isLoading = false;
      state.error = payload;
      state.message = "";
    },
  },
});

export const loginSlice = createSlice({
  name: "login",
  initialState: loginInitialState,
  reducers: {
    logout: (state) => {
      state.userToken = null;
      state.user = null;
      state.message = "";
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.error = "";
      state.isSuper = false;
      state.user = "";
      state.ibibina = "";
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.isSuper = action.payload.data ? false : true;
      state.user = action.payload.data
        ? action.payload.data.user
        : action.payload.user;
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
      state.isSuper = false;
      state.user = "";
    },
  },
});

export const { registerPending, registerSuccess, registerFail } =
  registerSlice.actions;

export const { logout } = loginSlice.actions;

export default {
  registerReducer: registerSlice.reducer,
  loginReducer: loginSlice.reducer,
};
