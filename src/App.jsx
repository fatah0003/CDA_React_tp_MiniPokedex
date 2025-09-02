import { useEffect, useState } from 'react';
import './App.css';

function App() {
    //data
    const pokemons = [
        { name: 'Pikachu', type: 'Électrik' },
        { name: 'Bulbizarre', type: 'Plante' },
        { name: 'Salamèche', type: 'Feu' },
        { name: 'Carapuce', type: 'Eau' },
    ];

    // state
    const [searchTerm, setSearchTerm] = useState(() => localStorage.getItem('Pikachu') ?? '');
    const [typeTerm, setTypeTerm] = useState('');


    useEffect(() => {
        localStorage.setItem('Pikachu', searchTerm);
    }, [searchTerm]);

    //event
    const handleSearch = (e) => setSearchTerm(e.target.value);
    const handleType = (e) => setTypeTerm(e.target.value);

    //Search
    const filteredPokemons = pokemons.filter((pokemon) => {
        const byName = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
        const byType = pokemon.type.toLowerCase().includes(typeTerm.toLowerCase());
        return byName && byType;
    });

    return (
        <>
            <h1>Minipokédex</h1>
            <InputWithLabel
                id="search"
                label="Search: "
                value={searchTerm}
                type="text"
                onInputChange={handleSearch}
                placeholder="Search"
            />

             <InputWithLabel
                id="type"
                label="Search type: "
                value={typeTerm}
                type="text"
                onInputChange={handleType}
                placeholder="Ex: Feu"
            />
            
            <hr />
            {filteredPokemons.length > 0 ? (
  <List list={filteredPokemons} />
) : (
  <p>No results</p>
)}
        </>
    );
}

const InputWithLabel = ({ id, label, value, type, onInputChange, placeholder }) => (
    <>
        <label htmlFor={id}>{label}</label>
        <input
            id={id}
            type={type}
            onChange={onInputChange}
            value={value}
            placeholder={placeholder}
        />
    </>
);

const List = ({ list }) => {
    return (
        <ul>
            {list.map((item) => (
                <li key={item.name}>
                    {item.name}  ({item.type})
                </li>
            ))}
        </ul>
    );
};

export default App;
