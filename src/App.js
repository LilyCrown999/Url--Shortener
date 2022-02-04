import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/Home';
import TableExample from './pages/People';
import Url from './pages/Url';
import Urls from './pages/Urls';

function App() {

  return (
  <>
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component ={HomePage } />
          <Route exact path="/res" component={TableExample} />
          <Route exact path="/all" component ={Urls } />
          <Route exact path="/Q/:alias" component ={Url} />
          <Route path="*" component={HomePage} />
        </Switch>
      </Router>
    </div>
  </>

  );
}

export default App;
