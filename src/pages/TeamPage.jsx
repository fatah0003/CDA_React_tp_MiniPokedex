import { useContext } from "react";

import PokemonCard from "../components/PokemonCard";
import { PokemonContext } from "../context/PokemonContext";

function TeamPage() {
  const { team } = useContext(PokemonContext);

  return (
    <div>
      <h1>Mon équipe</h1>
      {team.length === 0 ? (
        <p>Aucun Pokémon n'est ajouté à la team</p>
      ) : (
        team.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))
      )}
    </div>
  );
}

export default TeamPage;
