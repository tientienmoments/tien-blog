import * as types from "../constants/auth.constants";
const initialState = {
  user: {},
  accessToken: localStorage.getItem("accessToken"),
  isAuthenticated: false,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_REQUEST:
    case types.REGISTER_REQUEST:
    case types.GET_CURRENT_USER_REQUEST:
    case types.UPDATE_USER_REQUEST:
    case types.UPLOAD_AVATAR_REQUEST:
      return { ...state, loading: true };
    case types.LOGIN_SUCCESS:
      console.log("tien payload data", payload)
      localStorage.setItem("accessToken", payload.data.accessToken);


      return {
        ...state,
        user: { ...payload.data },
        accessToken: payload.data.accessToken,
        loading: false,
        isAuthenticated: true,
      };
    case types.LOGIN_FAILURE:
    case types.REGISTER_FAILURE:
    case types.GET_CURRENT_USER_FAILURE:
    case types.UPDATE_USER_FAILURE:
    case types.UPLOAD_AVATAR_FAILURE:
      return { ...state, loading: false };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case types.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        isAuthenticated: true,
      };
    case types.LOGOUT:
      return {
        ...state,
        accessToken: null,
        isAuthenticated: false,
        user: null,
        loading: false,
      };
    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
      }
    case types.UPLOAD_AVATAR_SUCCESS:
      {
        // console.log('payload.avatar.url:', payload)
        // console.log('state.user.avatar.url:', state.user.avatar.url)
        state.user.avatar = payload.url
        return {
          ...state, loading: false,
        }
      }

    default:
      return state;
  }
};

export default authReducer;
