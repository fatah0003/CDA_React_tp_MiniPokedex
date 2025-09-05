import { useContext } from "react";

import PokemonCard from "../components/PokemonCard";
import { PokemonContext } from "../context/PokemonContext";

function FavoritesPage() {
  const { favorites } = useContext(PokemonContext);

  return (
    <div>
      <h1>Mes Pokémons favoris</h1>
      {favorites.length === 0 ? (
        <p>Aucun Pokémon n'est ajouté aux favoris</p>
      ) : (
        favorites.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))
      )}
    </div>
  );
}

export default FavoritesPage;
