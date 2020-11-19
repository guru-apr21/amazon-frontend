import React, { useEffect, useState } from 'react';
import '../css/Payment.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteCartItems,
  getCartTotal,
  getTotalItemsInCart,
  setCart,
} from '../reducers/cartReducer';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import CartProduct from './CartProduct';
import {
  confirmPayment,
  createPaymentIntent,
} from '../services/paymentService';

function Payment() {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [paymentIntentId, setPaymentIntentId] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    dispatch(setCart());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const amount = getCartTotal(cart);
    if (amount) {
      createPaymentIntent(amount * 100).then(({ payment_intent_id }) =>
        setPaymentIntentId(payment_intent_id)
      );
    }
    // eslint-disable-next-line
  }, [cart]);

  const handleChange = (e) => {
    if (e.complete) {
      setDisabled(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      const data = await confirmPayment(paymentMethod.id, paymentIntentId);
      if (data === 'success') {
        dispatch(deleteCartItems());
        setProcessing(false);
        history.replace('/orders');
      }
    }
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
        {cart.length > 0 && (
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange}></CardElement>
                <CurrencyFormat
                  thousandSpacing={'2s'}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={'text'}
                  thousandSeparator={true}
                  renderText={(value) => <p>Order Total: ₹{value}</p>}
                ></CurrencyFormat>
                <button type="submit" disabled={processing || disabled}>
                  <span>{processing ? 'Processing' : 'Buy Now'}</span>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;
