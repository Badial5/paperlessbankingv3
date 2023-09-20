import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
// import baseURL from "../../../utils/baseURL";
import api from "../../Interceptors/tokenAxios";

import { useNavigate, Link as RouterLink, Link } from 'react-router-dom';



//initial state
const initialState = {
    loading: false,
    error: null,
    users: [],
    user: {},
    profile: {},
    userAuth: {
  
      userInfo: sessionStorage.getItem("userInfo")
        ? JSON.parse(sessionStorage.getItem("userInfo"))
        : null,
    },
  };
  
  //create action creator  - createAsyncThunk
  //register
  export const registerUserAction = createAsyncThunk(
    "user/register",
    async (
     payload,
      { rejectWithValue, getState, dispatch }
    ) => {
      console.log( "Payloaddd:", action.payload)
      try {
        //header
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const res = await api.post(
          "/users/register",
          {
            first_name : payload.first_name,
            last_name: payload.last_name,
            phone_number: payload.phone_number,
            email: payload.email,
            password1: payload.password1
          },
          config
        );
        console.log( "Try Payload: ", action.payload)
        return res.data;
      } catch (error) {
        console.log("Payload: ", action.payload)
        console.error("API Error:", error);
      console.log("Error response:", error.response); // Log the error response
        return rejectWithValue(error.response.data);
        
      }
    }
  );
  
  // login
  export const loginUserAction = createAsyncThunk(
    "accounts/v1/login/",
    async (payload,  { rejectWithValue, getState, dispatch }) => {
      console.log("Payload: ", payload)
      
      try {
        //header
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const res = await api.post(
          "accounts/v1/login/",
          payload,
          config
        );
        //save user localstorage
        sessionStorage.setItem("userInfo", JSON.stringify(res.payload));
        return res.payload;

      } catch (error) {
        console.log(error)
        return rejectWithValue(error);
      }
    }
  );
  
  //logout
  export const logOutUserAction = createAsyncThunk("user/logout", async () => {
    //remove user from localstorage
    sessionStorage.removeItem("userInfo");
    return null;
  });
  
  //get profile
  export const getProfileAction = createAsyncThunk(
    "users/getProfile",
    async (payload, { rejectWithValue, getState, dispatch }) => {
      try {
        //get the token
        const token = getState()?.users?.userAuth?.userInfo?.token;
        //pass the token to header
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        //make the request
        const { data } = await api.get(`/users/profile`, config);
        //sending the data to the user
        return data;
      } catch (error) {
        return rejectWithValue(error?.response?.data?.message);
      }
    }
  );
  
  //users slice
  const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
      //register
      builder.addCase(registerUserAction.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(registerUserAction.fulfilled, (state, action) => {
        state.loading = false;
        state.userAuth.userInfo = action.payload;
      });
      builder.addCase(registerUserAction.rejected, (state, action) => {
        state.loading = false;
        state.userAuth.error = action.payload;
      });

      //login
      builder.addCase(loginUserAction.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(loginUserAction.fulfilled, (state, action) => {
        state.loading = false;
        state.userAuth.userInfo = action.payload;
      });
      builder.addCase(loginUserAction.rejected, (state, action) => {
        state.loading = false;
        state.userAuth.error = action.payload;
      });
      //logout
      builder.addCase(logOutUserAction.fulfilled, (state, action) => {
        state.loading = false;
        state.userAuth.userInfo = null;
      });
      
      //profile
      builder.addCase(getProfileAction.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(getProfileAction.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      });
      builder.addCase(getProfileAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.profile = "";
      });
    },
  });
  
  //generate reducer
  const usersReducer = usersSlice.reducer;
  
  export default usersReducer;
  