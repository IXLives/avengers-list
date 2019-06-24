import React from 'react';

function AvengerMovies(props) {
    return (
        <div className = 'character-info-wrapper'>
            <h2>Movies:</h2>
            {props.avenger.movies.map(movie => {
                return (
                    <p>{movie}</p>
                )
            })}
        </div>
    )
}

export default AvengerMovies;