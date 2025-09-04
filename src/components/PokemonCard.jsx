import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  return (
    <div>
      <h3>{pokemon.name}</h3>
      <p>ID: {pokemon.id}</p>
      <Link to={`/pokemon/${pokemon.id}`}>Détails</Link>
    </div>
  );
};

export default PokemonCard;
