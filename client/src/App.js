import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import Homepage from './scene/Homepage/Homepage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
//For Routing in React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [user, setLoggedUser] = useState({}); 

  useEffect(() => {
    window.localStorage.setItem('USER_DETAIL', JSON.stringify(user))
  }, [user]);

  useEffect(()=>{
    const data = window.localStorage.getItem('USER_DETAIL');
    setLoggedUser(JSON.parse(data));
  },[])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            path='/homepage' 
            element={
              user && user._id && user.password ? <Homepage setLoggedUser={setLoggedUser} user={user}/> : <Login setLoggedUser={setLoggedUser}/> //Checking if user exist or not
            } 
          />

          <Route 
            path='/' 
            element={
              <Login setLoggedUser={setLoggedUser} />
            }
          />

          <Route exact path='/auth' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
