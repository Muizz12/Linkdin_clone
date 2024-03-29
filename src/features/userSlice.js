import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,

  },
  reducers: {
    Logins: (state, action) => {

      state.user = action.payload;
    },
    Logout: (state) => {
      state.user = null;
    },
  },
});

export const { Logins, Logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;


export default userSlice.reducer;
