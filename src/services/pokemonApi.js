import axios from 'axios';

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 2000,
});

// Fonctions à créer :
export const getPokemons = () => api.get('/pokemon');
export const getPokemon = (id) => api.get(`/pokemon/${id}`);

export default api;
