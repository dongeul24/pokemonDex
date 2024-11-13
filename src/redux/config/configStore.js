import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../slices/pokemonSlice";

const store = configureStore({
  reducer: {
    pokemonReducer,
  },
});

export default store;
