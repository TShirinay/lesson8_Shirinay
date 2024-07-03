import {configureStore} from "@reduxjs/toolkit";
import UserSlice from "../components/userSlice/UserSlice";

export const store = configureStore({
    reducer: {
        users: UserSlice
    }
})