import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <Link to='/'>Pokemons</Link>
            <Link to='/favorites'>Liste des favoris</Link>
            <Link to='/team'>Mon équipe</Link>
        </nav>
    );
}
export default Navigation;
