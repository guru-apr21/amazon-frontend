import React from 'react';
import NavBar from './components/NavBar';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './css/App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <h1>login</h1>
        </Route>
        <Route path="/">
          <NavBar></NavBar>
          <h1>Homepage</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
