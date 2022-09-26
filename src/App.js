import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import Profile from './components/Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/profile' element = {<Profile/>}/>
          <Route path='/' element = {<HomeScreen/>}/>
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
