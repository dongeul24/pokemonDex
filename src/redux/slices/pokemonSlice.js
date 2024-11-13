import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  addedPokemons: [],
};

const pokemonSlice = createSlice({
  name: "pokemonReducer",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      if (state.addedPokemons.length >= 6) {
        toast.error("최대 6개의 포켓몬만 선택할 수 있습니다.");
        return;
      }
      if (state.addedPokemons.some((p) => p.id === action.payload.id)) {
        toast.error("이미 선택한 포켓몬입니다.");
        return;
      }
      state.addedPokemons.push(action.payload);
      toast.success(
        `${action.payload.korean_name} 포켓몬이 성공적으로 추가되었습니다!`
      );
    },
    removePokemon: (state, action) => {
      state.addedPokemons = state.addedPokemons.filter(
        (p) => p.id !== action.payload.id
      );
      toast.success(
        `${action.payload.korean_name} 포켓몬이 성공적으로 삭제되었습니다!`
      );
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
