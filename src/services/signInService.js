import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/users';

const getToken = () => {
  let user = window.localStorage.getItem('loggedInUser');
  if (user) {
    user = JSON.parse(user);
    console.log(user.accessToken);
    return user.accessToken;
  }
};

export const signin = async (body) => {
  const { data } = await axios.post(`${baseUrl}/signin`, body);
  return data;
};

export const signup = async (body) => {
  const { data } = await axios.post(`${baseUrl}/signup`, body);
  return data;
};

export const changeRole = async () => {
  try {
    const token = getToken();
    console.log(token);
    const { data } = await axios.put(`${baseUrl}/role`, null, {
      headers: { 'x-access-token': token },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
