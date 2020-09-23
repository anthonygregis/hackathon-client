import React from 'react';
import logo from './logo.svg';
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import Results from './components/Results'

function App() {
  return (
    
    <div className="App">
      <Switch>
        {/* <Route exact path="/" component={Home}/> */}
        <Route path="/results/" render={(props) => <Results {...props} />}/>
      </Switch>
    </div>
  );
}

export default App;
