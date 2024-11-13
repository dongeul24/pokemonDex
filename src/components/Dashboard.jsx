import React, { useContext } from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import pokeball from "../assets/pokeball.png";
import { PokemonContext } from "../context/PokemonContext";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 10px 100px 10px;
  width: 100%;
  margin: 50px auto;
  background-color: #f4f0e2;
  border: 5px solid #222224;
  border-radius: 20px;
  gap: 50px;
`;

const DashboardTitle = styled.h1`
  color: #ff0000;
  font-size: 30px;
`;

const PokemonSlotArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  gap: 50px;
  width: 100%;
`;

const EmptySlot = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: url(${pokeball});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dashboard = () => {
  const { addedPokemons, removePokemon } = useContext(PokemonContext);

  return (
    <DashboardContainer>
      <DashboardTitle>나만의 포켓몬</DashboardTitle>
      <PokemonSlotArea>
        {[...Array(6)].map((_, index) => {
          const pokemon = addedPokemons[index];
          return pokemon ? (
            <PokemonCard
              key={index}
              pokemon={pokemon}
              isSelected={true}
              onAction={removePokemon}
            />
          ) : (
            <EmptySlot key={index} />
          );
        })}
      </PokemonSlotArea>
    </DashboardContainer>
  );
};

export default Dashboard;
