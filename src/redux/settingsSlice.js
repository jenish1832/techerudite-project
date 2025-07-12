import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSettings = createAsyncThunk(
  "settings/fetchSettings",
  async () => {
    const res = await axios.get(
      "http://3.7.81.243:3253/api/settings/fetch-frontend-details"
    );
    return res?.data?.data;
  }
);

const settingsSlice = createSlice({
  name: "settings",
  initialState: { data: null, status: "idle" },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSettings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSettings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      });
  },
});

export default settingsSlice.reducer;
