import React, { useEffect } from 'react';
import './App.css';

import { useCookies } from 'react-cookie';





function App() {
  const [token, setToken, deleteToken] = useCookies(['mytoken']);
  const [checkRole, setCheckRole] = useCookies(['rolee']);

  useEffect( () => {
    console.log(token);
    console.log(setToken);
   console.log(setCheckRole);
    if (!token['mytoken']) { window.location.href = '/'; }
  }, [token] )

 

    const logoutUser = () => {
      deleteToken(['mytoken'])
    }


    return (
      <div className="App">
          <header className="App-header">
          
          <h1> 
           
          <span>Auth Panel</span>
          </h1>
          <h2 id="log" onClick={logoutUser}>Logout</h2>
          </header>
          
          <div className="layout">
          <div>
          { checkRole === "admin" ? <div>
            <button id="red">Red</button>
          <button id="green">Green</button>
          </div>
           : <button id="green">Green</button> }
         
          </div>
          
          </div>
      </div>
    );
}

export default App;
