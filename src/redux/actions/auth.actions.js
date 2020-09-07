import * as types from "../constants/auth.constants";
import api from "../api";
import { alertActions } from "./alert.actions";


const loginRequest = (email, password) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST, payload: null });
  try {
    // const user = useSelector(state => state.auth.user)
    const res = await api.post("auth/login", { email, password });

    const name = res.data.data.user.name;
    console.log("name login", name)
    api.defaults.headers.common["authorization"] = "Bearer " + res.data.data.accessToken;
    dispatch(alertActions.setAlert(`Welcome back, ${name}`, "success"));
    dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE, payload: error });
  }
};

const loginWithFacebook = token => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST, payload: null });
  try {
    const res = await api.get('auth/login/facebook/' + token);

    const fbName = res.data.data.user.name;

    dispatch(alertActions.setAlert(`Welcome back, ${fbName}`, "success"));
    dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
    api.defaults.headers.common["authorization"] = "Bearer " + res.data.data.accessToken;  //1data??

  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE, payload: error });
  }

}
const loginWithGoogle = goToken => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST, payload: null });
  try {
    const res = await api.get('auth/login/google/' + goToken);

    console.log("tien check res go", res);
    const goName = res.data.data.user.name;
    console.log("check go name", goName)

    dispatch(alertActions.setAlert(`Welcome back, ${goName}`, "success"));
    dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
    api.defaults.headers.common["authorization"] = "Bearer " + res.data.data.accessToken;  //1data??

  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE, payload: error });
  }

}


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
    console.log("tien check payload current user", res.data.data)
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
  loginWithFacebook,
  loginWithGoogle
};
