import { useEffect } from "react";
import { getPokemons } from "../services/pokemonApi";
import PokemonCard from "../components/PokemonCard";


function HomePage({ pokemons, setPokemons }) {
  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await getPokemons();
      const apiPokemons = response.data.results.slice(0, 30);
      

      setPokemons(apiPokemons);
    };
    fetchPokemons();
  }, [setPokemons]);

  return (
    <div>
      <h1>Tous les pokémons</h1>
      {pokemons.map((pokemon, index) => {
        const id = pokemon.url.split("/")[6];
        return (
          <div key={id || index}>
            <PokemonCard pokemon={{ ...pokemon, id }} />
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
