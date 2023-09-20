import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    user: {},
    profile: {},
    userAuth: {
  
      userInfo: sessionStorage.getItem("userInfo")
        ? JSON.parse(sessionStorage.getItem("userInfo"))
        : null,
        token: null,
        isAuthenticated: false,
    },
   
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },

    //this is for the logout
    clearToken: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
    // Add more actions for user-related state here
  },
});

export const { setToken, clearToken } = userSlice.actions;
export default userSlice.reducer;
