import React, { useEffect, useState } from 'react';
import '../css/Payment.css';
import { useSelector, useDispatch } from 'react-redux';
import CartProduct from './CartProduct';
import { getCartTotal, getTotalItemsInCart } from '../reducers/cartReducer';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { setCart } from '../reducers/cartReducer';
import CurrencyFormat from 'react-currency-format';
import axios from 'axios';

function Payment() {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    dispatch(setCart());

    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payment/create?total=${getCartTotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [dispatch, cart]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        history.replace('/orders');
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout {<Link to="/cart">{getTotalItemsInCart(cart)} items</Link>}
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>IT park ECR</p>
            <p>Optisol Business Solutions</p>
            <p></p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {cart.map((product) => (
              <CartProduct
                quantity={product.quantity}
                key={product.productId._id}
                id={product.productId._id}
                image={`https://${product.productId.images[0]}`}
                title={product.productId.title}
                price={product.productId.price}
                rating={product.productId.rating}
              ></CartProduct>
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}></CardElement>
              <div className="price__container">
                <CurrencyFormat
                  thousandSpacing={'2s'}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={'text'}
                  thousandSeparator={true}
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                ></CurrencyFormat>
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
