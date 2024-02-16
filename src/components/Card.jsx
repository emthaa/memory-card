import React from 'react';

function Card(props) {
    function handleClick() {
        props.onClick();
    }

    return (
        <div className="card" onClick={handleClick}>
            <p className="card-name noselect">{props.cardName}</p>
            <img className='card-image no-drag noselect' src={props.cardImage} alt={props.cardName}/>
        </div>
    );
}

export default Card;
