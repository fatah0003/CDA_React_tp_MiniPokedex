import { useState } from "react";
import { PokemonContext } from "./PokemonContext";

export function PokemonProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (pokemon) => {
    if (!favorites.find((fav) => fav.id === pokemon.id)) {
      setFavorites([...favorites, pokemon]);
    }
  };

  return (
    <PokemonContext.Provider value={{ favorites, addFavorite }}>
      {children}
    </PokemonContext.Provider>
  );
}
