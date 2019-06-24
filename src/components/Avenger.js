import React from 'react';
import {Route, Link} from 'react-router-dom';

class Avenger extends React.Component {
    constructor(props) {
        super(props);
    }
    
    
    render() {
        return(
            <Link to = {`/avengers/${this.props.character.id}`} className = 'character-card'>
                <h2>{this.props.character.name}</h2>
                <img src = {this.props.character.thumbnail} />
            </Link>)
    }
    
}

export default Avenger;