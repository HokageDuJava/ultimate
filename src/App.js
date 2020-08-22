import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Ninja from "./ninja/Ninja";
import "./App.css";

class App extends Component {
  state = {
    ninjas: [
      { name: "Arzad", village: "Paisley", age: 25, id: uuidv4() },
      { name: "Naruto", village: "Konoha", age: 32, id: uuidv4 },
      { name: "Itachi", village: "?", age: 36, id: uuidv4() },
      { name: "Konohamaru", village: "Konoha", age: 15, id: uuidv4() },
    ],
  };

  render() {
    return (
      <div className="App">
        <Ninja ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
