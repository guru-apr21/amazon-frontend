import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserProducts } from '../reducers/productReducer';
import CartProduct from './CartProduct';
import '../css/UserProducts.css';

function UserProducts() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(setUserProducts()), [dispatch]);
  const products = useSelector((state) => state.products.userProducts);

  return (
    <div className="userProducts">
      <form encType="multipart/form-data" className="userProducts__form">
        <h3>Create Product</h3>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" />
        <label htmlFor="price">Price</label>
        <input id="price" type="text" />
        <label htmlFor="image">Product Images</label>
        <input id="image" type="file" multiple />
        <label htmlFor="brand">Brand</label>
        <input id="brand" type="text" />
        <label htmlFor="category">Choose a category:</label>
        <select name="category" id="category">
          <option value="5fb2a5a2fa5421091c93e186">Laptops</option>
        </select>
        <button type="submit">Create Product</button>
      </form>
      <div className="userProducts__products">
        <h1>Your Products</h1>
        {products.map((product) => (
          <CartProduct
            hideButtons={true}
            key={product._id}
            title={product.title}
            price={product.price}
            rating={5}
            image={`https://${product.images[0]}`}
          ></CartProduct>
        ))}
      </div>
    </div>
  );
}

export default UserProducts;
