import React from 'react';
import '../css/SubTotal.css';
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';
import { getCartTotal, getTotalItemsInCart } from '../reducers/cartReducer';
import { useHistory } from 'react-router-dom';

function SubTotal() {
  const history = useHistory();
  const cart = useSelector((state) => state.cart);

  return (
    <div className="subTotal">
      <CurrencyFormat
        thousandSpacing={'2s'}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
        renderText={(value) => (
          <div className="subTotal__box">
            <p className="subTotal__info">
              Subtotal ({getTotalItemsInCart(cart)} items):
            </p>
            <p className="subTotal__info">
              ₹ <strong>{value}</strong>
            </p>
          </div>
        )}
      ></CurrencyFormat>

      <button onClick={() => history.push('/payment')}>Proceed to Buy</button>
    </div>
  );
}

export default SubTotal;
