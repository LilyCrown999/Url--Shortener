import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Error from './pages/Error';
import HomePage from './pages/Home';
import People from './pages/People';
import Url from './pages/Url';
import Urls from './pages/Urls';

function App() {

  return (
  <>
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component ={HomePage } />
          <Route exact path="/all" component ={Urls } />
          <Route exact path="/:alias" component={People} />
          <Route exact path="/Q/:alias" component ={Url} />
          <Route path="*" component={HomePage} />
        </Switch>
      </Router>
    </div>
  </>

  );
}

export default App;
