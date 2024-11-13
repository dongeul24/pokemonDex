import React, { useContext } from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../data/MOCK_DATA";
import { PokemonContext } from "../context/PokemonContext";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const PokemonList = () => {
  const { addPokemon } = useContext(PokemonContext);

  return (
    <ListContainer>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          isSelected={false}
          onAction={addPokemon}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
