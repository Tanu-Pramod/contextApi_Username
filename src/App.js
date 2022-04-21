import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Profile from './components/profile';
import { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const LoginContext = createContext();

function App() {
  const [username, setUsername] = useState();
  const [showprofile, setShowprofile] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">

        <LoginContext.Provider value={{ username, setUsername, setShowprofile }}>

          {showprofile ? <Profile /> : <Login />}

        </LoginContext.Provider>

      </div >
    </BrowserRouter>



  );
}

export default App;

