import { useState } from "react";
import { PokemonContext } from "./PokemonContext";

export function PokemonProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [team, setTeam] = useState([]);

  const addFavorite = (pokemon) => {
    if (!favorites.find((fav) => fav.id === pokemon.id)) {
      setFavorites([...favorites, pokemon]);
    }
  };

  const addToTeam = (pokemon) => {
    if (team.length >= 6) {
      alert("L'équipe est pleine (max 6 Pokémon) !");
      return;
    }
    if (!team.find((tm) => tm.id === pokemon.id)) {
      setTeam([...team, pokemon]);
    }
  };

  return (
    <PokemonContext.Provider value={{ favorites, addFavorite, team, addToTeam }}>
      {children}
    </PokemonContext.Provider>
  );
}
