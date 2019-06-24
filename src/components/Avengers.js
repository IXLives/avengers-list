import React from "react";
import { Link } from "react-router-dom";
import Avenger from "./Avenger";

class Avengers extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <h1>Avengers List</h1>
        <Link to="/">
          <button>Home</button>
        </Link>
        <div className="characters-list-wrapper">
          {this.props.data.map(hero => {
            return <Avenger history = {this.props.history} character={hero} />;
          })}
        </div>
      </div>
    );
  }
}

export default Avengers;
