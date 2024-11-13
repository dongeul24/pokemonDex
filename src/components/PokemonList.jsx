import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../data/MOCK_DATA";
import { useDispatch } from "react-redux";
import { addPokemon } from "../redux/slices/pokemonSlice";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const PokemonList = () => {
  const dispatch = useDispatch();
  const addPokemonHandler = (pokemon) => dispatch(addPokemon(pokemon));

  return (
    <ListContainer>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          isSelected={false}
          onAction={addPokemonHandler}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
