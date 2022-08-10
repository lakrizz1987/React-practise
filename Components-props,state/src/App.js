import './App.css';
import Heading from './Components/Heading';
import Counter from './Components/Counter';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Heading color='red'>My Counter</Heading>
        <Counter/>
      </header>
    </div>
  );

}

export default App;
