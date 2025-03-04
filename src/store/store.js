import { configureStore } from "@reduxjs/toolkit";
import reducerHeart from "./reducer";

export const store = configureStore({
    reducer: {
        heart: reducerHeart,
    }
})