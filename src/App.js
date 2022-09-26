import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import Profile from './screens/ProfileScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import NavBar from './components/NavBar';

function App() {

  const user = {
    name: 'Ananya'
  };

  return (
    <div className="App">
      <Router>
      {/* //if no user return login screen else return other screens*/}
        {!user ? (
          <LoginScreen/>
        ): (
        <Routes>
          <Route path='/profile' element = {<Profile/>}/>
          <Route path='login' element = {<LoginScreen/>}/>
          <Route path='/' element = {<HomeScreen/>}/>
        </Routes> 
             )}
      </Router>
   
    </div>
  );
}

export default App;
