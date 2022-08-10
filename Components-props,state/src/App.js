import './App.css';
import Heading from './Components/Heading';
import Counter from './Components/Counter';
import React from 'react';

function App() {
  let [color,setColor] = React.useState('#cc5120')

  function generateHex() {
    let resources = '0123456789ABCDEF';
    let result = '#';

    for (let i = 0; i < 6; i++) {
        result += resources[Math.floor(Math.random() * 16)];
    }

    return result;
}

  return (
    <div className="App">
      <header className="App-header">
        <Heading color={color}>My Counter</Heading>
        <Counter/>
        <button onClick={()=>setColor(generateHex())}>Change Color</button>
      </header>
    </div>
  );

}

export default App;
