import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login/LoginPage'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
