import axios from 'axios';
import getToken from '../utils/token';
const baseUrl = 'http://localhost:3001/api/stripe';

let token;

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
