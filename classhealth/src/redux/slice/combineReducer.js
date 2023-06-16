import { combineReducers } from "@reduxjs/toolkit";

import universalLoadingSlice from "./loadingSlice";

const combinedReducer = combineReducers({
  loading: universalLoadingSlice,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default rootReducer;
