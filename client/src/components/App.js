import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

// App Components
import Header from './Header';
import CreateReactAppTest from './CreateReactAppTest';
import SemanticUITest from './SemanticUITest';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header></Header>
            <Route exact path="/" component={ CreateReactAppTest } />
            <Route exact path="/semantic" component={ SemanticUITest } />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
