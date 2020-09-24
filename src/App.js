import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Results from './components/Results'
import Home from './components/Home'

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/results/" component={Results}/>
      </Switch>
    </div>
  );
}

export default App;
