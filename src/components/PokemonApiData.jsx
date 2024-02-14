import React, { useState, useEffect } from 'react';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async (fetchLink) => {
      try {
        const response = await fetch(fetchLink); // Fetch API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
    };

    const PokemonObject = (name,imageURL) => {
    
      const newObject = {
        name: name,
        imageURL: imageURL
      }
      
      return newObject
   
    }

    const filterPokemonList = (pokemonData) =>{
      console.log(pokemonData)
      const newPokemonList = pokemonData.map(pokemon => ({
        name: pokemon.name,
        imageURL: pokemon.sprites.front_default
      }));
      
      setPokemonList(newPokemonList);
    }

    const fetchPokemonData = async () => {
      try {
        const initialData = await fetchData("https://pokeapi.co/api/v2/pokemon?offset=0&limit=12");
        if (initialData) {
          const pokemonDataPromises = initialData.results.map(pokemon => fetchData(pokemon.url));
          const pokemonData = await Promise.all(pokemonDataPromises);
          filterPokemonList(pokemonData)
          
          
        }
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchPokemonData();
  }, []);

  console.log(pokemonList)
  
}

export default PokemonList;
