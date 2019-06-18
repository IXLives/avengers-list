import React from 'react';
import {Link} from 'react-router-dom';

function Avenger(props) {
 
        const heroId = props.character.id;
        return(
            <Link to = {`/avengers/${heroId}`} className = 'character-card'>
                <h2>{props.character.name}</h2>
                <img src = {props.character.thumbnail} />
            </Link>)
    
}

export default Avenger;