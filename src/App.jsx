import React from 'react'
import "./App.css";

import Weather from "./component/Weather";


const API_key = "19bc7c8c16bb27f9c37cb022e0955c26";

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
