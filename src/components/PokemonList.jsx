import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../data/MOCK_DATA";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const PokemonList = ({ onAction }) => (
  <ListContainer>
    {MOCK_DATA.map((pokemon) => (
      <PokemonCard
        key={pokemon.id}
        pokemon={pokemon}
        isSelected={false} 
        onAction={onAction}
      />
    ))}
  </ListContainer>
);

export default PokemonList;
