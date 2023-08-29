import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user'; // Create this reducer

const store = configureStore({
  reducer: {
    user: userReducer,
    // Add more reducers for different parts of your application
  },
});

export default store;
