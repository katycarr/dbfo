import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Petition from './components/petition';
import Home from './components/home';
import Letter from './components/letter';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/petition' component={Petition} />
          <Route path='/letter' component={Letter} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
