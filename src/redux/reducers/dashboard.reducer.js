import * as types from "../constants/dashboard.constants"

const initialState = {
    blogs: [],
    friends: [],
    selectedBlog: {},
    loading: false,
    total_blogs: 0,
    total_friends: 0
}

const dashboardReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.BLOG_REQUEST:
        case types.GET_CURRENT_USER_REQUEST:
            return { ...state, loading: true }
        case types.BLOG_REQUEST_SUCCESS:
            return { ...state, blogs: payload.blogs, total_blogs: payload.total_blogs }
        case types.GET_CURRENT_USER_SUCCESS:
            return { ...state, friends: payload.friends, total_friends: payload.total_friends }
        case types.BLOG_REQUEST_FAILURE:
        case types.GET_CURRENT_USER_FAILURE:
            return { ...state, loading: false }
        default:
            return state;
    }
}

export default dashboardReducer;