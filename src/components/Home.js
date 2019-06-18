import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>Welcome to the Avengers</h1>
                <Link to ='Avengers'><img src = 'http://www.lasplash.com/uploads//86f1/4fea6b0c7e4e5-marvel-s-the-avengers-hits-the-600-million-mark-1.jpg'/></Link>
            </div>
        )
    }
}

export default Home;