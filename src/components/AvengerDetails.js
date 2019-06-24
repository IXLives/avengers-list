import React from 'react';

function AvengerDetails(props) {
    return (
        <div className = 'character-info-wrapper'>
            <p>{props.avenger.description}</p>
            <img src = {props.avenger.img} className = 'character-image' />
        </div>
    )
}

export default AvengerDetails;