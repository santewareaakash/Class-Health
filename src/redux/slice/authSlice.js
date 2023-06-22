import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PostLogin } from "../../services/auth";



export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async (credential, { rejectWithValue }) => {
    try {
      const response = await PostLogin(credential);

      return response?.data;
    } catch (error) {
      // return rejectWithValue(error?.response?.data)
    }
  }
);



const initialState = {
  loggedInUser: {},
  token: null,
  refreshToken: null,
  isLoggedIn:true,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state,action) => {
      state.loggedInUser = action.payload.user;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem('user',JSON.stringify(action.payload.user))
    },
    logout: (state) => {
      state.loggedInUser = {};
      state.token = null;
      state.refreshToken = null;
      state.isLoggedIn = false
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loggedInUser = action.payload.data.userData;
      state.token = action.payload.data.jwtToken;
      state.refreshToken = action.payload.data.refreshToken;
    });
  },
});

export const { logout,login } = authSlice.actions;

export default authSlice.reducer;