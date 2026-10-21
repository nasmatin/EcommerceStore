import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api.js";

export const PostRegister = createAsyncThunk(
  "PostRegister",
  async (registerdata, { rejectWithValue }) => {
    try {
      const response = await api.post("/users/register", registerdata);
      const result = response.data;

      return result;
    } catch (error) {
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
      .addCase(PostRegister.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(PostRegister.fulfilled, (state, action) => {
        const user = action.payload.user;

        state.status = "succeeded";
        state.isLoggedIn = true;
        state.name = user.name;
        state.familyname = user.familyname;
        state.username = user.username;
        state.token = user.token;

        localStorage.setItem("token", user.token);
        localStorage.setItem("user", JSON.stringify(user));
        state.error = null;
      })
      .addCase(PostRegister.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { registered } = RegisterSlice.actions;
export default RegisterSlice.reducer;
