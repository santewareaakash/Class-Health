import { combineReducers } from "@reduxjs/toolkit";

import universalLoadingSlice from "./loadingSlice";
import authSlice from "./authSlice";

const combinedReducer = combineReducers({
  auth:authSlice,
  loading: universalLoadingSlice,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default rootReducer;
