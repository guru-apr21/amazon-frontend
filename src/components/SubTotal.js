import React from 'react';
import '../css/SubTotal.css';
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';

const getCartTotal = (cart) => {
  const total = cart.reduce((amount, item) => amount + item.productId.price, 0);
  return total;
};

function SubTotal() {
  const cart = useSelector((state) => state.cart);
  const total = getCartTotal(cart);

  return (
    <div className="subTotal">
      <CurrencyFormat
        thousandSpacing={'2s'}
        decimalScale={2}
        value={total}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
        renderText={(value) => (
          <div>
            <p>Subtotal ({} items):</p>
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
