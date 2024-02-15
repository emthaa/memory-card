function Card(props){

    

    return(
        <div className="card">
            <p className="card-name noselect" >{props.cardName}</p>
            <img className ='card-image no-drag noselect' src={props.cardImage}/>
        </div>
    )

}

export default Card