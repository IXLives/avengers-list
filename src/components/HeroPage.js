import React from 'react';
import {Route, Link} from 'react-router-dom';
import AvengerMovies from './AvengerMovies';
import AvengerDetails from './AvengerDetails';

function HeroPage(props){
    const avenger = props.data.find(hero => props.match.params.heroId === `${hero.id}`);
    return(
        <div>
            <div className = 'hero-card'>
                <h2>{avenger.name}</h2>
                <p>{avenger.nickname}</p>
                <img src = {avenger.thumbnail} />
            </div>

            <div className = 'detail-buttons'>
              <Link to = {`/Avengers/${avenger.id}/details`}><button>Details</button></Link>
              <Link to = {`/Avengers/${avenger.id}/movies`}><button>Movies</button></Link>
            </div>

            <div className = 'nav-buttons'>
              <Link to = '/Avengers'><button>Back</button></Link>
              <Link to = '/'><button>Home</button></Link>
            </div>

            <Route
              path = '/Avengers/:heroId/details'
              render = {() => <AvengerDetails avenger = {avenger} />}
            />
            <Route 
              path = '/Avengers/:heroId/movies'
              render = {() => <AvengerMovies avenger = {avenger}/>}
            />
        </div>
    )
}

export default HeroPage;