import { Link } from "react-router-dom";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const PokemonCard = ({ pokemon }) => {
  const { addFavorite } = useContext(PokemonContext);

  return (
    <div>
      <h3>{pokemon.name}</h3>
      <p>ID: {pokemon.id}</p>
      <Link to={`/pokemon/${pokemon.id}`}>Détails</Link>
      <button onClick={() => addFavorite(pokemon)}>
        Ajouter aux favoris
      </button>
    </div>
  );
};

export default PokemonCard;
