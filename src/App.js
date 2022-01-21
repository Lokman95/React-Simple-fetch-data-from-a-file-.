import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <h2>{people.length} Peoples Birthday Today</h2>
      <List people={people} />
      <button onClick={() => setPeople([])}>Clear</button>
    </main>
  );
}

export default App;
