import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Cards = styled.div`
  width: auto;
  border-radius: 15px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 30px;
  background-color: #ffffff;
  text-align: center;
  margin: 10px;
  transition: transform 0.2s, box-shadow 0.2s, background-color 0.5s;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 15px 10px rgba(0, 0, 0, 0.2);
    background-color: #f8f8f8;
  }
`;

const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
`;

const PokemonName = styled.h3`
  font-size: 20px;
  margin: 10px 0;
`;

const PokemonNumber = styled.p`
  font-size: 15px;
  color: #777;
`;

const PokemonCard = ({ pokemon, isSelected, onAction }) => {
  const navigate = useNavigate();
  const ActionHandler = (e) => {
    e.stopPropagation(); //카드, 버튼 이벤트 서로 영향 없게 하려고..
    onAction(pokemon);
  };

  return (
    <Cards onClick={() => navigate(`/detail/${pokemon.id}`)}>
      <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <PokemonName>{pokemon.korean_name}</PokemonName>
      <PokemonNumber>
        No. {pokemon.id.toString().padStart(3, "0")}
      </PokemonNumber>
      <Button fontSize={"15px"} onClick={ActionHandler}>
        {isSelected ? "돌아와!!" : "가라!!"}
      </Button>
    </Cards>
  );
};

export default PokemonCard;
