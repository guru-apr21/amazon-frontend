import React from 'react';
import '../css/Product.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from './common/Button';
import {
  addProductToCart,
  updateProductQuantity,
} from '../reducers/cartReducer';

function Product({ id, title, image, price, rating = 0 }) {
  const dispatch = useDispatch();
  const history = useHistory();

  // Find whether the product to be added is in the cart or not
  // if yes returns the product details
  const product = useSelector((state) =>
    state.cart.find((item) => item.productId._id === id)
  );

  const user = useSelector((state) => state.user);

  // If product to be added is in the cart updates the quantity of the
  // product by dispatching appropriate actions
  const handleAddToCart = async () => {
    if (user) {
      !product
        ? dispatch(addProductToCart(id))
        : dispatch(updateProductQuantity(id, product.quantity + 1));
    } else {
      history.push('/login');
    }
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          ₹<strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <Button
        disabled={
          product && (product.productId.price > 50000 || product.quantity > 9)
        }
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
    </div>
  );
}

export default Product;
