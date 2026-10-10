import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api.js";

export const PostRegister = createAsyncThunk(
  "PostRegister",
  async (registerdata, { rejectWithValue }) => {
    try {
      console.log("THUNK START:", registerdata);

      const response = await api.post("/users/register", registerdata);
      console.log(" PostRegister :", response.data);
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
const RegisterSlice = createSlice({
  name: "register",
  initialState: {
    isLoggedIn: false,
    status: "idle",
    id: null,
    name: null,
    familyname: null,
    username: null,
    mobile: null,
    token: localStorage.getItem("token"),
  },
  reducers: {
    registered: (state, action) => {
      state.isLoggedIn = true;
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) => {
    builder
      // وقتی درخواست شروع می‌شود
      .addCase(PostRegister.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      // وقتی درخواست موفق می‌شود
      .addCase(PostRegister.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isLoggedIn = true;
        state.name = action.payload.user.name;
        state.familyname = action.payload.user.familyname;

        state.username = action.payload.user.username;
        state.token = action.payload.user.token;
        localStorage.setItem("token", action.payload.user.token);
        state.error = null;
      })
      // وقتی درخواست شکست می‌خورد
      .addCase(PostRegister.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { registered } = RegisterSlice.actions;
export default RegisterSlice.reducer;
