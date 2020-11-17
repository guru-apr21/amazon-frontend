import React, { useEffect } from 'react';
import Product from './Product';
import '../css/Home.css';
import { getAllProducts } from '../services/productService';
import image1 from '../images/mac.jpg';
import image2 from '../images/dell.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../reducers/productReducer';

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    getAllProducts()
      .then((data) => dispatch(setProducts(data)))
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="home">
      <img
        className="home__banner"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/14thNov/Family/Amazon_GRD_DesktopHero_Template_1500x600._CB417079999_.jpg"
        alt=""
      />
      <div className="home__row">
        {console.log(products)}
        {products.map((product) => (
          <Product
            rating={4}
            key={product._id}
            id={product._id}
            title={product.title}
            image={`https://${product.images[0]}`}
            price={product.price}
          >
            {' '}
          </Product>
        ))}
      </div>

      <div className="home__row">
        <Product
          title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen
          Intel Core i7) - Space Grey"
          image={image1}
          price={189990}
          rating={4}
        ></Product>
        <Product
          title="Dell Alienware M15 R2 15.6-inch FHD Laptop (9th Gen Core i9-9980HK/16GB/1TB SSD/Windows 10 + MS Office/8GB NVIDIA 2080 Graphics), Lunar Light"
          image={image2}
          price={269990}
          rating={3}
        ></Product>
        <Product
          title="Lenovo Ideapad L340 Gaming Intel Core i5 9th Gen 15.6 inch FHD Gaming Laptop (8GB/1TB/Windows 10/NVIDIA GTX 1050 3GB Graphics/Black/2.2Kg), 81LK01L3IN"
          image={
            'https://d22d8u91p5adm9.cloudfront.net/productImages/fc02d8e0-2828-11eb-a064-df5e238aabbc.JPG'
          }
          price={52990}
          rating={5}
        ></Product>
      </div>
    </div>
  );
}

export default Home;
