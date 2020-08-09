import * as types from "../constants/auth.constants";
import api from "../api";
import { alertActions } from "./alert.actions";

const loginRequest = (email, password) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST, payload: null });
  try {
    const res = await api.post("/auth/login", { email, password });
    const name = res.data.data.name;
    dispatch(alertActions.setAlert(`Welcome back, ${name}`, "success"));
    dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE, payload: error });
  }
};

const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST, payload: null });
  try {
    const res = await api.post("/users", { name, email, password });
    dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE, payload: error });
  }
};

const getCurrentUser = (accessToken) => async (dispatch) => {
  dispatch({ type: types.GET_CURRENT_USER_REQUEST, payload: null });
  if (accessToken) {
    const bearerToken = "Bearer " + accessToken;
    api.defaults.headers.common["authorization"] = bearerToken;
  }
  try {
    const res = await api.get("/users/me");
    dispatch({ type: types.GET_CURRENT_USER_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.GET_CURRENT_USER_FAILURE, payload: error });
  }
};
const logout = () => (dispatch) => {
  delete api.defaults.headers.common["authorization"];
  localStorage.setItem("accessToken", "");
  dispatch({ type: types.LOGOUT, payload: null });
};

const updateUser = (name) => async (dispatch) => {
  console.log('*--- updateUser ---*')
  console.log('name:', name)
  try {
    dispatch({ type: types.UPDATE_USER_REQUEST, payload: null });
    const res = await api.put("/users/me", { name });
    console.log('res.data:', res.data)
    dispatch(alertActions.setAlert("Update success", "success"));
    dispatch({ type: types.UPDATE_USER_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.UPDATE_USER_FAILURE, payload: error });
  }
}

const uploadAvatar = (file) => async (dispatch) => {
  dispatch({ type: types.UPLOAD_AVATAR_REQUEST, payload: null });
  try {
    const formData = new FormData();
    formData.append('avatarUpload', file);
    const res = await api.post("/users/me/avatar", formData);
    console.log('res.data:', res.data)

    dispatch({
      type: types.UPLOAD_AVATAR_SUCCESS,
      payload: res.data.data,
    });
    dispatch(alertActions.setAlert("New blog has been created!", "success"));
  } catch (error) {
    dispatch({ type: types.UPLOAD_AVATAR_FAILURE, payload: error });
  }
};

export const authActions = {
  loginRequest,
  register,
  getCurrentUser,
  logout,
  updateUser,
  uploadAvatar,
};
