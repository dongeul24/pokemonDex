import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import MOCK_DATA from "../data/MOCK_DATA";
import Background from "../components/Background";
import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { addPokemon, removePokemon } from "../redux/slices/pokemonSlice";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const PokemonImage = styled.img`
  width: 300px;
  height: 300px;
`;

// 타이핑 애니메이션
const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

//커서 블링크하는 부분
const blink = keyframes`
  from, to {
    border-right-color: transparent;
  }
  50% {
    border-right-color: black;
  }
`;

const PokemonName = styled.h1`
  font-size: 30px;
  color: #ff0000;
  text-align: center;
  white-space: nowrap;
  overflow: hidden; /* 넘치는 텍스트 숨기기 */
  width: 100%;

  animation: ${typing} 1s steps(40) 0.2s 1 normal both;
`;

const PokemonType = styled.p`
  font-size: 25px;
  color: #0075be;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;

  animation: ${typing} 1s steps(40) 0.2s 1 normal both;
`;

const PokemonDescription = styled.p`
  font-size: 18px;
  color: #333;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;

  border-right: 3px solid black; /* 커서 효과 */
  animation: ${typing} 2s steps(40) 0.5s 1 normal both,
    ${blink} 0.75s step-end infinite;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const PokemonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addedPokemons = useSelector(
    (state) => state.pokemonReducer.addedPokemons
  );
  const pokemon = MOCK_DATA.find((p) => p.id === parseInt(id));
  const isAdded = addedPokemons.some((p) => p.id === pokemon.id);

  const handleIsAdded = () => {
    if (isAdded) {
      dispatch(removePokemon(pokemon));
    } else {
      dispatch(addPokemon(pokemon));
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Background background={"../images/pokemon_dex_background.avif"}>
      <DetailContainer>
        <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
        <PokemonName>{pokemon.korean_name}</PokemonName>
        <PokemonType>{pokemon.types.join(", ")}</PokemonType>
        <PokemonDescription>{pokemon.description}</PokemonDescription>
        <ButtonArea>
          <Button fontSize={"1rem"} onClick={goBack}>
            뒤로 가기
          </Button>
          <Button fontSize={"1rem"} onClick={handleIsAdded}>
            {isAdded ? "돌아와!!" : "가라!!"}
          </Button>
        </ButtonArea>
      </DetailContainer>
    </Background>
  );
};

export default PokemonDetail;
