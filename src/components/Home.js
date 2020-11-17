import React, { useEffect } from 'react';
import Product from './Product';
import '../css/Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../reducers/productReducer';
import { setCart } from '../reducers/cartReducer';

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(setProducts());
    dispatch(setCart());
  }, [dispatch]);

  return (
    <div className="home">
      <img
        className="home__banner"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/14thNov/Family/Amazon_GRD_DesktopHero_Template_1500x600._CB417079999_.jpg"
        alt=""
      />
      <div className="home__row">
        {products.map((product) => (
          <Product
            rating={4}
            key={product._id}
            id={product._id}
            title={product.title}
            image={`https://${product.images[0]}`}
            price={product.price}
          ></Product>
        ))}
      </div>
    </div>
  );
}

export default Home;
