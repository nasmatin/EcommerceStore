import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api.js";

export const PostLogin = createAsyncThunk(
  "PostLogin",
  async (logindata, { rejectWithValue }) => {
    try {
      const response = await api.post("/users/loginclient", logindata);
      const result = response.data;

      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const savedUser = JSON.parse(localStorage.getItem("user") || "null");
const LoginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: !!savedUser?.token,

    status: "idle",
    id: savedUser?.id ?? null,
    name: savedUser?.name ?? null,
    familyname: savedUser?.familyname ?? null,
    username: savedUser?.username ?? null,
    mobile: savedUser?.mobile ?? null,
    token: localStorage.getItem("token"),
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.familyname = action.payload.familyname;
      state.username = action.payload.username;
      state.mobile = action.payload.mobile;
      state.token = action.payload.token;

      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("token", action.payload.token);
    },
    updateUserInfo: (state, action) => {
      state.name = action.payload.name;
      state.familyname = action.payload.familyname;
      state.mobile = action.payload.mobile;
      const user = JSON.parse(localStorage.getItem("user") || "{}");

      localStorage.setItem(
        "user",
        JSON.stringify({
          ...user,
          name: action.payload.name,
          familyname: action.payload.familyname,
          mobile: action.payload.mobile,
        })
      );
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.id = null;
      state.name = null;
      state.familyname = null;
      state.username = null;
      state.mobile = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
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
        state.id = action.payload.user.id;
        state.name = action.payload.user.name;
        state.familyname = action.payload.user.familyname;
        state.username = action.payload.user.username;
        state.mobile = action.payload.user.mobile;
        state.token = action.payload.user.token;
        localStorage.setItem("token", action.payload.user.token);
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        state.error = null;
      })
      // وقتی درخواست شکست می‌خورد
      .addCase(PostLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { login, logout, updateUserInfo } = LoginSlice.actions;
export default LoginSlice.reducer;
