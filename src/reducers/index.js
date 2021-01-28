import { combineReducers } from "redux";

import AuthReducer from "./AuthReducer";
import ModalReducer from "./ModalReducer";

export default combineReducers({
  modal: ModalReducer,
  auth: AuthReducer,
});
