import React , { useState } from 'react';
import './App.css';

function App() {
  const [state , setState] = useState(0)
  return (
    <div className="App">
        <button onClick = {()=>setState()}> click </button>
    </div>
  );
}

export default App;
