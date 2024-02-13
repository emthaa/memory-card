import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import PokemonList from './components/PokemonApiData'

//make little database with pokemon 
// id them



function App() {

  const [currentScore,updateCurrentScore] = useState(0)
  const [bestScore,updateBestScore] = useState(0)

  return (
    <>
      <div className='topApp'>
        <h1>Pokemon Memory Game</h1>
        <div>
          <p>Score: {currentScore}</p>
          <p>Best Score: {bestScore}</p>
        </div>
      </div>
      
      <main>
      <Card />
      <PokemonList />
      </main>
    </>
  )
}

export default App
