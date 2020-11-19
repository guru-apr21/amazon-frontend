import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/stripe';

let token;
const getToken = () => {
  let user = window.localStorage.getItem('loggedInUser');
  if (user) {
    user = JSON.parse(user);
    return user.accessToken;
  }
};

export const createPaymentIntent = async (amount) => {
  try {
    token = getToken();
    const { data } = await axios.post(
      `${baseUrl}/payment-intent`,
      { amount },
      {
        headers: { 'x-access-token': token },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const confirmPayment = async (paymentMethod, paymentIntentId) => {
  try {
    token = getToken();
    const { data } = await axios.post(
      `${baseUrl}/confirm-payment`,
      { paymentMethod, paymentIntentId },
      {
        headers: { 'x-access-token': token },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
