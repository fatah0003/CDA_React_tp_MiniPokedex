import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import Pokemondetails from './pages/PokemonDetail';
import FavoritesPage from './pages/FavoritesPage';
import './App.css';
import TeamPage from './pages/TeamPage';

function App() {
  const [pokemons, setPokemons] = useState([]);

    return (
        <>
            <div>
                <Navigation />
                <main>
                    <Routes>
                        <Route path='/' element={<HomePage pokemons={pokemons} setPokemons ={setPokemons} />}/>
                        <Route path='/pokemon/:id' element={<Pokemondetails pokemos={pokemons} />}/>
                        <Route path='/favorites' element={<FavoritesPage />}/>
                        <Route path='/team' element={<TeamPage />}/>
                        {/* <Route path='/profile' element={}/> */}
                    </Routes>
                </main>
            </div>
        
            
        </>
    );
}


export default App;
