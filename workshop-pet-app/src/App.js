import { Route, Routes, Navigate } from 'react-router-dom';

import AuthContext from './contexts/AuthContext';
import useAuthHook from './hooks/useAuthHook';

import Header from "./Components/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Create from "./Components/Create";
import Dashboard from './Components/Dashboard/Dashboard';
import MyPets from "./Components/MyPets";
import Details from './Components/Details';
import Edit from './Components/Edit';

const initialValue = '';

function App() {

const [user,setUser] = useAuthHook('user',initialValue);

function login(user){
    setUser(user);
};

const ctxProps = {
    user,
    login
}

    return (
        <div className="App">
            <AuthContext.Provider value={ctxProps}>
            <div id="container">

                <Header />

                <main id="site-content">
                    <Routes>
                        <Route path="/" element={<Navigate to="/dashboard" />} />
                        <Route path='/login' element={<Login /> } />
                        <Route path='/logout' element={<Navigate to="/dashboard" />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/create' element={<Create />} />
                        <Route path='/my-pets' element={<MyPets />} />
                        <Route path='/dashboard' element={<Dashboard />} />
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
