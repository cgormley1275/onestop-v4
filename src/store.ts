import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./SignIn/reducer.ts";

const store = configureStore({
    reducer: {
        userReducer
    },
});
export default store;