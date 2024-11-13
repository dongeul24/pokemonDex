import React, { useState } from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import Background from "../components/Background";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const Dex = () => {
  const [addedPokemons, setAddedPokemons] = useState([]);

  const addPokemon = (pokemon) => {
    if (addedPokemons.length >= 6) {
      toast.error("최대 6개의 포켓몬만 선택할 수 있습니다.");
      return;
    }
    if (addedPokemons.find((p) => p.id === pokemon.id)) {
      toast.error("이미 선택한 포켓몬입니다.");
      return;
    }
    setAddedPokemons([...addedPokemons, pokemon]);
  };

  const removePokemon = (pokemon) => {
    setAddedPokemons(addedPokemons.filter((p) => p.id !== pokemon.id));
  };

  return (
    <Background
      background={"../images/pokemon_background_list.jpg"}
      height={"100%"}
      backgroundSize={"contain"}
    >
      <DexContainer>
        <Dashboard
          addedPokemons={addedPokemons}
          removePokemon={removePokemon}
        />
        <PokemonList onAction={addPokemon} />
        <ToastContainer position="top-center" autoClose={1000} />
      </DexContainer>
    </Background>
  );
};

export default Dex;
