import React from "react";

import Ninja from "./ninja/Ninja";
import "./ninja.css";

class App extends React.Component {
  state = {
    ninjas: [
      { name: "Naruto", age: 35, village: "Konoha", id: 1 },
      { name: "Sasuke", age: "32", village: "Konoha", id: 2 },
      { name: "Itachi", age: 40, village: "Konoha", id: 3 },
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
