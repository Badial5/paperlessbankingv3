import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./user/userSlice";
import accountsReducer from "./account/accountSlice";


   
//store
// const store = configureStore({
//     reducer: {
//         users: usersReducer,
//     }
// })


//store
// const store = configureStore({
//     reducer: {
//       users: usersReducer,
//     //   accounts: accountsReducer,
//     //   transactions: transactionsReducer,
//     },
//   });

export const StoreToolkit = configureStore({
    reducer: {
        users: usersReducer,
        accounts: accountsReducer,
    },
  })
