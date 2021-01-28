import { ACTION_TYPES } from "../const";

const initialState = {
  isActive: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.OPEN_MODAL: {
      return {
        ...state,
        isActive: true,
      };
    }
    case ACTION_TYPES.CLOSE_MODAL: {
      return {
        ...state,
        isActive: false,
      };
    }
    default:
      return state;
  }
};
