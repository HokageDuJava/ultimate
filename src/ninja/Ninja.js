import React from "react";

const Ninja = ({ ninjas }) => {
  const ninjaList = ninjas.length ? (
    ninjas.map((ninja) => {
      return ninja.age >= 16 ? (
        <div className="ninjas" key={ninja.id}>
          <p>Name: {ninja.name}</p>
          <p>Village: {ninja.village}</p>
          <p>Age: {ninja.age}</p>
        </div>
      ) : (
        <div className="error" key={ninja.id}>
          <p>This apprentice is too Young to be a ninja</p>
        </div>
      );
    })
  ) : (
    <div className="error">
      <p>There is no ninja in the list</p>
    </div>
  );

  return <div>{ninjaList}</div>;
};

export default Ninja;
