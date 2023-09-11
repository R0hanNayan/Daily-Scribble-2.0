import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import Homepage from './scene/Homepage/Homepage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
//For Routing in React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Compose from './scene/Compose/Compose';
import Posts from './components/Posts/Posts';



function App() {
  const [user, setLoggedUser] = useState({}); 

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            path='/homepage' 
            element={
              user && user._id && user.password ? <Homepage setLoggedUser={setLoggedUser}/> : <Login setLoggedUser={setLoggedUser}/> //Checking if user exist or not
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
