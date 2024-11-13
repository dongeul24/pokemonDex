import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import PokemonDetail from "../pages/PokemonDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/detail/:id" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
