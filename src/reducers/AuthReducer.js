import { ACTION_TYPES } from "../const";

const initialState = {
  name: "",
  password: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ON_CHANGE_NAME: {
      return {
        ...state,
        name: action.payload,
      };
    }
    case ACTION_TYPES.ON_CHANGE_PASSWORD: {
      return {
        ...state,
        password: action.payload,
      };
    }
    case ACTION_TYPES.SIGN_IN_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case ACTION_TYPES.SIGN_IN_SUCCESS: {
      return {
        ...state,
        ...initialState,
        user: action.payload,
        token: action.payload.token,
        loading: false,
      };
    }
    case ACTION_TYPES.SIGN_IN_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case ACTION_TYPES.SIGN_OUT: {
      return initialState;
    }

    default:
      return state;
  }
};
