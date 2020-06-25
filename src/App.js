import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Catalog from './components/catalog';
import About from './components/about';
import Navbar from './components/navbar';
import Home from './components/home';
import Red from './components/red';
import White from './components/white';
import Green from './components/green';
import Blue from './components/blue';
import Black from './components/black';


function App() {
  return (

    <Router>
    <div className="App">
      <Navbar />
    
      <Switch>

        <Route path="/" exact component={Home}/>
        <Route path="/catalog" component={Catalog}/>
        <Route path="/about" component={About}/>
        <Route path="/red" component={Red}/>
        <Route path="/white" component={White}/>
        <Route path="/green" component={Green}/>
        <Route path="/blue" component={Blue}/>
        <Route path="/black" component={Black}/>

      </Switch>
    </div>
        </Router>
        
  );
}

export default App;