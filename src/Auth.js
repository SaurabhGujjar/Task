import React, { useState,useEffect } from 'react';
import {API} from './API';
import { useCookies } from 'react-cookie';

function Auth() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginView, setIsLoginView] = useState(true);

    const [token, setToken] = useCookies(['mytoken']);
    const [checkRole, setCheckRole] = useCookies(['rolee']);

    useEffect( () => {
        
        if (token['mytoken']) { window.location.href = '/panel'; }
    }, [token] ) 

    const loginClicked = () => {
        API.loginUser({username: username, password: password})
        .then( resp => {setToken('mytoken', resp.token)
        setCheckRole('rolee', resp.data.user.role)})
        .catch(err => console.log(err))
    }

    const setLoginView = () => {
        setIsLoginView(false);
    }

    const setLoginViewRev = () => {
        setIsLoginView(true);
    }

    const registerClicked = () => {
        
        API.registerUser({username: username, password: password, email: email, role: role})
        .then( () => loginClicked() )
        .catch(err => console.log(err))
    }

    const isDisabled = false;

    return (
                <div className="App">
                    <header className="App-header">
                    {isLoginView ? <h1>Login</h1> : <h1>Register</h1>}
                </header>
                <div className="login-container">
                

                {isLoginView ? 
                <div>
                <label htmlFor="email">Email</label> <br />
                <input id="email" type="text" placeholder="Email" value={email} onChange={ evt => setEmail(evt.target.value)} /><br />
                <label htmlFor="password">Password</label><br />
                <input id="password" type="password" placeholder="Password" value={password} onChange={evt => setPassword(evt.target.value)} /><br />
                <button onClick={ loginClicked } disabled={isDisabled}>Login</button>
                </div> :
                <div>
                <label htmlFor="username">Username</label> <br />
                <input id="username" type="text" placeholder="User Name" value={username} onChange={ evt => setUsername(evt.target.value)} /><br />
                <label htmlFor="email">Email</label> <br />
                <input id="email" type="text" placeholder="Email" value={email} onChange={ evt => setEmail(evt.target.value)} /><br />
                <label htmlFor="role">Role</label> <br />
                <input id="role" type="text" placeholder="Role" value={role} onChange={ evt => setRole(evt.target.value)} /><br />
                <label htmlFor="password">Password</label><br />
                <input id="password" type="password" placeholder="Password" value={password} onChange={evt => setPassword(evt.target.value)} /><br />
                <button onClick={ registerClicked } disabled={isDisabled}>Register</button>
                </div> }
                
                
                { isLoginView ? <p onClick={setLoginView}>You don't have an account? <span>Register here!</span></p> : <p onClick={setLoginViewRev}>You already have an account? <span>Login here!</span></p> }
                
                </div>
                </div>
    )
}

export default Auth;