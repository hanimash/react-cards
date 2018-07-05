import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Welcome from './components/Welcome';
import Card from './components/Card';
import NotFound from './components/NotFound';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Welcome}/>
          <Route path='/card/:id' component={Card}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    );

  }
}

export default App;