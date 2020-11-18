import React from 'react';
import '../css/SubTotal.css';
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';
import { getCartTotal, getTotalItemsInCart } from '../reducers/cartReducer';

function SubTotal() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="subTotal">
      <CurrencyFormat
        thousandSpacing={'2s'}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
        renderText={(value) => (
          <div>
            <p>Subtotal ({getTotalItemsInCart(cart)} items):</p>
            <p>
              <strong>{value}</strong>
            </p>
          </div>
        )}
      ></CurrencyFormat>

      <button>Proceed to CheckOut</button>
    </div>
  );
}

export default SubTotal;
