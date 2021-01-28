import axios from "axios";
import { ACTION_TYPES } from "../const";

export const activateModal = () => {
  return {
    type: ACTION_TYPES.OPEN_MODAL,
  };
};

export const deactivateModal = () => {
  return {
    type: ACTION_TYPES.CLOSE_MODAL,
  };
};

export const onChangePassword = (passwordValue) => {
  return {
    type: ACTION_TYPES.ON_CHANGE_PASSWORD,
    payload: passwordValue,
  };
};
export const onChangeName = (nameValue) => {
  return {
    type: ACTION_TYPES.ON_CHANGE_NAME,
    payload: nameValue,
  };
};

const signInStart = () => {
  return {
    type: ACTION_TYPES.SIGN_IN_START,
  };
};

const signInSuccess = (userData) => {
  return {
    type: ACTION_TYPES.SIGN_IN_SUCCESS,
    payload: userData,
  };
};

const signInFailure = (err) => {
  return {
    type: ACTION_TYPES.SIGN_IN_FAILURE,
    payload: err,
  };
};

export const signIn = ({ name, password, token }) => {
  console.log(name, password, token);
  return async (dispatch, getState) => {
    dispatch(signInStart());
    try {
      const response = await axios.post("http://localhost:3001/auth/sign-in", {
        name,
        password,
        token,
      });

      dispatch(signInSuccess(response.data));

      localStorage.setItem("token", response.data.token);
    } catch (err) {
      console.log("err", err);
      dispatch(signInFailure(err.response?.data));
    }
  };
};

export const signOut = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: ACTION_TYPES.SIGN_OUT,
  });
};
