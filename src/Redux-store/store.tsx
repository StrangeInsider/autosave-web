// write reduxjs/toolkit store

import { configureStore } from "@reduxjs/toolkit";
import subscribeReducer from "./reducers/subscribe.reducer";

const store = configureStore({
    reducer: {
        subscribe: subscribeReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
      })
})

export default store
