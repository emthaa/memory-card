function Card(props){

    return(
        <div className="card">
            <img src={props.cardImage}/>
            <p>{props.cardName}</p>
        </div>
    )

}

export default Card