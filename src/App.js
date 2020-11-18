import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import './css/App.css';
import SignIn from './components/SignIn';
import { useDispatch } from 'react-redux';
import { setUser } from './reducers/userReducer';
import Home from './components/Home';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('loggedInUser'));
    if (user) {
      dispatch(setUser(user));
    }
    // eslint-disable-next-line
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
          <Cart></Cart>
        </Route>
        <Route exact={true} path="/">
          <NavBar></NavBar>
          <Home />
        </Route>
        <Route path="/404">
          <NotFound></NotFound>
        </Route>
        <Redirect to="/404"></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
