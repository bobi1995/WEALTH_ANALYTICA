import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import './styles/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/login" component={Login}/>
    </Router>
  )
}

export default App;
