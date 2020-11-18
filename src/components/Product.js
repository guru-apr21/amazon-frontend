import React from 'react';
import '../css/Product.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductToCart,
  updateProductQuantity,
} from '../reducers/cartReducer';

function Product({ id, title, image, price, rating = 0 }) {
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.cart.find((item) => item.productId._id === id)
  );

  const handleAddToCart = async () => {
    !product
      ? dispatch(addProductToCart(id))
      : dispatch(updateProductQuantity(id, product.quantity + 1));
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
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
