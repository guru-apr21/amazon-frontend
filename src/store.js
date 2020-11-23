import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';
import orderReducer from './reducers/orderReducer';
import categoryReducer from './reducers/categoryReducer';

const reducer = combineReducers({
  products: productReducer,
  user: userReducer,
  cart: cartReducer,
  orders: orderReducer,
  category: categoryReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
