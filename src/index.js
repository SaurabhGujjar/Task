import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Auth from './Auth';
import { Route, BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';



function Router() {

 

  return (
    <CookiesProvider>
    <BrowserRouter>
    <Route exact path="/" component={Auth} />
    <Route exact path="/panel" component={App} />
    </BrowserRouter>
    </CookiesProvider>
  )

}

ReactDOM.render(
  <Router />, document.getElementById('root'));

serviceWorker.unregister();
