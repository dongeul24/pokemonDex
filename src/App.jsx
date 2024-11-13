import React from "react";
import Router from "./shared/Router";
import { PokemonProvider } from "./context/PokemonContext";

const App = () => {
  return (
    <PokemonProvider>
      <Router />
    </PokemonProvider>
  );
};

export default App;
