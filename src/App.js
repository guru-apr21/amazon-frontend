import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './css/App.css';
import SignIn from './components/SignIn';
import { useDispatch } from 'react-redux';
import { setUser } from './reducers/userReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('loggedInUser'));
    if (user) {
      dispatch(setUser(user));
    }
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <SignIn></SignIn>
        </Route>
        <Route path="/orders">
          <h1>Orders</h1>
        </Route>
        <Route path="/cart">
          <NavBar></NavBar>
          <h1>Cart</h1>
        </Route>
        <Route path="/">
          <NavBar></NavBar>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
