import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Catalog from './components/catalog';
import About from './components/about';
import Navbar from './components/navbar';


function App() {
  return (
    <Router>
<div className="App">
  <Navbar />

  <Switch>

    <Route path="/catalog" component={Catalog}/>
    <Route path="/about" component={About}/>

  </Switch>

</div>
    </Router>
    
  );
}

export default App;