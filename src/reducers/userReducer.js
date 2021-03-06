import { signup, changeRole } from '../services/signInService';

const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...action.payload };
    case 'CLEAR_USER':
      return null;
    case 'CHANGE_ROLE':
      return { ...action.payload };
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
    try {
      const { user } = await signup(body);
      window.localStorage.setItem('loggedInUser', JSON.stringify(user));
      dispatch({ type: 'SET_USER', payload: user });
    } catch (err) {
      console.log(err);
    }
  };
};

export const clearUser = () => {
  window.localStorage.clear();
  return {
    type: 'CLEAR_USER',
  };
};

export const createSeller = () => {
  return async (dispatch) => {
    const user = await changeRole();
    window.localStorage.setItem('loggedInUser', JSON.stringify(user));
    dispatch({ type: 'CHANGE_ROLE', payload: user });
  };
};

export default userReducer;
