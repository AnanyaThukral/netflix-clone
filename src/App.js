import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import Profile from './screens/ProfileScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import NavBar from './components/NavBar';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './firebase'

function App() {

  const user = null;

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, async(user) => {
      if(user){
        //logged in (saves the last user logged in) 
      }else{
        //logged out
      }
    })
    return unsubscribe
  },[])

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
