const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'CLEAR_USER':
      return { ...state, user: null };
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

export const clearUser = () => {
  window.localStorage.clear();
  return {
    type: 'CLEAR_USER',
  };
};

export default userReducer;
