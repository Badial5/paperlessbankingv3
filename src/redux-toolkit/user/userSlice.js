import { createSlice } from "@reduxjs/toolkit";


console.log(sessionStorage.getItem("token"))

const token = sessionStorage.getItem("token")
console.log(token)


// Initial state
const initialState = {
  loading: false,
  error: null,
  userAuth: {
    token: token,
    refreshToken: sessionStorage.getItem("RefreshToken"),
    tokenExpiry: sessionStorage.getItem("TokenExpiry"),
    userInfo: sessionStorage.getItem("userInfo")
      ? JSON.parse(sessionStorage.getItem("userInfo"))
      : null,
  },
  profile: {},
};


console.log(sessionStorage.getItem("token"))

// Users slice
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // Reducer for setting user info
    setUserInfo: (state, action) => {
      state.userAuth.userInfo = action.payload;
    },
    // Reducer for clearing user info
    clearUserInfo: (state) => {
      sessionStorage.clear()
      state.userAuth.userInfo = null
      state.profile = null
    },

    //clear user auth
    clearUserAuth: (state) => {
      sessionStorage.clear()
      state.userAuth = null
      state.profile = null
    },


    // Reducer for setting profile
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    // Reducer for clearing errors
    clearError: (state) => {
      state.error = null;
    },
  },
});

// Export action creators
export const { setUserInfo, clearUserInfo, setProfile, clearError, clearUserAuth } = usersSlice.actions;

// Generate reducer
const usersReducer = usersSlice.reducer;

export default usersReducer;
