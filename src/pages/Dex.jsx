import React from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import Background from "../components/Background";

const DexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const Dex = () => {
  return (
    <Background
      background={"../images/pokemon_background_list.jpg"}
      height={"100%"}
      backgroundSize={"contain"}
    >
      <DexContainer>
        <Dashboard />
        <PokemonList />
      </DexContainer>
    </Background>
  );
};

export default Dex;
