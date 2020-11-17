import React from 'react';

function CartProduct({ image, title, price, id, rating }) {
  return (
    <div className="cartProduct">
      <img src={image} alt=""></img>
      <div className="cartProduct__info">
        <p>{title}</p>
        <p>{price}</p>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>⭐</p>
          ))}
        <button>Remove from basket</button>
      </div>
    </div>
  );
}

export default CartProduct;
