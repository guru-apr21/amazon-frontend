import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserProducts, createProduct } from '../reducers/productReducer';
import CartProduct from './CartProduct';
import '../css/UserProducts.css';

function UserProducts() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [images, setImages] = useState(null);

  useEffect(() => dispatch(setUserProducts()), [dispatch]);
  const products = useSelector((state) => state.products.userProducts);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let x = 0; x < images.length; x++) {
      data.append('images', images[x]);
    }
    data.append('title', title);
    data.append('price', price);
    data.append('brand', brand);
    data.append('categoryId', categoryId);

    dispatch(createProduct(data));
  };

  return (
    <div className="userProducts">
      <form
        onSubmit={handleSubmit}
        className="userProducts__form"
        encType="multipart/form-data"
      >
        <h3>Create Product</h3>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          required={true}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="image">Product Images</label>
        <input
          id="image"
          name="image"
          type="file"
          onChange={(e) => setImages(e.target.files)}
          multiple
        />
        <label htmlFor="brand">Brand</label>
        <input
          id="brand"
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <label htmlFor="category">Choose a category:</label>
        <select
          id="category"
          onChange={(e) => setCategoryId(e.target.value)}
          value={categoryId}
        >
          <option value="">Select</option>
          <option value="5fb2a5a2fa5421091c93e186">Laptops</option>
        </select>
        <button type="submit">Create Product</button>
      </form>
      <div className="userProducts__products">
        <h1>Your Products</h1>
        {products?.map((product) => (
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
