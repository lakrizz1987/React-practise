import {Route} from 'react-router-dom'

import Header from "./Components/Header.js";
import Login from "./Components/Login.js";
import Register from "./Components/Register.js";
import CreateGame from "./Components/Create.js";
import Home from './Components/Home.js';
import AllGames from './Components/AllGames.js';
import Details from './Components/Details.js';

function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <Route path={'/'} exact component={Home} />
      <Route path={'/allgames'} component={AllGames} />
      <Route path={'/login'} component={Login} />
      <Route path={'/register'} component={Register} />
      <Route path={'/create'} component={CreateGame} />
      <Route path={'/details/:gameId'} exact component={Details} />

    </div>
  );
}

export default App;
