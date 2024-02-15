import { useState } from 'react';
import './App.css';
import './style/card.css';
import Card from './components/Card';
import PokemonList from './components/PokemonApiData';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentScore, updateCurrentScore] = useState(0);
  const [bestScore, updateBestScore] = useState(0);

  function renderCards() {
    return pokemonList.map((pokemon, index) => (
      <Card cardName={pokemon.name} cardImage={pokemon.imageURL} />
    ));
  }

  return (
    <>
      <div className='topApp'>
        <h1>Memory Game</h1>
        <div>
          <p className='score'>Score: {currentScore}</p>
          <p className='score'>Best Score: {bestScore}</p>
        </div>
      </div>
      <PokemonList setPokemonList={setPokemonList} />
      <main>
        <div className='card-holder'>{renderCards()}</div>
      </main>
    </>
  );
}

export default App;
