import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <Link to='/'>Pokemons</Link>
            <Link to='/favorites'>Liste des favoris</Link>
        </nav>
    );
}
export default Navigation;
