import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  [key: string]: string | number | object;
}

const initialState = {
  value: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, user) => {
      state.value = user;
    },
    logout: (state) => {
      state.value = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
