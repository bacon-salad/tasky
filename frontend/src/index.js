import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import { Redirect, BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/dashBoard/Dashboard';






ReactDOM.render(

<div>
<Router>
<Route exact path="/" render={() => <Redirect to="/forms" />} />
<Route path="/forms" component={App}/>
<Route path='/home' component={Dashboard}/>
</Router>
</div>,



document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
