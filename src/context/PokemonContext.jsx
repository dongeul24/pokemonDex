import React, { createContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [addedPokemons, setAddedPokemons] = useState([]);

  useEffect(() => {
    // 로컬 스토리지에서 초기 데이터 로드
    const storedPokemons = JSON.parse(localStorage.getItem("selectedPokemons"));
    if (storedPokemons) {
      setAddedPokemons(storedPokemons);
    }
  }, []);

  useEffect(() => {
    // 로컬 스토리지에 포켓몬 데이터 저장(나중에 상세 페이지 갔다가 카드 그대로 남아있게하기 위함...)
    localStorage.setItem("selectedPokemons", JSON.stringify(addedPokemons));
  }, [addedPokemons]);

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
    toast.success(`${pokemon.korean_name} 포켓몬이 성공적으로 추가되었습니다!`);
  };

  const removePokemon = (pokemon) => {
    setAddedPokemons(addedPokemons.filter((p) => p.id !== pokemon.id));
    toast.success(`${pokemon.korean_name} 포켓몬이 성공적으로 삭제되었습니다.`);
  };

  return (
    <PokemonContext.Provider
      value={{ addedPokemons, addPokemon, removePokemon }}
    >
      {children}
      <ToastContainer position="top-center" autoClose={1000} />
    </PokemonContext.Provider>
  );
};
