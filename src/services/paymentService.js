import axios from '../axios/index';
import getToken from '../utils/token';

let token;

export const createPaymentIntent = async (amount) => {
  try {
    token = getToken();
    const { data } = await axios.post(
      `stripe/payment-intent`,
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
      `stripe/confirm-payment`,
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
