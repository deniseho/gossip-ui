import React, { useState } from 'react';
import './App.css';
import Table from './Table.js';

const NODES_DATA_URL = 'https://api.myjson.com/bins/kzvhg';


const App = () => {
  const [data, setData] = useState([]);

  fetch(NODES_DATA_URL)
    .then(response => response.json())
    .then(jsonResponse => {
      const result = Object.keys(jsonResponse).map(function(key) {
        jsonResponse[key].ip = key;
        return jsonResponse[key];
      });
      setData(result);
    })

  return (
    <Table data={data}/>
  )
}

export default App;