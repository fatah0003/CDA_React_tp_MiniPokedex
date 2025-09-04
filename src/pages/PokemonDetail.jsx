import { useEffect, useState } from "react";
import { getPokemon } from "../services/pokemonApi";
import { Link, useParams } from "react-router-dom";

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await getPokemon(id);
      setPokemon(response.data);
    };
    fetchPokemon();
  }, [id]);

  if (!pokemon) return <p>Chargement...</p>;

  return (
    <article>
      <Link to="/">← Retour à l'accueil</Link>

      <h1>{pokemon.name}</h1>

      <img 
        src={pokemon.sprites.front_default} 
        alt={pokemon.name} 
        style={{ width: "150px" }} 
      />

      <p><strong>Type :</strong> {pokemon.types.map(t => t.type.name).join(", ")}</p>
      <p><strong>Taille :</strong> {pokemon.height}</p>
      <p><strong>Poids :</strong> {pokemon.weight}</p>
    </article>
  );
}

export default PokemonDetails;
