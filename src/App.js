import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Display from './Components/Display';

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <div className="App">
      <Form colorList={ colorList } setColorList={ setColorList }/>
      <Display colorList={ colorList } setColorList={ setColorList }/>
    </div>
  );
}

export default App;
