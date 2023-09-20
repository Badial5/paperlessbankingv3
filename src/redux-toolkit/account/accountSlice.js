import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../Interceptors/tokenAxios";

//initialState
const initialState = {
  account: {},
  accounts: [],
  error: null,
  loading: false,
  success: false,
  isUpdated: false,
};

//account to create account/project
export const createAccountAction = createAsyncThunk(
  "account/create",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    // const { name, initialBalance, accountType, notes } = payload;
    // const {title, full_name, id_type, id_number, account_type } = payload
    try {
      //get the token
    //   const token = getState()?.users?.userAuth?.userInfo?.token;
    // const token = getState()?.users?.userAuth?.token;
    const token = sessionStorage.getItem("token")

      //pass the token to header
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          // "Content-Type": `multipart/form-data`,
          encType: "multipart/form-data"
        },
      };
      //make the request
      const { data } = await api.post("/bank/v1/bank-account-request/",
        payload,
        config
      );
      console.log("Multi Step Form Data: ", data)
      return data;
      
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

//account to create account/project

export const updateAccountAction = createAsyncThunk(
  "account/update",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    // const { name, initialBalance, accountType, notes, id } = payload;
    // const {title, full_name, id_type, id_number, account_type } = payload
    try {
      //get the token
    //   const token = getState()?.users?.userAuth?.userInfo?.token;
    const token = getState()?.users?.userAuth?.token;
      //pass the token to header
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      //make the request
      const { data } = await axios.put(
        // `${baseURL}/accounts/${id}`,
        `/bank/v1/bank-account-request/${payload.id_number}/`,
        payload,
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

//get single account
export const getAllAccountAction = createAsyncThunk(
  "account/get-all-details",
  async (
    // id,
    payload,
     { rejectWithValue, getState, dispatch }) => {
    try {
      //get the token
    //   const token = getState()?.users?.userAuth?.userInfo?.token;
    const token = getState()?.users?.userAuth?.token;
      //pass the token to header
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      //make the request
      const { data } = await api.get(
        // `${baseURL}/accounts/${id}`,
        `/bank/v1/bank-account-request/`,
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);


//get single account
export const getSingleAccountAction = createAsyncThunk(
  "account/get-details",
  async (
    // id,
    payload,
     { rejectWithValue, getState, dispatch }) => {
    try {
      //get the token
    //   const token = getState()?.users?.userAuth?.userInfo?.token;
    const token = getState()?.users?.userAuth?.token;
      //pass the token to header
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      //make the request
      const { data } = await api.get(
        // `${baseURL}/accounts/${id}`,
        `/bank/v1/bank-account-request/${payload.id_number}/`,
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);


//get single account
export const getSingleAccountNumberAction = createAsyncThunk(
  "account/account-number",
  async (
    // id,
    payload,
     { rejectWithValue, getState, dispatch }) => {
    try {
      //get the token
    //   const token = getState()?.users?.userAuth?.userInfo?.token;
    const token = getState()?.users?.userAuth?.token;
      //pass the token to header
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      //make the request
      const { data } = await api.get(
      
        `/bank/v1/bank-accounts/${payload.id_number}`, 
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

//create slice
const accontsSlice = createSlice({
  name: "accounts",
  initialState,
  extraReducers: (builder) => {
    //create account
    builder.addCase(createAccountAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createAccountAction.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.account = action.payload;
    });
    builder.addCase(createAccountAction.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.account = null;
      state.error = action.payload;
    });
    //fetch single account
    builder.addCase(getSingleAccountAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSingleAccountAction.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.account = action.payload;
    });
    builder.addCase(getSingleAccountAction.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.account = null;
      state.error = action.payload;
    });

    //fetch all account
    builder.addCase(getAllAccountAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllAccountAction.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.accounts = action.payload;
    });
    builder.addCase(getAllAccountAction.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.accounts = null;
      state.error = action.payload;
    });

    //update account
    builder.addCase(updateAccountAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateAccountAction.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.isUpdated = true;
      state.account = action.payload;
    });
    builder.addCase(updateAccountAction.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.account = null;
      state.error = action.payload;
      state.isUpdated = false;
    });
  },
});

//Generate reducer
const accountsReducer = accontsSlice.reducer;

export default accountsReducer;
