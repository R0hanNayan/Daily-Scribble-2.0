import { useEffect, useState } from 'react';
import Homepage from './scene/Homepage/Homepage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  
  return (
    <div className="App">
      {/* <Homepage /> */}
      <Login />
      <Register />
    </div>
  );
}

export default App;
