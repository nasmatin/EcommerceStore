import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api.js";

export const PostLogin = createAsyncThunk(
  "PostLogin",
  async (logindata, { rejectWithValue }) => {
    try {
      console.log("THUNK START:", logindata);

      const response = await api.post("/users/loginclient", logindata);
      console.log("RESPONSE API:", response.data);
      const result = response.data;

      console.log("BEFORE RETURN:", result);

      return result;
    } catch (error) {
      console.log("ERROR:", error);
      console.log("ERROR RESPONSE:", error.response?.data);
      return rejectWithValue(error.message);
    }
  }
);
const authSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
    status: "idle",
    name: null,
    username: null,
    token: localStorage.getItem("token"),
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.name = null;
      state.username = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      // وقتی درخواست شروع می‌شود
      .addCase(PostLogin.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      // وقتی درخواست موفق می‌شود
      .addCase(PostLogin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isLoggedIn = true;
        state.name = action.payload.user.name;
        state.username = action.payload.user.username;
        state.token = action.payload.user.token;
        localStorage.setItem("token", action.payload.user.token);
        state.error = null;
      })
      // وقتی درخواست شکست می‌خورد
      .addCase(PostLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
