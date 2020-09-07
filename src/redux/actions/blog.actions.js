import * as types from "../constants/blog.constants";
import api from "../api";
import { alertActions } from "./alert.actions";
// const LIMIT = 5;

const blogsRequest = (page) => async (dispatch) => {
  dispatch({ type: types.BLOG_REQUEST, payload: null });
  try {
    const res = await api.get(`/blogs?limit=5&page=${page}`);
    dispatch({ type: types.BLOG_REQUEST_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.BLOG_REQUEST_FAILURE, payload: error });
  }
};
const getSingleBlog = (blogId) => async (dispatch) => {
  dispatch({ type: types.GET_SINGLE_BLOG_REQUEST, payload: null });
  try {
    const res = await api.get(`/blogs/${blogId}`);
    dispatch({
      type: types.GET_SINGLE_BLOG_REQUEST_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: types.GET_SINGLE_BLOG_REQUEST_FAILURE, payload: error });
  }
};

const createReview = (blogId, reviewText) => async (dispatch) => {
  dispatch({ type: types.CREATE_REVIEW_REQUEST, payload: null });
  try {
    const res = await api.post(`/blogs/${blogId}/reviews`, {
      content: reviewText,
    });
    dispatch({
      type: types.CREATE_REVIEW_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: types.CREATE_REVIEW_FAILURE, payload: error });
  }
};
const createNewBlog = (title, content) => async (dispatch) => {
  dispatch({ type: types.CREATE_BLOG_REQUEST, payload: null });
  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    const res = await api.post("/blogs", { title, content });

    dispatch({
      type: types.CREATE_BLOG_SUCCESS,
      payload: res.data.data,
    });
    dispatch(alertActions.setAlert("New blog has been created!", "success"));
  } catch (error) {
    dispatch({ type: types.CREATE_BLOG_FAILURE, payload: error });
  }
};

const updateBlog = (blogId, title, content) => async (dispatch) => {
  dispatch({ type: types.UPDATE_BLOG_REQUEST, payload: null });
  try {
    const res = await api.put(`/blogs/${blogId}`, { title, content });

    dispatch({
      type: types.UPDATE_BLOG_SUCCESS,
      payload: res.data.data,
    });
    dispatch(alertActions.setAlert("The blog has been updated!", "success"));
  } catch (error) {
    dispatch({ type: types.UPDATE_BLOG_FAILURE, payload: error });
  }
};

const deleteBlog = (blogId) => async (dispatch) => {
  dispatch({ type: types.DELETE_BLOG_REQUEST, payload: null });
  try {
    const res = await api.delete(`/blogs/${blogId}`);
    console.log(res);
    dispatch({
      type: types.DELETE_BLOG_SUCCESS,
      payload: res.data,
    });
    dispatch(alertActions.setAlert("The blog has been deleted!", "success"));
  } catch (error) {
    dispatch({ type: types.DELETE_BLOG_FAILURE, payload: error });
  }
};

const updateReaction = (targetType, target, reaction, accessToken) => async (dispatch) => {
  dispatch({ type: types.UPDATE_REACTION_REQUEST, payload: null })
  if (accessToken) {
    const bearerToken = "Bearer " + accessToken;
    api.defaults.headers.common["authorization"] = bearerToken;
  }
  try {
    const res = await api.post('/reactions', { targetType, target, emoji: reaction })
    console.log(res.status)
    dispatch({ type: types.UPDATE_REACTION_SUCCESS, payload: { reaction, status: res.status, target } })
  } catch (error) {
    dispatch({ type: types.UPDATE_REACTION_FAILURE, payload: error })
  }
}
export const blogActions = {
  blogsRequest,
  getSingleBlog,
  createReview,
  createNewBlog,
  updateBlog,
  deleteBlog,
  updateReaction,
};
