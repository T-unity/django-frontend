import React from 'react';
import './index.css';

const path: string = 'http://localhost:8000/api/tweet/';
fetch(path).then(res =>
  console.log(res.json())
  );

function App() {
  return (
    <div className="start-project">
      <h1>伝説が始まる...</h1>
    </div>
  );
}

export default App;
