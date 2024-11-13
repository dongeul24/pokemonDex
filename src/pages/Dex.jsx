import React, { useContext } from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import Background from "../components/Background";
import { PokemonContext } from "../context/PokemonContext";

const DexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const Dex = () => {
  const { addedPokemons, addPokemon, removePokemon } =
    useContext(PokemonContext);

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
      </DexContainer>
    </Background>
  );
};

export default Dex;
