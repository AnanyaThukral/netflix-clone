import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './firebase' 
import { useDispatch, useSelector } from 'react-redux'
import {login, logout, selectUser} from './features/userSlice'
 
function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, async(user) => {
      //data dispatch to the store
      if(user){
        //logged in (saves the last user logged in) 
        dispatch(login({
          uid: user.uid,
          email: user.email
        }))
      }else{
        //logged out
        dispatch(logout())
      }
    })
    return unsubscribe
  },[dispatch])

  return (
    <div className="App">
      <Router>
      {/* //if no user return login screen else return other screens*/}
        {!user ? (
          <LoginScreen/>
        ): (
        <Routes>
          <Route path='/profile' element = {<ProfileScreen/>}/>
          <Route path='login' element = {<LoginScreen/>}/>
          <Route path='/' element = {<HomeScreen/>}/>
        </Routes> 
             )}
      </Router>
   
    </div>
  );
}

export default App;
