import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserProducts } from '../reducers/productReducer';

function ProductUpload() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(setUserProducts()), [dispatch]);
  const products = useSelector((state) => state.products.userProducts);

  return (
    <div className="orders">
      <h1>Your Products</h1>
    </div>
  );
}

export default ProductUpload;
