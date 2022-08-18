import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'


import Header from "./Components/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Create from "./Components/Create";
import Dashboard from "./Components/Dashboard";
import MyPets from "./Components/MyPets";


function App() {

  return (
    <div className="App">
      <div id="container">

        <Header />

        <main id="site-content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Navigate to="/dashboard" />} />
            <Route path='/register' element={<Register />} />
            <Route path='/create' element={<Create />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/my-pets' element={<MyPets />} />
          </Routes>
        </main>

        <footer id="site-footer">
          <p>@PetMyPet</p>
        </footer>

      </div>

    </div>
  );
}

export default App;
