import { signup } from '../services/signInService';

const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...action.payload };
    case 'CLEAR_USER':
      return null;
    default:
      return state;
  }
};

export const setUser = (user) => {
  window.localStorage.setItem('loggedInUser', JSON.stringify(user));
  return {
    type: 'SET_USER',
    payload: user,
  };
};

export const signUpUser = (body) => {
  return async (dispatch) => {
    const { user } = await signup(body);
    window.localStorage.setItem('loggedInUser', JSON.stringify(user));
    dispatch({ type: 'SET_USER', payload: user });
  };
};

export const clearUser = () => {
  window.localStorage.clear();
  return {
    type: 'CLEAR_USER',
  };
};

export default userReducer;
