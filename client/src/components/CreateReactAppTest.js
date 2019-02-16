import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';
import '../css/App.css';

const CreateReactAppTest = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link
          className="App-link"
          to="/semantic"
        >
          Semantic-UI Test
        </Link>
      </header>
    </div>
  );
};

export default CreateReactAppTest;
