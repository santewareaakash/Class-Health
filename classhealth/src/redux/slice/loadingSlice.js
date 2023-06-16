import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const universalLoadingSlice = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    toggleLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { toggleLoading } = universalLoadingSlice.actions;

export default universalLoadingSlice.reducer;
