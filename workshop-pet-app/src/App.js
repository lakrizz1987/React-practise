import { Route, Routes, Navigate } from 'react-router-dom';
import {useState} from 'react'
import AuthContext from './contexts/AuthContext';

import Header from "./Components/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Create from "./Components/Create";
import Dashboard from './Components/Dashboard/Dashboard';
import MyPets from "./Components/MyPets";
import Details from './Components/Details';
import Edit from './Components/Edit';


function App() {

const [user,setUser] = useState('');

function login(user){
    setUser(user);
};


    return (
        <div className="App">
            <AuthContext.Provider value={user}>
            <div id="container">

                <Header />

                <main id="site-content">
                    <Routes>
                        <Route path="/" element={<Navigate to="/dashboard" />} />
                        <Route path='/login' element={<Login login={login} /> } />
                        <Route path='/logout' element={<Navigate to="/dashboard" />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/create' element={<Create />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/my-pets' element={<MyPets />} />
                        <Route path='/dashboard/:id' element={<Details />} />
                        <Route path='/edit/:id' element={<Edit />} />
                    </Routes>
                </main>

                <footer id="site-footer">
                    <p>@PetMyPet</p>
                </footer>

            </div>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
