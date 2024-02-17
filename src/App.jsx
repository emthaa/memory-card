import React, { useState } from 'react';
import './App.css';
import './style/card.css';
import Card from './components/Card';
import PokemonList from './components/PokemonApiData';

function App() {
    const [pokemonList, setPokemonList] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [cardsClickedOn,setCardsClickedOn] = useState([]) //stores cards ids

    function shuffleCards() {
        // Clone the pokemonList array
        const shuffledList = [...pokemonList];

        // Shuffle the cloned array
        shuffledList.sort(() => Math.random() - 0.5);

        // Set the shuffled list
        setPokemonList(shuffledList);
    }

    function checkIfClickedAlready(id){
        for(let i = 0; i<cardsClickedOn.length;i++){
            if(cardsClickedOn[i] == id){
                return true
            }
        }
        return false
    }



    function storeCardId(id){
        let placeHolderArray
        if(cardsClickedOn.length == 0){
             placeHolderArray = [id];
        }else{
             placeHolderArray = [...cardsClickedOn, id];
        }
        
        setCardsClickedOn(placeHolderArray)
    }

    //make handler for best score
    
    function handleBestScore(updatedScore){  //checks if current score is bigger than best score
        if(updatedScore >= bestScore){
            setBestScore(updatedScore)
        }
    }

     function handleCardClick(id) {
        storeCardId(id);
        const clickedAlready = checkIfClickedAlready(id) ;
        if(clickedAlready == true){
            setCurrentScore(0);
            setCardsClickedOn([]); //user got something wrong
        }else if(clickedAlready == false){
            let updatedScore = currentScore + 1
            setCurrentScore(updatedScore); //user got it right
            handleBestScore(updatedScore)
        }
        shuffleCards();
        
    }

    // Render cards function
    function renderCards() {
        return pokemonList.map(pokemon => (
            <Card
                key={pokemon.id}
                cardName={pokemon.name}
                cardImage={pokemon.imageURL}
                onClick={() => handleCardClick(pokemon.id)} 
            />
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
