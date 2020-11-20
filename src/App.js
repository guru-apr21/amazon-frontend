import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import './css/App.css';
import SignIn from './components/SignIn';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './reducers/userReducer';
import Home from './components/Home';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/Orders';
import SignUp from './components/SignUp';
import ProductUpload from './components/ProductUpload';

const promise = loadStripe(
  'pk_test_51HhUbGDRaW3L2zxro7dCQpW3o6FKPZokTqs58kzDLoIpRuLtPmCGK126aNWHjOu102rPhvVEzOR0R2B4VDBs9u1D00lkMClOgU'
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('loggedInUser'));
    if (user) {
      dispatch(setUser(user));
    }
  }, [dispatch]);

  const user = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          {user ? <Redirect to="/"></Redirect> : <SignIn />}
        </Route>
        <Route path="/signup">
          {user ? <Redirect to="/"></Redirect> : <SignUp />}
        </Route>
        <Route path="/orders">
          {!user ? (
            <Redirect to="/login"></Redirect>
          ) : (
            <>
              <NavBar />
              <Orders />
            </>
          )}
        </Route>
        <Route exact={true} path="/cart">
          {!user ? (
            <Redirect to="/login"></Redirect>
          ) : (
            <>
              <NavBar />
              <Cart />
            </>
          )}
        </Route>
        <Route path="/payment">
          {!user ? (
            <Redirect to="/login"></Redirect>
          ) : (
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          )}
        </Route>
        <Route path="/products">
          <NavBar />
          <ProductUpload />
        </Route>
        <Route exact={true} path="/">
          <NavBar />
          <Home />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Redirect to="/404"></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
